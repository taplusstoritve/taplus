document.addEventListener('DOMContentLoaded', function () {
  const consentKey = 'ta_cookie_notice_accepted';
  const dismissedUntilKey = 'ta_cookie_notice_dismissed_until';
  const hasAccepted = localStorage.getItem(consentKey) === 'yes';
  const dismissedUntil = Number(localStorage.getItem(dismissedUntilKey) || '0');
  const now = Date.now();

  if (hasAccepted || now < dismissedUntil) {
    return;
  }

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.innerHTML = `
    <div class="cookie-banner__content">
      <p>
        Ta spletna stran uporablja nujne piškotke za osnovno delovanje strani.
      </p>
      <div class="cookie-banner__actions">
        <a href="politika-zasebnosti.html" class="cookie-banner__more">Politika zasebnosti</a>
        <a href="gdpr.html" class="cookie-banner__more">GDPR</a>
        <button type="button" class="cookie-banner__dismiss">Zapri</button>
        <button type="button" class="btn-gold cookie-banner__btn">Razumem</button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  const acceptButton = banner.querySelector('.cookie-banner__btn');
  const dismissButton = banner.querySelector('.cookie-banner__dismiss');

  acceptButton.addEventListener('click', function () {
    localStorage.setItem(consentKey, 'yes');
    banner.remove();
  });

  dismissButton.addEventListener('click', function () {
    const oneDayMs = 24 * 60 * 60 * 1000;
    localStorage.setItem(dismissedUntilKey, String(Date.now() + oneDayMs));
    banner.remove();
  });
});