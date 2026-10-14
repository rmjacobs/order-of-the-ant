# Order of the Ant

A tribute for the producers of the Order of the Ant on the [No Agenda](https://www.noagendashow.net/) podcast. Tribute donors of $333.33 or more received a single-run pin, designed by Back Office Jae, and a certificate signed by John C. Dvorak. The site lists every member, twice: once as a roll, once as a certificate.

Live site: [rmjacobs.github.io/order-of-the-ant](https://rmjacobs.github.io/order-of-the-ant/)

- [The roll](https://rmjacobs.github.io/order-of-the-ant/) is the front page.
- [The certificate](https://rmjacobs.github.io/order-of-the-ant/certificate.html) is the same membership, set as the document they were sent.

## Where the names come from

The 146 members are taken from the Order of the Ant credit blocks on [adam.curry.com](https://adam.curry.com/) and from Adam Curry’s on-air donation wrap-ups. They are grouped by the episode in which they were first inducted (1897 through 1907). Episode 1902 had no inductions.

## Files

Static site. No build step.

- `index.html` — the roll
- `certificate.html` — the certificate
- `js/roster.js` — the 146 names, shared by both pages
- `js/page.js` — renders and searches that roster
- `css/styles.css` — styles
- `fonts/` — Mukta, served with the page
- `images/` — pin artwork
- `audio/jcd-ant-battles.mp3` — excerpt from episode 1889, starting at 7:35:47

## Preview locally

```bash
python3 -m http.server 8765
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).
