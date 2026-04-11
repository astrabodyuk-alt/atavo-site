# ATAVO AGENCY — Site Web | Context Master File
> Ce fichier est le brief complet du projet. Lis-le en entier avant de coder quoi que ce soit.

---

## 1. IDENTITÉ DU PROJET

**Client :** Atavo Agency (Nigel Atangana)
**Entreprise légale :** Achievesphere Limited trading as Atavo Agency
**Site actuel :** atavo.co.uk
**Stack :** Next.js 14 + Tailwind CSS + shadcn/ui
**Déploiement :** Vercel
**GitHub :** astrabodyuk/atavo-site (à créer)

---

## 2. OBJECTIF DU SITE

Atavo Agency builds 3 things for UK businesses:
1. **Professional websites** — from £699
2. **Custom SaaS & business tools** — lead tracking, client portals, booking systems
3. **Automation** — email sequences, CRM, AI workflows

All built custom. All industries. Goal: help businesses save time and scale.

Le site est une **vitrine commerciale** — pas un portfolio artistique.

**CTA principal :** "Get your free audit" ou "Start your project — £699"
**Paiement :** Stripe + Klarna (3× £233/mois)

---

## 3. CIBLE CLIENT

Any UK business that needs to go online or automate:
- Restaurants, salons, trades, coaches, e-commerce, clinics, agencies
- Not limited to the food industry
- No website OR outdated website (5+ years old)
- Size: 1–50 employees
- Budget comfort: £500–£5,000
- Pain points: "I'm losing customers online" / "I waste hours on manual tasks"

---

## 4. BRAND IDENTITY

### Couleurs — light theme (current)
```css
--color-bg:       #ffffff;   /* Background white */
--color-surface:  #f7f7f7;   /* Cards, surfaces */
--color-border:   #e8e8e8;   /* Borders */
--color-green:    #00c47a;   /* Accent — readable green on white */
--color-text:     #0d0d0d;   /* Primary text */
--color-muted:    #6b6b6b;   /* Secondary text */
--color-black:    #0d0d0d;   /* CTAs, bold elements */
```

### Typographie
```css
--font-heading: 'Montserrat', sans-serif;   /* Titres — Bold 700/900 */
--font-body:    'Inter', sans-serif;         /* Corps — Regular 400/500 */
```

Import Google Fonts :
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

### Style visuel
- **Référence :** eloqwnt.com, KOTA (kota.co.uk), Ikon London
- **Style :** Light Premium + Exaggerated Minimalism
- Typographie oversized sur hero (clamp 3rem → 8rem)
- Fond blanc dominant, vert #00c47a comme seul accent couleur
- CTAs noirs (bg-black) avec hover vert — sauf CTA Final section (bg-black)
- Whitespace agressif entre sections
- Pour les components custom Atavo : fade-in scroll reveal. Pour les components 21st.dev : garder TOUS les effets d'origine (WebGL, marquee, shaders, GSAP, etc.)
- Scroll reveal : fade-in + slide-up (700ms, IntersectionObserver)
- Lazy load images avec placeholder couleur

---

## 5. STRUCTURE DES SECTIONS (dans l'ordre)

```
1. NAV          — Logo texte + liens + CTA "Start project"
2. HERO         — Headline oversized + sous-titre + 2 CTA + stats
3. DEMO STRIP   — Présentation lushbites2.vercel.app (featured work)
4. SERVICES     — 3 services : Site web / App / Automatisation
5. HOW IT WORKS — 3 étapes simples (Brief → Build → Launch)
6. PRICING      — £699 clair + Klarna 3× + ce qui est inclus
7. CASE STUDY   — Lush Bites Portsmouth (before/after ou just showcase)
8. TESTIMONIALS — 3 avis (placeholder pour l'instant)
9. FAQ          — 5 questions
10. CTA FINAL   — "Ready to go online?" + Stripe link + Calendly
11. FOOTER      — Logo + liens + contact + © Achievesphere Limited
```

---

## 6. COPY HERO (À UTILISER)

### Headline (oversized)
```
We build websites & tools
that help your business grow.
```

### Sous-titre
```
Custom web design and business software for UK companies.
From £699.
```

### CTA Button
```
[Get your free audit 👋]    (bg: #0d0d0d, text: white, hover: #00c47a)
```

### Stats strip sous le hero
```
£699 — Launch price
10 days — Average delivery
90 days — Free maintenance
3× — Pay monthly with Klarna
```

---

## 7. SERVICES

### Service 1 — Website
**Titre :** Professional Website
**Prix :** From £699
**Inclus :** Custom design, any industry, mobile responsive, SEO-ready, 90 days maintenance
**Délai :** 10 days

### Service 2 — SaaS / Business Tool
**Titre :** SaaS & Business Tools
**Prix :** From £1,499
**Inclus :** Lead tracking, booking systems, client portals, custom dashboards
**Délai :** 2–4 weeks

### Service 3 — Automation
**Titre :** Business Automation
**Prix :** From £299/month
**Inclus :** Email sequences, CRM, AI workflows, Make.com/n8n
**Délai :** 1 week

---

## 8. HOW IT WORKS

**Étape 1 — Brief (Day 1)**
You fill a short form. We send you a questionnaire. 30 minutes max.

**Étape 2 — Build (Days 2–9)**
We design and build your site. You see daily progress updates. (~7–8 days)

**Étape 3 — Launch (Day 10)**
Your site goes live. We handle hosting, domain, and setup. (~10 business days total from first contact)

---

## 9. PRICING SECTION

```
LAUNCH OFFER
£699 one-time

✓ Custom design (not a template)
✓ Mobile responsive
✓ SEO foundation (Google-ready)
✓ Contact form + Google Maps
✓ Social media links
✓ 90 days free maintenance
✓ Full code ownership

[Start for £349.50 today →]
or pay in 3× £233 with Klarna

"No website = no customers. Let's fix that."
```

---

## 10. FAQ

1. **Do I own the website?** Yes. Full code ownership. You can host it anywhere.
2. **What if I don't have a logo?** We create a basic logo for free with your site.
3. **Can I update it myself?** Yes. We'll train you, or handle updates for £30/month.
4. **What do you need from me?** A short brief + your photos (or we use AI-generated ones).
5. **How do I pay?** Stripe (card) or Klarna (3× interest-free). 50% deposit to start.

---

## 11. CASE STUDIES

Case studies coming soon — real client screenshots and results will be added here once projects are ready.

**Demo strip:** Do not use lushbites2.vercel.app iframe. Show a placeholder ("Case studies coming soon") or a static card layout until real screenshots are available.

---

## 12. STRIPE + KLARNA

**Payment Link £699 (à créer dans Stripe) :**
- Product : "Website — Atavo Agency"
- Price : £699
- Payment methods : Card + Klarna
- Redirect : atavo.co.uk/thank-you

**Payment Link £349.50 (deposit 50%) :**
- Product : "Website Deposit — Atavo Agency"
- Price : £349.50
- Payment methods : Card + Klarna

**Comment intégrer :**
```jsx
<a href="https://buy.stripe.com/XXXX" className="btn-primary">
  Start your project — £699
</a>
```
Remplacer XXXX par le vrai lien Stripe une fois créé.

---

## 13. STACK TECHNIQUE

```
Framework:    Next.js 16 (App Router)
Styling:      Tailwind CSS v4 (CSS-based config via @theme inline in globals.css)
Components:   shadcn/ui (Base UI / Nova preset — NOT Radix)
Icons:        Lucide React
Animations:   CSS transitions + IntersectionObserver Reveal component
Fonts:        Google Fonts (Montserrat + Inter) via next/font/google
Deploy:       Vercel
GitHub:       astrabodyuk-alt/atavo-site
Domain:       atavo.co.uk
```

**Note:** Tailwind v4 uses no tailwind.config.ts — all theme tokens live in `@theme inline {}` block inside `app/globals.css`. shadcn uses Base UI (accordion prop is `multiple={false}`, not `type="single"`).

**Note:** The Reveal component (`components/reveal.tsx`) is `'use client'` and uses IntersectionObserver with `threshold: 0.1`.

### Commandes setup
```bash
npx create-next-app@latest atavo-site --typescript --tailwind --eslint --app
cd atavo-site
npx shadcn-ui@latest init
npm install lucide-react
```

---

## 14. REFERENCES VISUELLES

- **eloqwnt.com** — Light premium, centered layout, whitespace agressif
- **kota.co.uk** — Portfolio grid minimaliste, lazy load subtil
- **ikon.london** — Luxury minimal, confiance dans le whitespace

---

## USP — UNIQUE VALUE

Atavo's main differentiator:
Every project includes a **FREE Business Audit (worth £299)**:

1. **Deep understanding** of the client's business, goals and vision
2. **Full competitive analysis** — we research ALL their competitors to identify positioning opportunities
3. **Strategic recommendations** before we build anything

This audit is included in every project (website, SaaS, automation).
It's what separates Atavo from cheap template agencies.

**Messaging:** "Worth £299. Yours free."

---

## 15. RÈGLES DE DÉVELOPPEMENT

1. **Mobile first.** Tout doit être parfait sur iPhone 13 (390px) avant le desktop.
2. **Components 21st.dev : RESPECTER À LA LETTRE.** Quand un component est fourni depuis 21st.dev, l'intégrer EXACTEMENT tel quel — garder TOUTES les animations, effets, glows, shaders, sparkles, parallax, marquee, GSAP, framer-motion, etc. Ne JAMAIS simplifier, retirer ou modifier les effets visuels. Seul le contenu texte et les couleurs de marque doivent être adaptés.
3. **Performance > Effets SAUF components 21st.dev.** Lighthouse > 90 est un objectif pour le code custom, mais ne doit JAMAIS justifier la suppression d'effets provenant de components 21st.dev fournis par le client.
4. **Un seul accent couleur visible à la fois.** Vert #00f5a0 dominant, bleu #00b4d8 pour les hover states uniquement.
5. **Typo oversized sur hero.** `font-size: clamp(2.5rem, 7vw, 7rem)` minimum.
6. **Sections séparées par whitespace.** `py-24 md:py-32` entre chaque section.
7. **CTA toujours visible.** Sticky nav avec bouton "Start project" sur desktop.
8. **Pas d'emojis comme icônes.** Lucide React uniquement.
9. **Images lazy load.** `loading="lazy"` sur toutes les images.
10. **SEO basique.** title + description meta sur chaque page.

---

## 16. FICHIERS À CRÉER

```
app/
  layout.tsx          — Root layout, fonts, metadata
  page.tsx            — Home page (toutes les sections)
  thank-you/page.tsx  — Page après paiement Stripe
components/
  nav.tsx             — Navigation sticky
  hero.tsx            — Hero section
  demo-strip.tsx      — Featured work (placeholder until real case studies ready)
  services.tsx        — 3 services cards
  how-it-works.tsx    — 3 étapes
  pricing.tsx         — Pricing + Klarna
  case-study.tsx      — Lush Bites case study
  testimonials.tsx    — 3 avis
  faq.tsx             — FAQ accordion
  cta-final.tsx       — CTA final + Stripe
  footer.tsx          — Footer
public/
  work/lush-bites.png — Screenshot du site Lush Bites
```
