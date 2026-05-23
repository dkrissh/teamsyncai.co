Good. The form stays. I have everything I need.

One final thing — the form submission logic in `demo.html` posts to `https://auth-api.teamsyncai.com/api/auth/website-register` and handles the exchange token redirect to `app.teamsyncai.com`. That logic is working correctly in the current page — the brief will tell AI to copy it exactly, not rewrite it.

Writing the brief now.

---

# Landing Page Build Brief
Nav href: https://joinhiringblueprint.com

**For:** `tryteamsyncai.com` / `teamsyncai.co`
**Output:** Single `teamsync/demo.html` file, static, deployed to Vercel


Using the file you just built, create hiringblueprint/demo.html with these changes:
Logo: remove image, replace with text "HiringBlueprint" in the same font and accent color
All instances of "TeamSyncAI" in visible copy → "HiringBlueprint"
Footer: © 2026 HiringBlueprint · Halifax, NS"

**For:**  yourhiringblueprint.com + joinhiringblueprint.com
**Output:** Single `hiringblueprint/demo.html` file, static, deployed to Vercel
**Date:** May 2026

---

## Non-negotiable rules

1. **Tailwind CSS via CDN only.** No custom CSS. No inline styles. No `<style>` blocks except CSS custom properties for the two colors used throughout.
2. **Zero layout improvisation.** Build exactly what is specified. No extra sections, no reordered sections, no added components.
3. **One CTA URL throughout:** `https://www.teamsyncai.com/sign-up` — used on all buttons except the form submit which posts to the auth API.
4. **Fonts via Google Fonts:** `Instrument Serif` (headings, italic accents) and `DM Sans` (all body, labels, buttons).
5. **Two colors only:**
   - Accent green: `#1a6b4a`
   - Accent light: `#e8f4ef`
   - Everything else uses Tailwind defaults (gray scale, white, slate)
6. **No pricing anywhere on this page.**
7. **Copy the form submission JavaScript exactly** from the reference — do not rewrite it, do not simplify it, do not change variable names.
8. **All images use exact asset URLs** provided — do not use placeholders.

---

## Page structure — build in this exact order

---

### 1. HEAD

```html
- Title: "TeamSyncAI — Know Who You're Hiring Before They Walk In"
- Meta description: "Send a link. Candidates record async. You get a ranked list with AI scores, red flags, and transcripts. Free to start, no credit card."
- Tailwind CDN: https://cdn.tailwindcss.com
- Google Fonts: Instrument Serif (ital 0;1) + DM Sans (300;400;500;600)
- Cloudflare Turnstile: https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit
- GA consent default (denied) — same script block as reference
- Vercel insights: /_vercel/insights/script.js
```

---

### 2. NAV

Full width, max-w-6xl centered, px-6, py-6.

Left: TeamSyncAI logo image
`https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/teamsyncai_logo.png`
height 48px, links to `https://teamsyncai.com`

Right: pill badge — "Free · No credit card" — green border, green text, accent-light background, rounded-full, text-xs font-semibold.

---

### 3. HERO

Two column grid on desktop, single column on mobile. Max-w-6xl centered. py-20 desktop, py-12 mobile.

**Left column:**

Label above headline — small caps, accent green, tracking-widest, text-xs:
`ASYNC VIDEO INTERVIEWS`

H1 — Instrument Serif, clamp 2.4rem to 3.4rem, tight leading, dark gray:
`Stop guessing.`
Second line italic accent green:
`Know who you're hiring.`

Subheadline — DM Sans 300, text-lg, slate-600, max-w-lg, mt-4:
`Send a link. Candidates record on any device, on their own time. You get a ranked list — AI scores, red flags from their own words, transcripts. No scheduling.`

Bridge link — text-sm, slate-400, mt-3:
`Want to see how it works first?` + link `See the full product →` in accent green underline pointing to `https://teamsyncai.com`

**Right column:**

Leaderboard screenshot in a rounded-2xl card with shadow-2xl and a thin gray border:
`https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/landing-page-05-26/leader-board-app-05-19-2026_09_22_AM.png`

Caption below image — text-xs, slate-400, italic, text-center, mt-3:
`Every candidate scored and ranked. Red flags quoted from their own words.`

---

### 4. ASYNC FLOW — "How it works"

Full width section. bg-slate-50. py-20. Border top and bottom thin gray.

Centered header:
- Label: `HOW IT WORKS`
- H2 Instrument Serif: `Send a link.` italic accent: `They record. You decide.`
- Subtext DM Sans 300 slate-600 max-w-xl centered mt-3: `No scheduling. No back and forth. Candidates complete the interview on their own time — you come back to a ranked list.`

Three column grid desktop, single column mobile. mt-16. Each step:
- Circle number — 56px, accent-light bg, accent green border, Instrument Serif, accent green text
- Bold title DM Sans 600 slate-900 mt-4 mb-2
- Body DM Sans 300 slate-600 text-sm leading-relaxed

**Step 1 — Send a link**
`Share a unique interview link with every candidate. No app download required. Works on any device.`

**Step 2 — Candidates record async**
`They answer one question at a time with a live timer. Can re-record before submitting. Only what they say is analyzed — not how they look or sound.`

**Step 3 — You get a ranked list**
`Every candidate scored by trust, performance, and AI confidence. Red flags quoted directly from their own answers. Just pick the best one.`

Arrows between steps on desktop — slate-300, text-2xl, flex items-center, hidden on mobile.

---

### 5. ANALYTICS VIDEO

Full width. bg with accent green `#1a6b4a`. py-20.

Centered header — all white:
- H2 Instrument Serif text-white: `You come back to a ranked list.` italic: `The work is already done.`
- Subtext text-green-100 DM Sans 300 mt-3 max-w-xl centered: `Every candidate evaluated against your goals. Red flags surfaced from their own words. Watch the full analytics walkthrough.`

Vimeo embed below — max-w-4xl centered, mt-10, rounded-2xl overflow-hidden shadow-2xl:
```
videoId: 1193741349
src: https://player.vimeo.com/video/1193741349?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479
16:9 ratio — padding-top 56.25%, position relative, iframe absolute inset-0 w-full h-full
```

Caption below — text-green-200 text-sm italic text-center mt-4:
`Leaderboard, evaluation breakdown, red flags, and video responses — all in one place.`

---

### 6. CANDIDATE CONTRAST

Full width. bg-white. py-20.

Centered header:
- H2 Instrument Serif slate-900: `Same interview.` italic accent green: `Two very different outcomes.`
- Subtext DM Sans 300 slate-600 max-w-2xl centered mt-4: `The AI reads what the answers actually reveal — not what the candidate wants you to hear. Here are two real evaluation reports.`

Two column grid desktop, single column mobile. max-w-5xl centered. mt-12. gap-8.

**Card 1 — Strong Hire:**
- Header bar: bg-green-50, border-b border-green-100, px-6 py-3, flex justify-between
  - Left: "STRONG HIRE" text-green-700 font-bold text-xs tracking-widest uppercase
  - Right: "Trust 8.50 · Performance 8.50 · REAL_FIT" text-xs text-slate-400, REAL_FIT in green-600 font-semibold
- Image: `https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/landing-page-05-26/hirable-candidate.png?v=2` full width
- Download button below image: bg `#e8500a` hover `#c94208`, white text, rounded-full, text-sm font-semibold, flex items-center gap-2, download icon SVG
  - Text: `Download Jordan's full report`
  - href: `https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/landing-page-05-26/detailed-report-jordan-selfstarter-e9918a.pdf`
  - target_blank, download attribute

**Card 2 — No Hire:**
- Header bar: bg-red-50, border-b border-red-100
  - Left: "NO HIRE" text-red-700
  - Right: "Trust 2.00 · Performance 4.50 · POOR_FIT" text-red-600
- Image: `https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/landing-page-05-26/toxic-candidate.png?v=2`
- Download button same style:
  - Text: `Download Chad's full report`
  - href: `https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/landing-page-05-26/detailed-report-chad-toxic-14c1f5.pdf`

Caption below grid — italic slate-400 text-sm text-center mt-8:
`Same interview. Same questions. The AI reads what the answers actually reveal.`

---

### 7. FEATURE SECTIONS

Three sequential sections. Each: max-w-6xl centered, py-16, border-top thin gray. Two column grid desktop (text left, image right), alternating on even sections (image left, text right). Single column mobile.

**Text column pattern:**
- Label — text-xs font-bold tracking-widest uppercase accent green
- H2 — Instrument Serif clamp 1.6rem to 2rem slate-900, italic accent green on key phrase
- Body — DM Sans 300 slate-600 text-base leading-relaxed max-w-lg

**Image column pattern:**
- rounded-2xl overflow-hidden shadow-xl border border-gray-100
- img width full display block

**Section A — Step 1: Calibration**
Label: `STEP 1`
H2: `Answer a few questions about the role.` italic: `We handle everything else.`
Body: `Tell us who succeeds in this role, what failure looks like, and how much autonomy it requires. The AI asks follow-up questions to sharpen the blueprint.`
Image: `https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/landing-page-05-26/calibration_questions-app-05-23-2026_08_16_AM.png`

**Section B — Step 2: Evaluation Goals**
Label: `STEP 2`
H2: `Not generic templates.` italic: `Goals built for this exact role.`
Body: `Every evaluation goal is weighted and tied to what you told us matters — so you know what to look for and how much it counts.`
Image: `https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/landing-page-05-26/evalution-goals.png`
Layout: image left, text right (reversed)

**Section C — Step 3: Interview Questions**
Label: `STEP 3`
H2: `Questions that actually` italic: `reveal who you're hiring.`
Body: `Every question is tied to an evaluation goal. Follow-up probes are ready when an answer needs digging into. No experience required.`
Image: `https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/landing-page-05-26/interview-questions.png`

---

### 8. SIGN-UP FORM

Full width section. bg-slate-50. py-20. Border top thin gray.

Centered header above form:
- H2 Instrument Serif slate-900: `Start your first async interview.` italic accent green: `It's free.`
- Subtext DM Sans 300 slate-600 mt-3: `One role, one time — completely free. No credit card required.`

Form card — max-w-md centered, mt-10, bg-white, rounded-2xl, shadow-xl, border border-gray-100, p-10. Green top border accent 3px.

Form card header:
- Title DM Sans 600 slate-900 text-xl: `Create your free account`
- Subtitle DM Sans 300 slate-500 text-sm mt-1: `Async video interviews backed by a Hiring Blueprint — free for your first role.`

**Form fields — copy exactly from reference, no changes:**
- Honeypot field (hidden)
- First name field
- Work email field with "where we'll send your blueprint" sublabel
- Email exists box with sign-in link to `https://app.teamsyncai.com/sign-in`
- Terms checkbox linking to `https://teamsyncai.com/legal/terms`
- Privacy checkbox linking to `https://teamsyncai.com/legal/privacy`
- Turnstile widget — site key `0x4AAAAAAA6GdaAB-8aAzYLn`
- Submit button — bg accent green, white text, rounded-xl, w-full, py-3.5, font-semibold: `See Who You're Actually Hiring — Free →`
- Loading spinner state on submit button

**Success panel — copy exactly from reference:**
- Green checkmark circle
- "You're in." heading
- Redirect message
- "Open TeamSyncAI →" button

**Form JavaScript — copy exactly from reference:**
- `AUTH_API = "https://auth-api.teamsyncai.com/api/auth"`
- UTM param capture
- Turnstile init with retry logic
- Email exists check against `${AUTH_API}/check-email`
- Form submit posting to `${AUTH_API}/website-register`
- Exchange token redirect to `app.teamsyncai.com`
- 2 second auto-redirect on success

---

### 9. AFTER HIRE SECTION

Max-w-6xl centered. py-16. Border top thin gray. Two column desktop, single column mobile. Text left, image right.

Label: `AFTER THE HIRE`
H2: `Most hiring tools stop at the offer letter.` italic accent green: `Yours doesn't.`
Body: `Automated 30, 60, and 90-day check-ins calibrated to the exact traits you hired against. Know at day 30 if it's working — not after three months of hoping.`
Image: `https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/landing-page-05-26/hiring-interlligence-App-05-18-2026_09_04_PM.png`

---

### 10. TRANSPARENCY SECTION

Max-w-6xl centered. py-16. Border top thin gray. Two column desktop. Image left (mobile screenshot, max-w-xs), text right.

Label: `TRANSPARENCY`
H2: `AI that's honest about what it does —` italic: `and what it doesn't.`
Body: `We analyze what candidates say, not how they look. No body language scoring. No tone analysis. Just honest evaluation of real answers. Candidates are told this before they begin.`
Image: `https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/landing-page-05-26/IMG_1643.png`
Image max-width: 280px, rounded-3xl, shadow-2xl, border border-gray-200

---

### 11. FAQ

Max-w-3xl centered. py-20. Border top thin gray.

H2 Instrument Serif slate-900 text-center: `Questions you're probably thinking.`

7 FAQ items. Each: border-bottom thin gray. Question button full width, flex justify-between, DM Sans 600 slate-900, py-5. Plus/X icon right side accent green. Answer panel — DM Sans 300 slate-600 text-sm leading-relaxed, pb-5, hidden by default, toggled on click.

**Q1:** How does TeamSyncAI work?
**A:** You answer a few questions about the role. TeamSyncAI generates a Hiring Blueprint — interview questions, weighted scoring, and 30/60/90-day check-ins. Candidates complete an async video interview via a unique link on any device, on their own time. You come back to a ranked leaderboard. No scheduling, no guessing.

**Q2:** What is a Hiring Blueprint?
**A:** A Hiring Blueprint is the complete hiring kit generated for your specific role. It includes weighted evaluation goals, behavioral interview questions with follow-up probes, and 30/60/90-day check-in templates tied to the exact traits you hired against. Built from your answers — not a generic template.

**Q3:** Is it really free?
**A:** Yes. One role, one time — completely free. No credit card required.

**Q4:** Do I need HR experience?
**A:** No. TeamSyncAI is built for small business owners hiring without an HR team. You answer questions about your business and the role — the AI handles everything else.

**Q5:** How does candidate ranking work?
**A:** Candidates complete an async video interview using questions generated for your role. TeamSyncAI evaluates their responses against your goals and ranks them by trust score, performance score, and AI confidence. Red flags are quoted directly from their own words.

**Q6:** What are the 30/60/90-day check-ins?
**A:** After you make a hire, TeamSyncAI sends automated check-in questions at 30, 60, and 90 days — calibrated to the exact traits that candidate was evaluated against. Know early whether the hire is working.

**Q7:** Does the AI analyze body language or tone?
**A:** No. TeamSyncAI only analyzes what candidates say — not how they look or sound. No body language scoring, no tone analysis, no facial expression tracking. Candidates are told this before they begin.

---

### 12. BOTTOM CTA BANNER

Full width. bg accent green `#1a6b4a`. py-20.

Centered:
- H2 Instrument Serif text-white text-3xl to text-4xl: `Your next hire deserves` italic: `a better process.`
- Subtext text-green-100 DM Sans 300 mt-4 max-w-xl centered: `Async video interviews backed by a Hiring Blueprint. AI-ranked candidates, red flags from their own words, and 30/60/90-day check-ins. Free to start.`
- Button mt-8 — bg-white text accent green, rounded-full, py-3 px-10, font-semibold text-sm, hover bg-green-50: `Start Your First Interview — Free →` scrolls to form
- Microtrust below button — text-green-200 text-xs mt-4: `Free · No credit card · Built for your exact role`

---

### 13. FOOTER

Border top thin gray. Max-w-6xl centered. py-6. Flex justify-between flex-wrap gap-3.

Left — text-xs slate-400: `© 2026 TeamSyncAI · Halifax, NS`
Right — text-xs: `Privacy Policy` + `Terms` both linking to `https://teamsyncai.com/legal/privacy` and `https://teamsyncai.com/legal/terms` in accent green, target blank.

---

### 14. COOKIE BANNER

Fixed bottom. bg-white. Border top thin gray. Shadow. Hidden by default, shown if no consent in localStorage.

Left: text-sm slate-600 — cookie usage explanation with link to `https://teamsyncai.com/privacy`
Right: two buttons — "Decline" (slate border, slate text) and "Accept" (accent green bg, white text)

On Accept: set localStorage `ga-cookie-consent = accepted`, load GA `G-E10WDE2RD4`
On Decline: set localStorage `ga-cookie-consent = declined`, hide banner

---

### 15. JAVASCRIPT — all in one script block at bottom of body

Copy these exactly from reference, no rewrites:
1. FAQ toggle function
2. Cookie banner logic with GA loader
3. Turnstile init and retry
4. Email exists check
5. Form submit with auth API, exchange token, redirect
6. UTM param capture from URL
7. Submit button state manager

---

## Final checklist before outputting

- [ ] Zero inline styles
- [ ] Zero `<style>` blocks except one block for CSS custom properties if needed for Tailwind config
- [ ] All 15 asset URLs present and correct
- [ ] Form JS copied exactly, not rewritten
- [ ] Turnstile site key `0x4AAAAAAA6GdaAB-8aAzYLn` present
- [ ] Auth API `https://auth-api.teamsyncai.com/api/auth` present
- [ ] GA ID `G-E10WDE2RD4` present
- [ ] All CTA buttons either scroll to form or post to auth API
- [ ] No pricing anywhere
- [ ] Single file output — no external CSS files, no JS files

---
