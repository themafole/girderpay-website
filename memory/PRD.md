# GirderPay - Product Requirements Document

## Original Problem Statement
Generate a frontend project for GirderPay, a fintech startup. Aesthetic: Liquid-Glass (high blur, #149d80 teal accents, dark mode). Tone: Enterprise Infrastructure (Cybersource style). Focus on modularity and high performance. Key pages needed: Hero-driven Homepage, 6-Step Developer Onboarding, Security Vault, Glassmorphism Auth Cards, and Contact page. Primary stack: Modern Responsive Web (React/Tailwind/JS). Use industrial metaphors (Girders, Foundations, Steel) in the copy. Ensure all entry points (Sign In/Sign Up) are persistent and high-contrast.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Shadcn/UI components
- **Backend**: FastAPI (minimal, no auth endpoints needed)
- **Routing**: React Router v7 with 5 routes
- **Design System**: Liquid-glass aesthetic, dark mode only, #149d80 teal accents
- **Fonts**: Outfit (headings), IBM Plex Sans (body), JetBrains Mono (code)
- **Animations**: CSS-only (@keyframes + Tailwind transitions)

## User Personas
- **Developers**: Looking for easy-to-integrate payment APIs (Onboarding page)
- **Enterprise Decision Makers**: Evaluating security and reliability (Security Vault, Homepage)
- **Business Owners**: Looking to start accepting payments (Homepage hero, Contact page)

## Core Requirements (Static)
- Dark mode with #149d80 teal accents
- Glassmorphism effects (backdrop-blur, semi-transparent surfaces)
- Industrial metaphors in copy (Girders, Foundations, Steel, Vault)
- Persistent Sign In / Sign Up entry points
- Mobile responsive with hamburger menu
- CSS-only animations (no Framer Motion)

## What's Been Implemented (Feb 2026)
1. **Homepage**: Hero section with floating glass card, stats bar (4 metrics), feature grid (6 cards), code preview section, trusted-by logos
2. **6-Step Developer Onboarding**: Timeline with vertical girder line, 6 steps with code blocks
3. **Security Vault**: Threat stats, 6 feature cards, compliance framework grid, incident response section
4. **Auth Page**: Glassmorphism Sign In/Sign Up cards with tab switcher (visual-only)
5. **Contact Page**: Contact form + 4 info cards + enterprise support CTA
6. **Pricing Page**: 3 tiers (Construction $0/mo, Framework 1.2%+$0.20/txn, Infrastructure Custom), FAQ section, Enterprise CTA
7. **Navigation**: Sticky glassmorphism navbar with 5 links + active states, mobile menu
8. **Footer**: CTA, 4-column link grid, system status indicator
9. **SEO**: Unique title, meta description, og:title, og:description on all 6 pages

## Test Results
- 56/57 frontend assertions passed (98% success rate)
- All routes, data-testids, mobile menu, tab switching verified

## Prioritized Backlog
### P0 (Critical - None remaining)
- All core pages implemented and tested

### P1 (High)
- Add page transition animations between routes
- Make footer placeholder links route to proper sections (#pricing, #about, etc.)
- Add scroll-triggered animations (IntersectionObserver)

### P2 (Medium)
- Add a Pricing page
- Add an API Documentation page
- Add cookie consent banner
- Add SEO meta tags per page

### P3 (Nice to have)
- Add dark/light theme toggle
- Add language/region selector
- Add blog section
- Add customer testimonials carousel

## Next Tasks
1. Wire up footer placeholder links to proper anchors
2. Add scroll-triggered reveal animations
3. Add meta tags for SEO
4. Consider adding a Pricing page
