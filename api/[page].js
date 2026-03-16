/**
 * Vercel Serverless Function: Dynamic Page Renderer
 * Routes: /demo, /dental, /vet, or any custom industry
 * 
 * This function:
 * 1. Extracts the page/industry name from URL
 * 2. Loads the page template from src/pages/
 * 3. Optional: Fetches variant from API for A/B testing
 * 4. Renders complete HTML with page config
 * 5. Returns server-rendered HTML (SEO friendly)
 */

const { renderLayout } = require('../src/layouts/render');

// Dynamically require page templates
let pages = {};
try {
  pages.demo = require('../src/pages/demo');
  pages.dental = require('../src/pages/dental');
  pages.vet = require('../src/pages/vet');
} catch (e) {
  console.error('Error loading page templates:', e);
}

/**
 * Optional: Fetch variant from your API server
 * Falls back to page defaults if API fails
 */
async function fetchVariant(industry) {
  try {
    const url = `https://auth-api.teamsyncai.com/api/app/landing/page-variant?industry=${industry}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`Failed to fetch variant (${response.status}), using defaults`);
      return null;
    }

    const data = await response.json();
    return data.data || data;
  } catch (err) {
    console.warn('Error fetching variant:', err.message);
    // Gracefully return null - page will use defaults
    return null;
  }
}

/**
 * Main handler: Match route to page, render HTML
 */
async function handler(req, res) {
  try {
    // Get page name from dynamic route
    // Vercel automatically captures [page] from the URL path
    const { page = 'demo' } = req.query;

    // Security: Sanitize page name
    const pageName = String(page).toLowerCase().replace(/[^a-z0-9-]/g, '');
    
    // Load page template, fallback to demo if not found
    const pageConfig = pages[pageName] || pages.demo;
    
    if (!pageConfig) {
      return res.status(404).json({ error: 'Page not found' });
    }

    // Optional: Fetch dynamic variant for A/B testing
    const variant = await fetchVariant(pageName);

    // Render complete HTML
    const html = renderLayout(pageConfig, variant);

    // Set headers for proper content delivery
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');

    return res.status(200).send(html);
  } catch (err) {
    console.error('Handler error:', err);

    // Fallback error response
    return res.status(500).json({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }
}

module.exports = handler;
