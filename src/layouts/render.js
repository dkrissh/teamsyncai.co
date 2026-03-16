/**
 * HTML Layout Renderer
 * Takes page config and returns fully rendered HTML
 * Used by the serverless function to render each page
 */

const CSS = require('./styles.js');

function renderLayout(pageConfig, variant) {
  const config = variant ? { ...pageConfig, ...variant } : pageConfig;
  
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${config.description}" />
    <meta property="og:title" content="${config.title}" />
    <meta property="og:description" content="${config.description}" />
    <meta property="og:image" content="${config.ogImage}" />
    <meta property="og:type" content="website" />
    
    <!-- Google tag (gtag.js) - only loads after user consent -->
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    </script>

    <title>${config.title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      async
      defer
    ></script>
    <style>
      ${CSS}
    </style>
  </head>
  <body>
    <div class="page">
      <!-- NAV -->
      <nav>
        <a href="https://teamsyncai.com" class="logo">
          <img
            src="https://teamsyncai-assets.tor1.cdn.digitaloceanspaces.com/teamsyncai_logo.png"
            alt="TeamSyncAI"
          />
        </a>
        <span class="nav-badge">Free beta — No credit card</span>
      </nav>

      <!-- HERO -->
      <section class="hero">
        <div class="hero-left">
          <h1 id="hero-title">${config.hero.title}</h1>
          <p class="hero-proof" id="hero-subtitle" style="margin-bottom: 24px">
            ${config.hero.subtitle}
          </p>
          <div class="micro-trust">
            ${config.hero.trustline.split('·').map(item => '<span>' + item.trim() + '</span>').join('<span>·</span>')}
          </div>
        </div>

        <!-- FORM -->
        <div class="form-card">
          <div class="form-title" id="form-title">${config.form.title}</div>
          <div class="form-subtitle" id="form-subtitle">
            ${config.form.subtitle}
          </div>

          <div class="success-panel" id="success-panel">
            <div class="success-icon">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>You're in.</h3>
            <p>
              Taking you to TeamSyncAI now — your interview blueprint will be
              ready once you add your role.
            </p>
            <a href="#" class="btn-secondary" id="redirect-btn"
              >Open TeamSyncAI →</a
            >
          </div>

          <div class="form-fields" id="form-fields">
            <div class="global-error" id="global-error"></div>
            <form id="lead-form" novalidate>
              <input
                type="text"
                name="website"
                id="hp-website"
                style="display: none"
                tabindex="-1"
                autocomplete="off"
              />

              <div class="field-group" id="fg-name">
                <label for="name">First name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Alex Johnson"
                  autocomplete="name"
                />
                <div class="error-msg">Please enter your name</div>
              </div>

              <div class="field-group" id="fg-email">
                <label for="email"
                  >Work email
                  <span
                    style="
                      font-weight: 400;
                      text-transform: none;
                      letter-spacing: 0;
                      color: var(--ink-muted);
                      font-size: 0.72rem;
                    "
                    >(where we'll send your blueprint)</span
                  ></label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="alex@company.com"
                  autocomplete="email"
                />
                <div class="error-msg">Please enter a valid email</div>
                <div class="email-exists-box" id="email-exists-box">
                  This email already has an account. &nbsp;<a
                    href="https://app.teamsyncai.com/sign-in"
                    >Sign in instead →</a
                  >
                </div>
              </div>

              <div class="legal-section">
                <div class="legal-row">
                  <input type="checkbox" id="chk-terms" name="terms" />
                  <label for="chk-terms" class="legal-label">
                    I agree to the
                    <a href="https://teamsyncai.com/legal/terms" target="_blank"
                      >Terms and Conditions</a
                    >
                  </label>
                </div>
                <div class="legal-row">
                  <input type="checkbox" id="chk-privacy" name="privacy" />
                  <label for="chk-privacy" class="legal-label">
                    I agree to the
                    <a
                      href="https://teamsyncai.com/legal/privacy"
                      target="_blank"
                      >Privacy Policy</a
                    >
                  </label>
                </div>
              </div>

              <div class="turnstile-wrap">
                <div class="turnstile-lbl">Please verify you're human</div>
                <div id="ts-loading" class="ts-loading">
                  <div
                    style="
                      width: 16px;
                      height: 16px;
                      border: 2px solid rgba(26, 107, 74, 0.2);
                      border-top-color: var(--accent);
                      border-radius: 50%;
                      animation: spin 0.7s linear infinite;
                      flex-shrink: 0;
                    "
                  ></div>
                  Loading verification…
                </div>
                <div id="ts-error" class="ts-error"></div>
                <button
                  type="button"
                  id="ts-retry"
                  class="retry-btn"
                  onclick="retryTurnstile()"
                >
                  ↻ Retry verification
                </button>
              </div>

              <button type="submit" class="btn-primary" id="submit-btn" disabled>
                <span class="btn-text">Get early access</span>
                <div class="btn-loader">
                  <div class="spinner"></div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>

      <hr class="section-divider" />

      <!-- FOOTER -->
      <footer>
        <div class="footer-left">
          © 2026 TeamSyncAI. All rights reserved.
        </div>
        <div class="footer-right">
          <a href="https://teamsyncai.com/legal/privacy">Privacy</a>
          &nbsp;&nbsp;
          <a href="https://teamsyncai.com/legal/terms">Terms</a>
        </div>
      </footer>
    </div>

    <!-- Cookie Banner -->
    <div class="cookie-banner" id="cookieBanner">
      <div class="cookie-content">
        <p class="cookie-text">
          We use cookies to enhance your experience and analyze site usage, including Google Analytics to measure website performance. By clicking "Accept", you consent to our use of cookies.
          <a href="https://teamsyncai.com/privacy" target="_blank">Learn more</a>
        </p>
        <div class="cookie-actions">
          <button class="cookie-btn cookie-btn-decline" id="cookieDecline">
            Decline
          </button>
          <button class="cookie-btn cookie-btn-accept" id="cookieAccept">
            Accept
          </button>
        </div>
      </div>
    </div>

    <script>
      // Server-rendered variant data (injected by api/[page].js)
      window.__variant__ = ${variant ? JSON.stringify({
        id: variant.id || variant.variant_id,
        version: variant.version || "default",
      }) : "null"};
    </script>

    <script>
      // Form utilities and shared code
      const TURNSTILE_SITE_KEY = "0x4AAAAAAA6GdaAB-8aAzYLn";
      const AUTH_API = "https://auth-api.teamsyncai.com/api/auth";
      const INDUSTRY = "${config.industry}";
      
      let formValidation = { name: false, email: false, terms: false, privacy: false };
      let emailExists = false;
      let turnstileToken = "";
      let turnstileWidgetId = null;

      // Cookie consent management
      const cookieBanner = document.getElementById("cookieBanner");
      const cookieAccept = document.getElementById("cookieAccept");
      const cookieDecline = document.getElementById("cookieDecline");
      const COOKIE_CONSENT_KEY = "ga-cookie-consent";
      const GA_SCRIPT_ID = "ga-script";

      function getCookieConsent() {
        return localStorage.getItem(COOKIE_CONSENT_KEY);
      }

      function setCookieConsent(value) {
        localStorage.setItem(COOKIE_CONSENT_KEY, value);
      }

      function showCookieBanner() {
        cookieBanner.classList.add("show");
      }

      function hideCookieBanner() {
        cookieBanner.classList.remove("show");
      }

      function loadGoogleAnalytics() {
        const script = document.createElement("script");
        script.id = GA_SCRIPT_ID;
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-E10WDE2RD4";
        script.onload = function () {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-E10WDE2RD4");
          gtag("consent", "update", {
            analytics_storage: "granted",
            ad_storage: "granted",
          });
        };
        document.head.appendChild(script);
      }

      function handleAccept() {
        setCookieConsent("accepted");
        hideCookieBanner();
        loadGoogleAnalytics();
      }

      function handleDecline() {
        setCookieConsent("declined");
        hideCookieBanner();
      }

      // Initialize cookie consent on page load
      document.addEventListener("DOMContentLoaded", function () {
        const consent = getCookieConsent();
        if (!consent) {
          showCookieBanner();
        } else if (consent === "accepted") {
          loadGoogleAnalytics();
        }
      });

      cookieAccept.addEventListener("click", handleAccept);
      cookieDecline.addEventListener("click", handleDecline);

      // Form validation and submission
      function validateEmail(email) {
        return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}\$/.test(email.trim());
      }

      function setFieldError(fieldId, hasError) {
        const field = document.getElementById(fieldId);
        if (!hasError) {
          field.classList.remove("has-error");
        } else {
          field.classList.add("has-error");
        }
      }

      function showGlobalError(message) {
        const errorEl = document.getElementById("global-error");
        errorEl.textContent = message;
        errorEl.classList.add("visible");
        setTimeout(() => {
          errorEl.classList.remove("visible");
        }, 6000);
      }

      function updateSubmitState() {
        const btn = document.getElementById("submit-btn");
        const valid =
          formValidation.name &&
          formValidation.email &&
          formValidation.terms &&
          formValidation.privacy &&
          !emailExists &&
          turnstileToken;
        btn.disabled = !valid;
      }

      // Variant data is injected server-side (no client-side API call needed)
      // currentVariant is set below based on server render

      // Form submission
      const params = new URLSearchParams(window.location.search);
      const utmSource = params.get("utm_source") || "";
      const utmCampaign = params.get("utm_campaign") || "";
      const refEmail = params.get("ref") || "";

      if (refEmail) {
        const el = document.getElementById("email");
        el.value = decodeURIComponent(refEmail);
        setTimeout(() => {
          formValidation.email = validateEmail(el.value.trim());
          updateSubmitState();
        }, 100);
      }

      document.getElementById("lead-form").addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const terms = document.getElementById("chk-terms").checked;
        const privacy = document.getElementById("chk-privacy").checked;

        const nameValid = name.length > 0;
        const emailValid = validateEmail(email);

        setFieldError("fg-name", !nameValid);
        setFieldError("fg-email", !emailValid);

        let valid = nameValid && emailValid && terms && privacy && !emailExists;

        if (!turnstileToken) {
          showGlobalError("Please complete the human verification above.");
          valid = false;
        }
        if (!valid) return;

        const btn = document.getElementById("submit-btn");
        btn.classList.add("loading");

        const payload = {
          name,
          email,
          legal: {
            terms_conditions: terms ? "accepted" : "",
            privacy: privacy ? "accepted" : "",
            name,
          },
          legalAcceptance: { name, terms, privacy },
          plan_intent: { is_trial: true },
          turnstileToken,
          source: {
            utm_source: utmSource,
            utm_campaign: utmCampaign,
            ref_email: refEmail,
            page: window.location.href,
            submitted_at: new Date().toISOString(),
            industry: INDUSTRY,
          },
          ...(window.__variant__ && {
            variant: {
              id: window.__variant__.id,
              version: window.__variant__.version,
            },
          }),
        };

        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);

          const res = await fetch(\`\${AUTH_API}/website-register\`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(payload),
            signal: controller.signal,
          });

          clearTimeout(timeout);
          const data = await res.json();

          if (!res.ok) {
            if (
              res.status === 409 ||
              (data.error && data.error.toLowerCase().includes("email"))
            ) {
              emailExists = true;
              document.getElementById("email-exists-box").classList.add("visible");
              btn.classList.remove("loading");
              updateSubmitState();
              return;
            }
            throw new Error(
              data?.error || data?.message || \`Registration failed (\${res.status})\`
            );
          }

          const result = data?.data || data;
          const appExchangePage = result?.appExchangePage || result?.app_exchange_page;
          const exchangeToken = result?.exchangeToken || result?.exchange_token;

          let redirectTo;
          if (appExchangePage) {
            redirectTo = appExchangePage;
          } else if (exchangeToken) {
            redirectTo = \`https://app.teamsyncai.com/auth/exchange?token=\${exchangeToken}\`;
          } else {
            throw new Error("No exchange token received — please try again.");
          }

          document.getElementById("form-fields").classList.add("hidden");
          document.getElementById("success-panel").classList.add("visible");
          document.getElementById("redirect-btn").href = redirectTo;
          btn.classList.remove("loading");

          setTimeout(() => {
            window.location.href = redirectTo;
          }, 2000);
        } catch (err) {
          btn.classList.remove("loading");
          if (turnstileWidgetId !== null && window.turnstile) {
            try {
              window.turnstile.reset(turnstileWidgetId);
              turnstileToken = "";
            } catch (e) {}
          }
          updateSubmitState();
          if (err.name === "AbortError") {
            showGlobalError(
              "Request timed out. Please check your connection and try again."
            );
          } else {
            showGlobalError(
              err.message || "Unable to create account. Please try again."
            );
          }
        }
      });

      document.getElementById("name").addEventListener("input", function () {
        formValidation.name = this.value.trim().length > 0;
        updateSubmitState();
      });

      document.getElementById("email").addEventListener("input", function () {
        formValidation.email = validateEmail(this.value);
        emailExists = false;
        document.getElementById("email-exists-box").classList.remove("visible");
        updateSubmitState();
      });

      document.getElementById("chk-terms").addEventListener("change", function () {
        formValidation.terms = this.checked;
        updateSubmitState();
      });

      document.getElementById("chk-privacy").addEventListener("change", function () {
        formValidation.privacy = this.checked;
        updateSubmitState();
      });

      // Turnstile verification
      function initTurnstile() {
        if (typeof window.turnstile === "undefined") {
          setTimeout(initTurnstile, 500);
          return;
        }

        window.turnstile
          .render("#ts-container", {
            sitekey: TURNSTILE_SITE_KEY,
            theme: "light",
            callback: handleTurnstileSuccess,
          })
          .then((id) => {
            turnstileWidgetId = id;
            document.getElementById("ts-loading").style.display = "none";
          })
          .catch((err) => {
            console.error("Turnstile error:", err);
            document.getElementById("ts-error").textContent =
              "Verification unavailable";
            document.getElementById("ts-error").style.display = "block";
          });
      }

      function handleTurnstileSuccess(token) {
        turnstileToken = token;
        updateSubmitState();
      }

      function retryTurnstile() {
        if (turnstileWidgetId !== null && window.turnstile) {
          window.turnstile.reset(turnstileWidgetId);
          turnstileToken = "";
          document.getElementById("ts-error").style.display = "none";
          updateSubmitState();
        }
      }

      // Create Turnstile container (hidden initially)
      const tsContainer = document.createElement("div");
      tsContainer.id = "ts-container";
      tsContainer.style.marginTop = "10px";
      document.querySelector(".turnstile-wrap").appendChild(tsContainer);

      document.addEventListener("DOMContentLoaded", initTurnstile);
      if (document.readyState !== "loading") {
        initTurnstile();
      }
    </script>
  </body>
</html>`;
}

module.exports = { renderLayout };
