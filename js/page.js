(function () {
  var episodes = window.EPISODES;
  var page = document.body.getAttribute("data-page");
  var mount = document.getElementById("episodes");
  var search = document.getElementById("member-search");
  var clear = document.getElementById("clear-search");
  var empty = document.getElementById("empty-state");

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function names(list, className) {
    return '<ul class="' + className + '">' + list.map(function (name) {
      return '<li data-name="' + esc(name.toLocaleLowerCase()) + '">' + esc(name) + "</li>";
    }).join("") + "</ul>";
  }

  mount.innerHTML = episodes.map(function (ep) {
    var block;
    if (page === "certificate") {
      block = '<section class="annex-ep" data-episode="' + ep.id + '" data-title="' + esc(ep.title.toLocaleLowerCase()) + '"><h3>' + ep.id + " · " + esc(ep.title) + "</h3>" + names(ep.members, "annex-names") + "</section>";
    } else {
      block = '<section class="roll-episode" data-episode="' + ep.id + '" data-title="' + esc(ep.title.toLocaleLowerCase()) + '">' +
        '<div><p class="ep-num">' + ep.id + '</p><p class="ep-name">' + esc(ep.title) + "</p>" +
        '<p class="ep-count">' + ep.members.length + (ep.members.length === 1 ? " member" : " members") + "</p>" +
        '<div class="ep-links"><a href="' + esc(ep.listen) + '" target="_blank" rel="noopener">Listen ↗</a>' +
        '<a class="jump" href="' + esc(ep.jump) + '" target="_blank" rel="noopener">' + esc(ep.jumpLabel) + " ↗</a></div></div>" +
        names(ep.members, "names") + "</section>";
    }
    if (ep.id === "1901") {
      block += page === "certificate"
        ? '<p class="annex-gap" data-gap="1902">1902 · No inductions</p>'
        : '<section class="roll-episode roll-gap" data-gap="1902"><div><p class="ep-num">1902</p><p class="ep-name">No inductions</p></div></section>';
    }
    return block;
  }).join("");

  function filter() {
    var query = search.value.trim().toLocaleLowerCase();
    Array.prototype.forEach.call(document.querySelectorAll("[data-episode]"), function (section) {
      var titleHit = !!query && ((section.getAttribute("data-title") || "").indexOf(query) !== -1 || section.getAttribute("data-episode").indexOf(query) !== -1);
      Array.prototype.forEach.call(section.querySelectorAll("[data-name]"), function (item) {
        item.hidden = !(titleHit || !query || item.getAttribute("data-name").indexOf(query) !== -1);
      });
      section.hidden = !section.querySelector("[data-name]:not([hidden])");
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-gap]"), function (gap) {
      gap.hidden = !!query;
    });
    var visible = document.querySelectorAll("[data-episode]:not([hidden]) [data-name]:not([hidden])").length;
    clear.hidden = !query;
    empty.style.display = visible ? "none" : "block";
  }

  search.addEventListener("input", filter);
  clear.addEventListener("click", function () {
    search.value = "";
    filter();
    search.focus();
  });
}());
