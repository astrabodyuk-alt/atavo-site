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

Convertir des restaurants et commerces locaux UK en clients web à £699.
Le site est une **vitrine commerciale** — pas un portfolio artistique.

**CTA principal :** "Get your free audit" ou "Start your project — £699"
**CTA secondaire :** Voir la démo → lushbites2.vercel.app
**Paiement :** Stripe + Klarna (3× £233/mois)

---

## 3. CIBLE CLIENT

- Restaurants, takeaways, cafés, coiffeurs, artisans UK
- Pas de site web OU site web vieux de 5+ ans
- Taille : 1-15 employés
- Budget confort : £500-£1,000
- Douleur principale : "Je perds des clients car je ne suis pas en ligne"

---

## 4. BRAND IDENTITY

### Couleurs
```css
--color-bg:       #0d1117;   /* Fond principal noir */
--color-surface:  #161b22;   /* Cards, surfaces */
--color-border:   #21262d;   /* Bordures subtiles */
--color-green:    #00f5a0;   /* Accent principal — vert néon */
--color-blue:     #00b4d8;   /* Accent secondaire — bleu */
--color-white:    #f0f6fc;   /* Texte principal */
--color-muted:    #8b949e;   /* Texte secondaire */
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
- **Style :** Dark Premium + Exaggerated Minimalism
- Typographie oversized sur hero (clamp 3rem → 8rem)
- Fond #0d1117 dominant, vert #00f5a0 comme seul accent
- Whitespace agressif entre sections
- Pas de WebGL, pas de marquee, pas d'animations complexes
- Scroll reveal : fade-in + slide-up (150-300ms, Tailwind animate)
- Curseur hover vert sur les project cards
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
We build websites
that get you
more customers.
```

### Sous-titre
```
Premium web design for UK restaurants and local businesses.
From £699. Live in 7 days.
```

### CTA Buttons
```
[Get your free audit →]     (bg: #00f5a0, text: #0d1117)
[See a live demo]           (border: #00f5a0, text: #00f5a0)
```

### Stats strip sous le hero
```
£699 — Launch price
7 days — Average delivery
90 days — Free maintenance
3× — Pay monthly with Klarna
```

---

## 7. SERVICES

### Service 1 — Web Design
**Titre :** Professional Website
**Prix :** From £699
**Inclus :** Mobile responsive, SEO-ready, Google Analytics, Contact form, 90 days maintenance
**Délai :** 7 days

### Service 2 — Web App / SaaS
**Titre :** Web Application
**Prix :** From £1,499
**Inclus :** Custom features, Database, User accounts, Admin panel
**Délai :** 2-4 weeks

### Service 3 — Automation
**Titre :** Business Automation
**Prix :** From £299/month
**Inclus :** AI workflows, Email automation, CRM setup, Make.com/n8n
**Délai :** 1 week

---

## 8. HOW IT WORKS

**Étape 1 — Brief (Day 1)**
You fill a short form. We send you a questionnaire. 30 minutes max.

**Étape 2 — Build (Days 2–6)**
We design and build your site. You see daily progress updates.

**Étape 3 — Launch (Day 7)**
Your site goes live. We handle hosting, domain, and setup.

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

## 11. CASE STUDY — LUSH BITES PORTSMOUTH

**Business :** Lush Bites — Smash burger restaurant, Portsmouth UK
**Challenge :** No online presence, losing customers to competitors
**Solution :** Full website with online menu, click & collect, Google reviews
**Tech :** Next.js 14 + Tailwind, deployed on Vercel
**Timeline :** 7 days
**Live demo :** lushbites2.vercel.app

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
Framework:    Next.js 14 (App Router)
Styling:      Tailwind CSS v3
Components:   shadcn/ui
Icons:        Lucide React
Animations:   Tailwind animate + CSS transitions (pas Framer Motion)
Fonts:        Google Fonts (Montserrat + Inter)
Deploy:       Vercel
Domain:       atavo.co.uk
```

### Commandes setup
```bash
npx create-next-app@latest atavo-site --typescript --tailwind --eslint --app
cd atavo-site
npx shadcn-ui@latest init
npm install lucide-react
```

---

## 14. REFERENCES VISUELLES

- **eloqwnt.com** — Dark premium, typographie bold, whitespace agressif
- **kota.co.uk** — Portfolio grid minimaliste, lazy load subtil
- **ikon.london** — Luxury minimal, confiance dans le whitespace
- **lushbites2.vercel.app** — Notre propre démo (à showcaser)

---

## 15. RÈGLES DE DÉVELOPPEMENT

1. **Mobile first.** Tout doit être parfait sur iPhone 13 (390px) avant le desktop.
2. **Pas d'animations complexes.** Fade-in scroll reveal max. Pas de WebGL, pas de marquee.
3. **Performance > Effets.** Lighthouse score > 90 obligatoire.
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
  demo-strip.tsx      — Featured work (Lush Bites)
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
