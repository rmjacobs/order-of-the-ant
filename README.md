# Order of the Ant

A tribute page for the producers of the Order of the Ant on the [No Agenda](https://www.noagendashow.net/) podcast. Tribute donors of $333.33 or more received a single-run pin, designed by Back Office Jae, and a certificate signed by John C. Dvorak. The page lists every member.

Live site: [rmjacobs.github.io/order-of-the-ant](https://rmjacobs.github.io/order-of-the-ant/)

## Where the names come from

The 146 members are taken from the Order of the Ant credit blocks on [adam.curry.com](https://adam.curry.com/) and from Adam Curry’s on-air donation wrap-ups. They are grouped by the episode in which they were first inducted (1897 through 1907). Episode 1902 had no inductions.

## Files

Static site. No build step.

- `index.html` — the page and the member roster
- `css/styles.css` — styles
- `fonts/` — Mukta, served with the page
- `images/` — pin artwork
- `audio/jcd-ant-battles.mp3` — excerpt from episode 1889, starting at 7:35:47

## Preview locally

```bash
python3 -m http.server 8765
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).
