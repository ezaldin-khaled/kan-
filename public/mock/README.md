# Mock imagery (replace with your assets)

These SVGs are **placeholders** so the site builds and layouts stay stable. Swap them for **JPG or WebP** (or higher‑res SVG) using the **same paths** below, or update `web/content/projects.ts` and `web/content/services.ts`.

## Suggested final specs

| File pattern | Role | Suggested ratio |
|--------------|------|-----------------|
| `cover-*.svg` → `.jpg` | Case study hero / card cover | **16:9** (e.g. 1920×1080) |
| `detail-*.svg` → `.jpg` | Case study gallery stills | **16:9** or **4:3** |
| `service-card.svg` → `.jpg` | Services capability tiles | **1:1** or **4:3** |

## Current placeholder files

- `cover-a.svg` … `cover-d.svg` — project covers (map to Aurora, Luminous, Orbit, Prism in content).
- `detail-1.svg` … `detail-3.svg` — gallery frames shared across projects.
- `service-card.svg` — used for all capability cards until you assign per-service art.

After replacing, update `content/*.ts` paths from `.svg` to `.jpg` / `.webp` if needed.
