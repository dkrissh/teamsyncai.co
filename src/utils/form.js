/**
 * Shared form validation and submission logic
 * Extracted from inline JavaScript
 */

const TURNSTILE_SITE_KEY = "0x4AAAAAAA6GdaAB-8aAzYLn";
const AUTH_API = "https://auth-api.teamsyncai.com/api/auth";

const formValidation = {
  name: false,
  email: false,
  terms: false,
  privacy: false,
};

let emailExists = false;
let turnstileToken = "";
let turnstileWidgetId = null;
let currentVariant = null;

/**
 * Validate email format
 */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

/**
 * Set field error state
 */
function setFieldError(fieldId, hasError) {
  const field = document.getElementById(fieldId);
  if (!hasError) {
    field.classList.remove("has-error");
  } else {
    field.classList.add("has-error");
  }
}

/**
 * Show global error message
 */
function showGlobalError(message) {
  const errorEl = document.getElementById("global-error");
  errorEl.textContent = message;
  errorEl.classList.add("visible");
  setTimeout(() => {
    errorEl.classList.remove("visible");
  }, 6000);
}

/**
 * Update submit button state
 */
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

/**
 * Fetch page variant from API
 */
async function fetchPageVariant(industry) {
  try {
    const response = await fetch(`${AUTH_API}/page-variant?industry=${industry}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      console.warn("Failed to fetch variant, using defaults");
      return null;
    }

    const data = await response.json();
    const variant = data.data || data;

    if (!variant) return null;

    currentVariant = {
      id: variant.id || variant.variant_id,
      version: variant.version || "default",
      heroTitle: variant.hero_title,
      heroSubtitle: variant.hero_subtitle,
      formTitle: variant.form_title,
      formSubtitle: variant.form_subtitle,
    };

    // Apply variant to DOM if elements exist
    if (variant.hero_title && document.getElementById("hero-title")) {
      document.getElementById("hero-title").innerHTML = variant.hero_title;
    }
    if (variant.hero_subtitle && document.getElementById("hero-subtitle")) {
      document.getElementById("hero-subtitle").innerHTML = variant.hero_subtitle;
    }
    if (variant.form_title && document.getElementById("form-title")) {
      document.getElementById("form-title").textContent = variant.form_title;
    }
    if (variant.form_subtitle && document.getElementById("form-subtitle")) {
      document.getElementById("form-subtitle").textContent = variant.form_subtitle;
    }

    return currentVariant;
  } catch (err) {
    console.warn("Error fetching page variant:", err);
    return null;
  }
}

/**
 * Submit form with all validation
 */
async function submitForm(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const terms = document.getElementById("terms").checked;
  const privacy = document.getElementById("privacy").checked;

  // Validate
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
      utm_source: new URLSearchParams(window.location.search).get("utm_source") || "",
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
      ref_email: new URLSearchParams(window.location.search).get("ref") || "",
      page: window.location.href,
      submitted_at: new Date().toISOString(),
    },
    ...(currentVariant && {
      variant: {
        id: currentVariant.id,
        version: currentVariant.version,
      },
    }),
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(`${AUTH_API}/website-register`, {
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
        data?.error || data?.message || `Registration failed (${res.status})`
      );
    }

    const result = data?.data || data;
    const appExchangePage = result?.appExchangePage || result?.app_exchange_page;
    const exchangeToken = result?.exchangeToken || result?.exchange_token;

    let redirectTo;
    if (appExchangePage) {
      redirectTo = appExchangePage;
    } else if (exchangeToken) {
      redirectTo = `https://app.teamsyncai.com/auth/exchange?token=${exchangeToken}`;
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
}

module.exports = {
  TURNSTILE_SITE_KEY,
  AUTH_API,
  formValidation,
  validateEmail,
  setFieldError,
  showGlobalError,
  updateSubmitState,
  fetchPageVariant,
  submitForm,
};
