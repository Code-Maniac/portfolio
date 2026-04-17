# Nick Jaycock — Portfolio

A clean, minimal developer portfolio built with React + TypeScript + Vite. Features scroll-driven nature landscape backgrounds that crossfade between sections.

---

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

To build for production:

```bash
npm run build
```

Deploy the `dist/` folder to any static host — Netlify, Vercel, GitHub Pages, or Cloudflare Pages all work well.

To type-check without building:

```bash
npm run typecheck
```

---

## Project Structure

```
nick-jaycock-portfolio/
├── index.html                      # App entry point
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # TypeScript config
├── vite.config.ts                  # Build tool config
├── README.md                       # This file
│
├── public/
│   └── cv.pdf                      # ← Add your CV here (enables download button)
│
└── src/
    ├── main.tsx                    # Mounts the React app
    ├── App.tsx                     # Root layout, scroll logic, scene switching
    │
    ├── styles/
    │   └── global.css              # Design tokens, nav, layout, buttons
    │
    └── components/
        ├── BackgroundManager.tsx   # 5 landscape images + crossfade logic
        ├── Nav.tsx                 # Top nav bar (turns opaque on scroll)
        ├── Hero.tsx / Hero.css     # Name, tagline, CTA buttons
        ├── About.tsx / About.css   # Bio text + skills list
        ├── CV.tsx / CV.css         # Experience, education, skill bars
        ├── Projects.tsx / Projects.css   # Project list with links & status
        └── Games.tsx / Games.css   # Godot & Unity iframe embeds
```

---

## Personalising Content

### Hero — `src/components/Hero.tsx`
Update the tagline and CTA button labels to match your voice.

### About — `src/components/About.tsx`
- Replace the three bio paragraphs with your own text.
- Update the `SKILLS` array — each entry has a `label` and a short `note`.
- Set your real GitHub and LinkedIn URLs in the `.about-links` section.

### CV — `src/components/CV.tsx`
- `EXPERIENCE` — add your real job history. Each entry takes:
  - `role`, `company`, `period`, `desc`, `tags: string[]`
- `EDUCATION` — add your degree(s). Each entry takes:
  - `degree`, `institution`, `period`, `desc`
- `SKILL_BARS` — adjust the `level` (0–100) for each skill.

### Projects — `src/components/Projects.tsx`
Update the `PROJECTS` array. Each entry has:
| Field | Type | Description |
|---|---|---|
| `num` | `string` | Display number e.g. `"01"` |
| `title` | `string` | Project name |
| `category` | `string` | e.g. `"Embedded Systems"`, `"Game — Godot 4"` |
| `desc` | `string` | Short description |
| `tags` | `string[]` | Technology tags |
| `link` | `string` | GitHub or live URL |
| `status` | `"Released" \| "In Development" \| "Live"` | Controls badge colour |

### Games — `src/components/Games.tsx`
For each game, set:
- `embedUrl` — URL to your hosted WebGL build (see below). Set to `null` to show a placeholder.
- `itchUrl` — link to your itch.io page.

**Godot web export:**
1. In Godot: Project → Export → Add → Web
2. Export the project, host the output files on itch.io or your own server
3. Paste the URL of the hosted HTML file into `embedUrl`

**Unity WebGL export:**
1. In Unity: File → Build Settings → select WebGL → Build
2. Host the build folder on itch.io or your own server
3. Paste the embed URL into `embedUrl`

### CV PDF download
Drop your `cv.pdf` into the `public/` folder. The download button in the CV section links to `/cv.pdf` automatically.

### Footer contact
Update the email address near the bottom of `src/App.tsx`.

---

## Changing Background Images

Edit the `SCENES` array in `src/components/BackgroundManager.tsx`. Each entry maps to a section:

| `id` | Section | Default subject |
|---|---|---|
| `hero` | Hero | Forest mist |
| `about` | About | Mountain aerial |
| `cv` | CV | Misty pine road |
| `projects` | Projects | Ocean cliff |
| `games` | Games | Mountain lake |

Replace the `url` value with any direct image URL. Recommended: 1800px wide, landscape orientation. [Unsplash](https://unsplash.com) is a good source of free high-quality images — append `?w=1800&q=80` to keep file sizes reasonable.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [TypeScript 5](https://typescriptlang.org) | Type safety |
| [Vite 5](https://vitejs.dev) | Dev server & build tool |
| CSS custom properties | Styling (no framework) |
| Google Fonts | Cormorant Garamond, DM Sans, DM Mono |
