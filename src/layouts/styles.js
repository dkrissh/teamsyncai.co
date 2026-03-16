module.exports = `
        :root {
          --ink: #0d0f12;
          --ink-soft: #4a5060;
          --ink-muted: #8a91a0;
          --surface: #f9f8f6;
          --white: #ffffff;
          --accent: #1a6b4a;
          --accent-lt: #e8f4ef;
          --accent-glow: rgba(26, 107, 74, 0.12);
          --border: #e3e1dc;
          --radius: 12px;
          --shadow: 0 2px 16px rgba(13, 15, 18, 0.08);
          --shadow-lg: 0 8px 40px rgba(13, 15, 18, 0.13);
        }
  
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
        }
  
        body {
          font-family: "DM Sans", sans-serif;
          background: var(--surface);
          color: var(--ink);
          min-height: 100vh;
          overflow-x: hidden;
        }
  
        body::before {
          content: "";
          position: fixed;
          inset: 0;
          background:
            radial-gradient(
              ellipse 80% 50% at 60% -10%,
              rgba(26, 107, 74, 0.07) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse 60% 40% at -10% 80%,
              rgba(26, 107, 74, 0.05) 0%,
              transparent 50%
            );
          pointer-events: none;
          z-index: 0;
        }
  
        .page {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
  
        /* ── NAV ── */
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0 0;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.1s forwards;
        }
  
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .logo img {
          height: 60px;
          width: auto;
        }
        .logo-text {
          font-family: "Instrument Serif", serif;
          font-size: 1.25rem;
          color: var(--ink);
          letter-spacing: -0.02em;
        }
        .logo-text span {
          color: var(--accent);
        }
  
        .nav-badge {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--accent);
          background: var(--accent-lt);
          border: 1px solid rgba(26, 107, 74, 0.2);
          padding: 4px 12px;
          border-radius: 100px;
        }
  
        /* ── HERO ── */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          padding: 72px 0 80px;
        }
  
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 48px 0 56px;
          }
        }
  
        .hero-left {
          opacity: 0;
          animation: fadeUp 0.6s ease 0.2s forwards;
        }
  
        h1 {
          font-family: "Instrument Serif", serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 20px;
        }
  
        h1 em {
          font-style: italic;
          color: var(--accent);
        }
  
        .hero-proof {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--ink-soft);
          font-weight: 300;
          max-width: 460px;
          margin-bottom: 16px;
        }
  
        .hero-proof strong {
          color: var(--ink);
          font-weight: 600;
        }
  
        .micro-trust {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--ink-muted);
          margin-bottom: 32px;
          font-weight: 400;
        }
  
        .micro-trust span {
          color: var(--border);
        }
  
        /* ── FORM CARD ── */
        .form-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: var(--shadow-lg);
          opacity: 0;
          animation: fadeUp 0.6s ease 0.35s forwards;
          position: relative;
          overflow: hidden;
        }
  
        .form-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #2dd4a0);
        }
  
        .form-title {
          font-family: "Instrument Serif", serif;
          font-size: 1.4rem;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }
        .form-subtitle {
          font-size: 0.85rem;
          color: var(--ink-muted);
          margin-bottom: 24px;
          line-height: 1.55;
        }
  
        .field-group {
          margin-bottom: 14px;
        }
  
        label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--ink-soft);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 7px;
        }
  
        input[type="text"],
        input[type="email"] {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius);
          font-family: "DM Sans", sans-serif;
          font-size: 0.93rem;
          color: var(--ink);
          background: var(--surface);
          transition:
            border-color 0.2s,
            box-shadow 0.2s;
          outline: none;
        }
  
        input[type="text"]::placeholder,
        input[type="email"]::placeholder {
          color: var(--ink-muted);
        }
  
        input[type="text"]:focus,
        input[type="email"]:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow);
          background: var(--white);
        }
  
        .field-group.has-error input {
          border-color: #e74c3c;
        }
        .error-msg {
          font-size: 0.75rem;
          color: #c0392b;
          margin-top: 5px;
          display: none;
        }
        .field-group.has-error .error-msg {
          display: block;
        }
  
        .email-exists-box {
          display: none;
          margin-top: 8px;
          padding: 10px 12px;
          background: #fefce8;
          border: 1px solid #fde68a;
          border-radius: 8px;
          font-size: 0.78rem;
          color: #92400e;
          line-height: 1.55;
        }
        .email-exists-box.visible {
          display: block;
        }
        .email-exists-box a {
          color: var(--accent);
          font-weight: 600;
          text-decoration: underline;
        }
  
        .legal-section {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
  
        .legal-row {
          display: flex;
          align-items: flex-start;
          gap: 9px;
        }
  
        .legal-row input[type="checkbox"] {
          width: 15px;
          height: 15px;
          min-width: 15px;
          margin-top: 2px;
          accent-color: var(--accent);
          cursor: pointer;
          padding: 0;
        }
  
        .legal-label {
          font-size: 0.77rem;
          color: var(--ink-soft);
          line-height: 1.5;
          cursor: pointer;
          text-transform: none;
          font-weight: 400;
          letter-spacing: 0;
        }
        .legal-label a {
          color: var(--accent);
          text-decoration: underline;
        }
  
        .turnstile-wrap {
          margin-top: 14px;
          padding: 12px 14px;
          background: #f0f7f4;
          border: 1px solid rgba(26, 107, 74, 0.15);
          border-radius: var(--radius);
        }
  
        .turnstile-lbl {
          font-size: 0.75rem;
          color: var(--ink-soft);
          margin-bottom: 10px;
          font-weight: 500;
        }
  
        .ts-loading {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--ink-muted);
          padding: 6px 0;
        }
  
        .ts-error {
          font-size: 0.75rem;
          color: #c0392b;
          margin-bottom: 6px;
          display: none;
        }
        .retry-btn {
          background: none;
          border: none;
          color: var(--accent);
          font-size: 0.75rem;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          font-family: "DM Sans", sans-serif;
          display: none;
          margin-top: 4px;
        }
  
        .global-error {
          display: none;
          padding: 10px 14px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          font-size: 0.8rem;
          color: #b91c1c;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        .global-error.visible {
          display: block;
        }
  
        .btn-primary {
          width: 100%;
          padding: 14px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: var(--radius);
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 14px;
          transition:
            background 0.2s,
            transform 0.15s,
            box-shadow 0.2s,
            opacity 0.2s;
          position: relative;
          overflow: hidden;
        }
  
        .btn-primary:hover:not(:disabled) {
          background: #155c3e;
          box-shadow: 0 4px 20px rgba(26, 107, 74, 0.3);
          transform: translateY(-1px);
        }
        .btn-primary:active:not(:disabled) {
          transform: translateY(0);
        }
        .btn-primary:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .btn-primary.loading {
          pointer-events: none;
        }
        .btn-primary .btn-text {
          transition: opacity 0.2s;
        }
        .btn-primary .btn-loader {
          display: none;
          position: absolute;
          inset: 0;
          align-items: center;
          justify-content: center;
        }
        .btn-primary.loading .btn-text {
          opacity: 0;
        }
        .btn-primary.loading .btn-loader {
          display: flex;
        }
  
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
  
        .success-panel {
          display: none;
          text-align: center;
          padding: 16px 0;
        }
        .success-panel.visible {
          display: block;
        }
        .form-fields.hidden {
          display: none;
        }
  
        .success-icon {
          width: 56px;
          height: 56px;
          background: var(--accent-lt);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .success-icon svg {
          width: 26px;
          height: 26px;
          stroke: var(--accent);
        }
        .success-panel h3 {
          font-family: "Instrument Serif", serif;
          font-size: 1.5rem;
          margin-bottom: 8px;
        }
        .success-panel p {
          font-size: 0.88rem;
          color: var(--ink-soft);
          margin-bottom: 20px;
          line-height: 1.6;
        }
  
        .btn-secondary {
          display: inline-block;
          padding: 11px 28px;
          background: var(--accent);
          color: white;
          border-radius: var(--radius);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: background 0.2s;
        }
        .btn-secondary:hover {
          background: #155c3e;
        }
  
        /* ── DIVIDER ── */
        .section-divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 0;
        }
  
        /* ── WHAT YOU GET ── */
        .output-section {
          padding: 80px 0;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.4s forwards;
        }
  
        .section-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
  
        .output-section h2 {
          font-family: "Instrument Serif", serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 12px;
          line-height: 1.15;
        }
  
        .output-section h2 em {
          font-style: italic;
          color: var(--accent);
        }
  
        .output-intro {
          font-size: 1rem;
          color: var(--ink-soft);
          font-weight: 300;
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: 48px;
        }
  
        .output-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
  
        @media (max-width: 768px) {
          .output-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 480px) {
          .output-grid {
            grid-template-columns: 1fr;
          }
        }
  
        .output-item {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 22px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          transition:
            box-shadow 0.2s,
            transform 0.2s;
        }
  
        .output-item:hover {
          box-shadow: var(--shadow);
          transform: translateY(-2px);
        }
  
        .output-check {
          width: 20px;
          height: 20px;
          min-width: 20px;
          background: var(--accent-lt);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
  
        .output-check svg {
          width: 10px;
          height: 10px;
          stroke: var(--accent);
          stroke-width: 2.5;
        }
  
        .output-text {
          font-size: 0.85rem;
          color: var(--ink-soft);
          line-height: 1.5;
          font-weight: 400;
        }
  
        .output-text strong {
          color: var(--ink);
          font-weight: 600;
          display: block;
          margin-bottom: 2px;
        }
  
        /* ── HOW IT WORKS ── */
        .how-section {
          padding: 80px 0;
          border-top: 1px solid var(--border);
          opacity: 0;
          animation: fadeUp 0.6s ease 0.45s forwards;
        }
  
        .how-section h2 {
          font-family: "Instrument Serif", serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 12px;
          line-height: 1.15;
        }
  
        .how-section h2 em {
          font-style: italic;
          color: var(--accent);
        }
  
        .how-intro {
          font-size: 1rem;
          color: var(--ink-soft);
          font-weight: 300;
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: 56px;
        }
  
        .steps {
          display: flex;
          flex-direction: column;
        }
  
        .step {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 32px;
          padding: 40px 0;
          border-bottom: 1px solid var(--border);
          align-items: start;
        }
  
        .step:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
  
        @media (max-width: 640px) {
          .step {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
  
        .step-num {
          width: 48px;
          height: 48px;
          background: var(--accent-lt);
          border: 1.5px solid rgba(26, 107, 74, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Instrument Serif", serif;
          font-size: 1.3rem;
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 4px;
        }
  
        .step-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
  
        .step-title {
          font-family: "Instrument Serif", serif;
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 12px;
          line-height: 1.2;
        }
  
        .step-body {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--ink-soft);
          font-weight: 300;
          max-width: 580px;
        }
  
        .step-body p + p {
          margin-top: 12px;
        }
        .step-body strong {
          color: var(--ink);
          font-weight: 600;
        }
  
        /* ── FAQ ── */
        .faq-section {
          padding: 80px 0;
          border-top: 1px solid var(--border);
          opacity: 0;
          animation: fadeUp 0.6s ease 0.5s forwards;
        }
  
        .faq-section h2 {
          font-family: "Instrument Serif", serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 48px;
          line-height: 1.15;
        }
  
        .faq-list {
          display: flex;
          flex-direction: column;
          max-width: 760px;
        }
  
        .faq-item {
          border-bottom: 1px solid var(--border);
          padding: 0;
        }
  
        .faq-item:first-child {
          border-top: 1px solid var(--border);
        }
  
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          padding: 22px 0;
          font-family: "DM Sans", sans-serif;
          font-size: 0.97rem;
          font-weight: 600;
          color: var(--ink);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          transition: color 0.2s;
        }
  
        .faq-question:hover {
          color: var(--accent);
        }
  
        .faq-icon {
          width: 20px;
          height: 20px;
          min-width: 20px;
          border: 1.5px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            background 0.2s,
            border-color 0.2s,
            transform 0.2s;
          flex-shrink: 0;
        }
  
        .faq-icon svg {
          width: 8px;
          height: 8px;
          stroke: var(--ink-muted);
          stroke-width: 2.5;
          transition: transform 0.25s;
        }
  
        .faq-item.open .faq-icon {
          background: var(--accent);
          border-color: var(--accent);
        }
        .faq-item.open .faq-icon svg {
          stroke: white;
          transform: rotate(45deg);
        }
  
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition:
            max-height 0.3s ease,
            padding 0.3s ease;
        }
  
        .faq-item.open .faq-answer {
          max-height: 400px;
        }
  
        .faq-answer-inner {
          padding: 0 0 22px;
          font-size: 0.9rem;
          color: var(--ink-soft);
          line-height: 1.75;
          font-weight: 300;
          max-width: 640px;
        }
  
        .faq-answer-inner strong {
          color: var(--ink);
          font-weight: 600;
        }
        .faq-answer-inner a {
          color: var(--accent);
          text-decoration: underline;
        }
  
        /* ── BOTTOM CTA ── */
        .bottom-cta {
          padding: 80px 0;
          border-top: 1px solid var(--border);
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.55s forwards;
        }
  
        .bottom-cta h2 {
          font-family: "Instrument Serif", serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 14px;
          line-height: 1.15;
        }
  
        .bottom-cta h2 em {
          font-style: italic;
          color: var(--accent);
        }
  
        .bottom-cta p {
          font-size: 1rem;
          color: var(--ink-soft);
          font-weight: 300;
          margin-bottom: 32px;
          line-height: 1.7;
        }
  
        .btn-cta {
          display: inline-block;
          padding: 16px 36px;
          background: var(--accent);
          color: white;
          border-radius: var(--radius);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          transition:
            background 0.2s,
            transform 0.15s,
            box-shadow 0.2s;
        }
  
        .btn-cta:hover {
          background: #155c3e;
          box-shadow: 0 4px 20px rgba(26, 107, 74, 0.3);
          transform: translateY(-1px);
        }
  
        .bottom-microtrust {
          margin-top: 14px;
          font-size: 0.78rem;
          color: var(--ink-muted);
        }
  
        /* ── FOOTER ── */
        footer {
          border-top: 1px solid var(--border);
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          opacity: 0;
          animation: fadeUp 0.4s ease 0.6s forwards;
        }
        .footer-left {
          font-size: 0.78rem;
          color: var(--ink-muted);
        }
        .footer-right {
          font-size: 0.78rem;
          color: var(--ink-muted);
        }
        .footer-right a {
          color: var(--accent);
          text-decoration: none;
        }
  
        /* ── SCREENSHOTS ── */
        .screenshot {
          width: 100%;
          border-radius: 12px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 24px rgba(13, 15, 18, 0.1);
          display: block;
          margin-top: 24px;
        }
  
        /* ── CURIOSITY BRIDGE ── */
        .curiosity-bridge {
          text-align: center;
          padding: 40px 0 0;
        }
  
        .curiosity-bridge p {
          font-size: 1.05rem;
          color: var(--ink-soft);
          font-weight: 300;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto;
        }
  
        .curiosity-bridge p em {
          font-style: italic;
          color: var(--ink);
          font-weight: 400;
        }
  
        .curiosity-arrow {
          display: block;
          margin: 16px auto 0;
          color: var(--ink-muted);
          font-size: 1.2rem;
          animation: bounceDown 1.8s ease infinite;
        }
  
        @keyframes bounceDown {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
  
        /* ── IMMEDIATE OUTPUT SECTION ── */
        .output-preview {
          padding: 0 0 80px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.4s forwards;
        }
  
        .output-preview-inner {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
  
        .output-preview-header {
          padding: 16px 24px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--surface);
        }
  
        .output-preview-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
  
        .output-preview-tag::before {
          content: "";
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulse 2s ease infinite;
        }
  
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
  
        .output-preview-caption {
          font-size: 0.78rem;
          color: var(--ink-muted);
          font-style: italic;
        }
  
        .output-preview-img {
          width: 100%;
          display: block;
        }
  
        /* ── SAMPLE GUIDE SECTION ── */
        .sample-section {
          padding: 80px 0;
          border-top: 1px solid var(--border);
          opacity: 0;
          animation: fadeUp 0.6s ease 0.45s forwards;
        }
  
        .sample-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
  
        @media (max-width: 768px) {
          .sample-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
  
        .sample-left {
        }
  
        .sample-left h2 {
          font-family: "Instrument Serif", serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 14px;
          line-height: 1.15;
        }
  
        .sample-left h2 em {
          font-style: italic;
          color: var(--accent);
        }
  
        .sample-left p {
          font-size: 0.97rem;
          color: var(--ink-soft);
          font-weight: 300;
          line-height: 1.75;
          margin-bottom: 12px;
        }
  
        .sample-left p strong {
          color: var(--ink);
          font-weight: 600;
        }
  
        .sample-prompt {
          display: inline-block;
          margin: 16px 0 24px;
          padding: 12px 16px;
          background: var(--accent-lt);
          border: 1px solid rgba(26, 107, 74, 0.2);
          border-radius: 8px;
          font-size: 0.88rem;
          color: var(--accent);
          font-style: italic;
          line-height: 1.5;
        }
  
        .sample-prompt span {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-muted);
          font-style: normal;
          margin-bottom: 4px;
        }
  
        .btn-sample {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          background: var(--white);
          border: 1.5px solid var(--accent);
          border-radius: var(--radius);
          color: var(--accent);
          font-family: "DM Sans", sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition:
            background 0.2s,
            color 0.2s;
        }
  
        .btn-sample:hover {
          background: var(--accent);
          color: white;
        }
  
        .sample-right {
          position: relative;
        }
  
        .sample-what {
          margin-bottom: 20px;
          padding: 18px 20px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
        }
  
        .sample-what-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--ink-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
  
        .sample-what-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
  
        .sample-what-items span {
          font-size: 0.8rem;
          color: var(--ink-soft);
          background: var(--accent-lt);
          border: 1px solid rgba(26, 107, 74, 0.15);
          border-radius: 100px;
          padding: 4px 12px;
          font-weight: 500;
        }
  
        .sample-judge {
          font-family: "Instrument Serif", serif;
          font-size: 1.6rem;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 8px;
          line-height: 1.2;
        }
  
        .sample-sub {
          font-size: 0.95rem;
          color: var(--ink-soft);
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 20px;
        }
  
        .sample-pages {
          position: relative;
          height: 340px;
        }
  
        .sample-page {
          position: absolute;
          width: 88%;
          border-radius: 12px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 24px rgba(13, 15, 18, 0.1);
          overflow: hidden;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
  
        .sample-page img {
          width: 100%;
          display: block;
        }
  
        .sample-page:nth-child(1) {
          top: 0;
          left: 0;
          z-index: 3;
          transform: rotate(-1deg);
        }
        .sample-page:nth-child(2) {
          top: 20px;
          left: 24px;
          z-index: 2;
          transform: rotate(1.5deg);
        }
        .sample-page:nth-child(3) {
          top: 40px;
          left: 46px;
          z-index: 1;
          transform: rotate(3deg);
        }
  
        .sample-pages:hover .sample-page:nth-child(1) {
          transform: rotate(0deg) translateY(-4px);
          box-shadow: 0 12px 40px rgba(13, 15, 18, 0.15);
        }
        .sample-pages:hover .sample-page:nth-child(2) {
          transform: rotate(0deg) translate(20px, 10px);
        }
        .sample-pages:hover .sample-page:nth-child(3) {
          transform: rotate(0deg) translate(40px, 20px);
        }
  
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
  
        /* ── COOKIE BANNER ── */
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--white);
          border-top: 1px solid var(--border);
          padding: 20px 24px;
          box-shadow: 0 -4px 24px rgba(13, 15, 18, 0.1);
          z-index: 1000;
          display: none;
          animation: slideUp 0.4s ease;
        }
  
        .cookie-banner.show {
          display: block;
        }
  
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
  
        .cookie-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }
  
        @media (max-width: 768px) {
          .cookie-content {
            flex-direction: column;
            align-items: flex-start;
          }
        }
  
        .cookie-text {
          flex: 1;
          font-size: 0.9rem;
          color: var(--ink-soft);
          line-height: 1.6;
        }
  
        .cookie-text a {
          color: var(--accent);
          text-decoration: underline;
          font-weight: 600;
        }
  
        .cookie-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }
  
        @media (max-width: 768px) {
          .cookie-actions {
            width: 100%;
            gap: 12px;
          }
        }
  
        .cookie-btn {
          padding: 10px 20px;
          border: none;
          border-radius: var(--radius);
          font-family: "DM Sans", sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
  
        @media (max-width: 768px) {
          .cookie-btn {
            flex: 1;
          }
        }
  
        .cookie-btn-accept {
          background: var(--accent);
          color: white;
        }
  
        .cookie-btn-accept:hover {
          background: #155c3e;
          box-shadow: 0 4px 12px rgba(26, 107, 74, 0.3);
        }
  
        .cookie-btn-decline {
          background: var(--surface);
          color: var(--ink);
          border: 1.5px solid var(--border);
        }
  
        .cookie-btn-decline:hover {
          background: var(--border);
          border-color: var(--ink-muted);
        }
`;  
