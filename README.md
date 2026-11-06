# Julian R. Moreau, M.T.S. — Catholic Ministry Speaker & Booking Website

> **Live Working Client URL:** [https://bapdagreat.github.io/catholic-ministry-speaker/](https://bapdagreat.github.io/catholic-ministry-speaker/)  
> **GitHub Repository:** [https://github.com/BapDaGreat/catholic-ministry-speaker](https://github.com/BapDaGreat/catholic-ministry-speaker)

An editorial, dignified, and high-performance personal brand and event booking website for **Julian R. Moreau, M.T.S.**, a Catholic evangelist, retreat master, and pastoral facilitator based in New Orleans, Louisiana.

Built using **Emil Kowalski's Design Engineering philosophy**, **Apple's Fluid Interface guidelines**, **Mobile-Native baseline rules**, and **Sonner toast notifications**.

---

## 🌟 Live Experience Highlights

1. **Sacramental & Editorial Aesthetic:**
   - Color Palette: Deep Liturgical Navy (`#0B1220`), Sacred Warm Amber Gold (`#C2933E`), and Warm Stone / Altar Linen (`#FAF9F6`).
   - Typography: Editorial serif headings (*Cormorant Garamond* & *Cinzel*) paired with clean, readable sans-serif (*Plus Jakarta Sans*).
   - Translucent glassmorphism navigation with `backdrop-filter: blur(20px)` and safe-area padding.

2. **Mobile-Native Touch & Interaction Polish:**
   - Active press scale feedback (`transform: scale(0.97)` with `120ms cubic-bezier(0.23, 1, 0.32, 1)`).
   - Eliminated tap lag via `touch-action: manipulation` and removed mobile tap highlight grey box.
   - Form controls locked to `16px` to prevent iOS auto-zoom disorientation.
   - Hover styles gated behind `@media (hover: hover) and (pointer: fine)` so mobile taps don't freeze in hover state.

3. **Complete Site Architecture (6 Core Sections):**
   - **Hero & Lead Capture:** High-impact value proposition, speaker portrait, date availability checker.
   - **Credibility Banner:** Clear breakdown of audiences served (Parishes, Dioceses, Catholic Schools, Retreats).
   - **Speaking & Retreat Formats:** Segmented offerings (Parish Missions, Diocesan Assemblies, Faculty In-Service, Leadership Facilitation) with schedule breakdowns and deliverables.
   - **About & Theological Charism:** Personal narrative, 4 theological pillars (Sacramental Imagination, Kerygma, Missionary Discipleship, Liturgical Depth), and Notre Dame Seminary credentials.
   - **Pastoral Testimonials:** Quotes from pastors, diocesan directors, and school presidents with category filter and quote carousel.
   - **Media & Press Kit:** Video previews, audio homilies, 1-click copy bio blurb (Short, Medium, Long), and high-res headshot downloads.
   - **Structured Booking Form:** Full event inquiry form with role, attendance tier, honorarium budget, target date, and Sonner promise feedback.
   - **Interactive Tech Stack Rationale Modal:** In-depth architectural evaluation comparing Astro/Vite vs. Webflow vs. Sanity.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 + Vite 8 (Pure static HTML/CSS/JS export)
- **Styling:** Tailwind CSS with custom editorial typography & sacred color tokens
- **Icons:** Lucide React
- **Toast System:** Sonner
- **Hosting:** GitHub Pages ($0/mo zero-maintenance global CDN)
- **Content Storage:** Structured JSON schemas in `src/data/` for instantaneous client updates

---

## 📁 Content Schema for Non-Technical Client Updates

All website content is organized in modular JSON files in `src/data/`:

| File | Content Controlled |
| --- | --- |
| `src/data/speaker.json` | Biography, credentials, degrees, theological pillars, contact info, social links |
| `src/data/services.json` | Offerings, popular themes, duration formats, event deliverables |
| `src/data/testimonials.json` | Pastor & diocesan reviews, quotes, author titles, locations, event types |
| `src/data/media.json` | Video sample links, audio podcasts, downloadable headshots, 1-click copy bios |

---

## 🚀 Local Development & Deployment

```bash
# Clone the repository
git clone https://github.com/BapDaGreat/catholic-ministry-speaker.git
cd catholic-ministry-speaker

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production assets
npm run build

# Deploy directly to live GitHub Pages URL
npm run deploy
```

---

*Designed with reverent Catholic craft & senior design engineering standards.*
