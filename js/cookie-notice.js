document.addEventListener('DOMContentLoaded', function () {
  const languageFromUrl = new URLSearchParams(window.location.search).get('lang');
  const language = (languageFromUrl && ['sl', 'en'].includes(languageFromUrl)) ? languageFromUrl : (localStorage.getItem('siteLanguage') || 'sl');
  const t = {
    sl: {
      message: 'Ta spletna stran uporablja nujne piškotke za osnovno delovanje strani.',
      privacy: 'Politika zasebnosti',
      gdpr: 'GDPR',
      dismiss: 'Zapri',
      accept: 'Razumem'
    },
    en: {
      message: 'This website uses essential cookies for basic site functionality.',
      privacy: 'Privacy policy',
      gdpr: 'GDPR',
      dismiss: 'Close',
      accept: 'I understand'
    }
  };
  const copy = t[language] || t.sl;

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
        ${copy.message}
      </p>
      <div class="cookie-banner__actions">
        <a href="politika-zasebnosti.html?lang=${language}" class="cookie-banner__more">${copy.privacy}</a>
        <a href="gdpr.html?lang=${language}" class="cookie-banner__more">${copy.gdpr}</a>
        <button type="button" class="cookie-banner__dismiss">${copy.dismiss}</button>
        <button type="button" class="btn-gold cookie-banner__btn">${copy.accept}</button>
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