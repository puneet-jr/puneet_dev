

# Maddipati Puneet Janakiram — Personal Portfolio

A professional single-page portfolio website showcasing backend development skills, projects, and contact information. Built with React, Tailwind CSS, and Vite.

## Overview

This is a static portfolio site designed for recruiters, hiring managers, and potential collaborators. It presents professional background, technical skills, work process, and provides direct contact channels.

**Live URL:** https://personal-portfolio-chi-seven-81.vercel.app/

## Tech Stack

- **Framework:** React 19.1.2
- **Build Tool:** Vite 7.0.3
- **Styling:** Tailwind CSS 3.4.17
- **Routing:** React Router DOM 7.6.3
- **Icons:** Remix Icon 4.5.0
- **Fonts:** Playfair Display (serif), Inter (sans-serif)

## Project Structure

```
src/
├── App.jsx                 # Root component with router setup
├── main.jsx               # Application entry point
├── index.css              # Global styles and Tailwind imports
├── i18n/                  # Internationalization setup
│   ├── index.js
│   └── local/
├── pages/
│   ├── NotFound.jsx       # 404 error page
│   └── home/
│       ├── page.jsx       # Home page composition
│       └── components/    # Section components
│           ├── Navbar.jsx
│           ├── HeroSection.jsx
│           ├── PurposeSection.jsx
│           ├── KeyFeaturesSection.jsx
│           ├── HowItWorksSection.jsx
│           ├── BenefitsSection.jsx
│           ├── ContactSection.jsx
│           └── FooterSection.jsx
└── router/
    ├── config.jsx         # Route definitions
    └── index.js           # Router utilities
```

## Sections

| Section | Description |
|---------|-------------|
| Hero | Introduction with photo, headline, and CTAs |
| Purpose | About me, bio, and technology tags |
| Key Features | Technical skills and stack overview |
| How It Works | 4-step development process timeline |
| Benefits | Value propositions and deliverables |
| Contact | Form and direct contact links |
| Footer | Navigation, social links, and copyright |

## Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Configuration

### Tailwind Colors
- `terracotta`: #C96B4A (primary accent)
- `charcoal`: #2C2C2C (dark backgrounds)
- `sage`: #A8B5A0 (secondary accent)
- `beige`: #F5F3EF (light backgrounds)
- `warmgray`: #4A4A4A (text)

### Auto-imports
The project uses `unplugin-auto-import` for automatic React hooks and React Router imports. No manual imports needed for:
- React hooks (useState, useEffect, etc.)
- React Router components (Link, useNavigate, etc.)
- React i18n (useTranslation)



## License

All rights reserved. Copyright 2026 Maddipati Puneet Janakiram.
