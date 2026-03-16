# Modular Page Architecture

This is a server-rendered, modular landing page system hosted on Vercel with A/B testing support.

## How It Works

```
User visits: tryteamsyncai.com/dental
         ↓
Vercel routes to: /api/[page].js with page="dental"
         ↓
Function loads: src/pages/dental.js
         ↓
Optional: Fetches variant from API for A/B testing
         ↓
Renders: Complete HTML with page config (SEO-friendly)
         ↓
Returns: Fully rendered HTML to browser
```

## Directory Structure

```
teamsyncai.co/
├── api/
│   └── [page].js           # Serverless function router
├── src/
│   ├── pages/              # Page templates
│   │   ├── demo.js         # Generic default page
│   │   ├── dental.js       # Dental practice page
│   │   └── vet.js          # Veterinary practice page
│   ├── layouts/
│   │   ├── render.js       # HTML renderer
│   │   └── styles.js       # CSS (auto-generated)
│   └── utils/
│       └── form.js         # Shared form logic (optional)
├── public/
│   ├── index.html          # Kept for reference (not used)
│   └── style.css           # Kept for reference (not used)
├── vercel.json             # Routing config
└── package.json
```

## Adding a New Page

### Step 1: Create Page Config

Create a new file in `src/pages/[industry].js`:

```javascript
// src/pages/plumber.js
module.exports = {
  industry: "plumber",
  title: "Interview Blueprint for Plumbing Companies | TeamSyncAI",
  description: "Build better plumber interview processes...",
  ogImage: "https://...",
  
  hero: {
    title: "Hire the right <em>plumbers</em>.",
    subtitle: "Specialized interview framework for plumbing roles.",
    trustline: "About 5 minutes · Free beta · No credit card",
  },
  
  form: {
    title: "Generate your plumbing interview blueprint",
    subtitle: "Your framework is ready in minutes — free.",
  },

  sections: {
    whatYouGet: { ... },
    howItWorks: { ... },
    faq: { ... },
    cta: { ... },
  },
};
```

### Step 2: Register the Page

Edit `api/[page].js` and add to the `pages` object:

```javascript
pages.plumber = require('../src/pages/plumber');
```

### Step 3: Deploy

```bash
git add src/pages/plumber.js api/[page].js
git commit -m "add plumber landing page"
git push
```

Vercel auto-deploys in ~30 seconds. Page is live at `tryteamsyncai.com/plumber`

## A/B Testing with Variants

When using Option 2 (hybrid with API variants):

### Page Defaults
Each page has default copy hardcoded in `src/pages/[industry].js`.

### API Overrides
At runtime, the serverless function optionally calls:
```
GET /api/auth/page-variant?industry=dental
```

If your API returns variant data, it merges with page defaults:
```javascript
{
  "data": {
    "id": "variant-001",
    "version": "B",
    "hero_title": "Alternative headline...",
    "hero_subtitle": "Alternative subheading...",
    "form_title": "Alternative form title...",
    "form_subtitle": "Alternative form subtitle..."
  }
}
```

The HTML rendered will use API variant over page default.

## Conversion Tracking

When a user submits the form, the payload includes:
```javascript
{
  name, email, ...,
  variant: {
    id: "variant-001",
    version: "B"
  },
  source: {
    industry: "dental"  // Added automatically
  }
}
```

You can analyze:
- Conversion rate per variant
- Conversion rate per industry
- Performance trends over time

## Caching & Performance

- **HTML**: Cached for 60 seconds, stale-while-revalidate for 120 seconds
- **Static assets**: Served from Vercel CDN
- **API calls**: 2-second timeout (graceful fallback to defaults)

## Environment. Variables

None currently required for serverless function. Optional:

```
# In Vercel dashboard Settings > Environment Variables
API_ENDPOINT=https://auth-api.teamsyncai.com
```

Then in `api/[page].js`:
```javascript
const API_ENDPOINT = process.env.API_ENDPOINT || 'https://auth-api.teamsyncai.com';
```

## Troubleshooting

**Page not rendering:**
- Check syntax in `src/pages/[industry].js`
- Ensure page is registered in `api/[page].js`
- Check Vercel build logs

**API variant not loading:**
- Check API endpoint URL in `api/[page].js`
- Verify API returns correct JSON shape
- Falls back to defaults if API fails (by design)

**SEO issues:**
- Verify `<title>` and meta tags in page config
- Use Open Graph tags for social sharing
- Server-rendered HTML is crawl-friendly (no JS required)

## Next Steps

1. ✅ Scaffold: Routes, pages, layouts
2. ✅ Config: Vercel rewrites
3. ⏳ Test: Deploy and visit `tryteamsyncai.com/demo`, `/dental`, `/vet`
4. ⏳ Add API endpoints: `/api/auth/page-variant?industry=[industry]`
5. ⏳ Track conversions: Check form submissions with `variant` field

## Questions?

- Routes: See `vercel.json`
- Rendering: See `src/layouts/render.js`
- Page config: See `src/pages/*.js`
- Form logic: See embedded in `src/layouts/render.js`
