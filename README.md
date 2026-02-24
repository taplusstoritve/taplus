# TA+ Premium čiščenje

Ta repozitorij vsebuje statične HTML, CSS in slikovne datoteke za spletno stran TA+ čiščenje. Stran je zdaj pripravljena za gostovanje na GitHub Pages. 

## Namestitev na GitHub Pages

1. **Ustvari repozitorij** na GitHubu in potisni (`git push`) vsebino tega direktorija v `main` (ali `master`) vejo.
2. V nastavitvah repozitorija (Settings > Pages) izberi izvor (branch) `main` in mapo `/ (root)`.
3. GitHub bo po kratkem času povsem javno objavil stran na `https://<uporabnisko-ime>.github.io/<repozitorij>`.

### Uporaba lastne domene

- Če želiš domeno, npr. `www.primer.si`, ustvari datoteko `CNAME` v korenu repozitorija s to domeno.
- V DNS-ju pri Cloudflareju poveži domeno z GitHub Pages (A ali CNAME zapis, odvisno od njihove dokumentacije).
- V Cloudflareju naj bo `SSL/TLS mode` nastavljen na `Flexible` ali `Full` glede na konfiguracijo. 

## Obrazec za povpraševanje

Formular na glavni strani zdaj pošilja podatke preko [Formspree](https://formspree.io/f/mreaonjq) in preusmeri uporabnika na `thankyou.html`. Prejšnje nastavitve za Netlify so odstranjene, ker GitHub Pages ne ponuja backend storitev.

## Razvoj in spremembe

- Uredi `index.html`, `storitve.html` ali `thankyou.html` po potrebi.
- Za večje spremembe posodobi CSS v `css/style.css`.
- Če boš upravljal z domenami/Cloudflare, poskrbi, da imaš pravilne DNS zapise in morebitne preusmeritve (npr. WWW -> non-WWW).

---

Srečno z gostovanjem! Če potrebujete pomoč pri povezavi z Cloudflare ali GitHub Pages, sem na voljo.