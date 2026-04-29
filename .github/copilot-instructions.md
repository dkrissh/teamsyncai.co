# Copilot Instructions — teamsyncai.co

## Demo Landing Pages

There are two brand-variant landing pages that must always be edited together:

- `public/teamsync/demo.html` — TeamSyncAI brand
- `public/hiringblueprint/demo.html` — HiringBlueprint brand

**Rule: Always update both files simultaneously** using `multi_replace_string_in_file` in a single call. Never edit one without the other.

---

## Page Structure (both pages are identical in structure)

1. Nav — logo + badge
2. Hero — H1 headline + subtitle + micro-trust + lead capture form card
3. Output preview — screenshot of example AI output
4. Curiosity bridge — scroll teaser
5. Output section — 9-item grid of what the blueprint generates
6. How it works — 3 steps (Before / During / After the hire) with screenshots
7. Sample section — real example with stacked screenshot cards + PDF download
8. FAQ — 7 accordion items
9. Bottom CTA — final signup push
10. Footer — © year, Privacy / Terms links
11. Cookie banner

---

## Key HTML IDs (same in both pages)

| ID | Description |
|---|---|
| `#hero-title` | Main H1 headline |
| `#hero-subtitle` | Paragraph below headline (`.hero-proof`) |
| `#form-title` | Form card title |
| `#form-subtitle` | Form card subtitle |
| `#submit-btn` | Primary CTA button |
| `#success-panel` | Post-submit success message |
| `#redirect-btn` | Redirect link inside success panel |

---

## Intentional Brand Differences

| Element | `teamsync/demo.html` | `hiringblueprint/demo.html` |
|---|---|---|
| Brand name | TeamSyncAI | HiringBlueprint |
| Nav badge | "Free — No credit card" | "Free · No credit card" |
| Form title | "Generate your Hiring Blueprint" | "Generate your interview blueprint" |
| Form subtitle | "Your Hiring Blueprint is ready in minutes" | "Your blueprint is ready in minutes" |
| Submit button | "Generate Your Hiring Blueprint — Free →" | "Build My Blueprint — Free →" |
| Success redirect | "Open TeamSyncAI →" | "Open HiringBlueprint →" |
| How-section intro | references "TeamSyncAI" | references "HiringBlueprint" |
| Bottom CTA heading | "a *better process.*" | "a *better blueprint.*" |
| Bottom CTA button | "Generate Your Hiring Blueprint — Free" | "Build Your Blueprint — Free" |
| Footer © | 2025 TeamSyncAI | 2026 HiringBlueprint |

Do **not** overwrite these brand differences unless explicitly asked.

---

## Current Hero Copy (as of 2026-04-28)

**Headline (`#hero-title`):**
```html
The hardest part of hiring isn't finding candidates —
<em>it's knowing which one is<br />right for your team.</em>
```

**Subtitle (`#hero-subtitle`):**
```
Answer a few questions about the role. TeamSyncAI generates a complete Hiring Blueprint — so you know who to hire and whether it's working 30 days in.
```

---

## Form & Logic Notes

- Cloudflare Turnstile captcha is rendered explicitly (`render=explicit`) — do not remove or change the container `#turnstile-container`
- Honeypot field `#hp-website` is hidden — never display it
- Submit button is disabled by default; enabled only after Turnstile passes
- On success, `#form-fields` is hidden and `#success-panel` is shown
- Email-already-exists case shows `#email-exists-box` (yellow warning box)
- Cookie consent banner is at the bottom of `<body>`, separate from `.page`

---

## Deployment

Hosted on Vercel. Routing is defined in `vercel.json`. Middleware is in `middleware.js`.
