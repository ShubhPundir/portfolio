# Next.js Project Structure

This document describes the clean Next.js project structure after migration from Vite/React.

## Directory Structure

```
frontend/
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── next-env.d.ts           # Next.js TypeScript definitions
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration (for Tailwind)
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── README.md               # Project documentation
│
├── public/                 # Static assets
│   ├── portfolio.png
│   └── Shubh_Resume.pdf
│
└── src/
    ├── app/                # Next.js App Router
    │   ├── layout.tsx      # Root layout
    │   ├── page.tsx        # Home page (/)
    │   └── allprojects/
    │       └── page.tsx    # All Projects page (/allprojects)
    │
    ├── components/         # React components (TypeScript)
    │   ├── AllProjects.tsx
    │   ├── Certifications.tsx
    │   ├── Contact.tsx
    │   ├── Education.tsx
    │   ├── Hero.tsx
    │   ├── Navbar.tsx
    │   ├── Projects.tsx
    │   ├── Skills.tsx
    │   └── WorkExperience.tsx
    │
    ├── styles/             # CSS stylesheets
    │   ├── globals.css     # Global styles + Tailwind directives
    │   ├── AllProjects.css
    │   ├── Certifications.css
    │   ├── Contact.css
    │   ├── Education.css
    │   ├── Hero.css
    │   ├── Navbar.css
    │   ├── Projects.css
    │   ├── Skills.css
    │   └── WorkExperience.css
    │
    └── assets/             # Image assets
        ├── formal-pic.jpg
        ├── react.svg
        └── uni-pic.jpg
```

## Key Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **File-based routing** via `src/app/` directory
- **Component-based architecture** in `src/components/`
- **CSS Modules** alongside Tailwind for component-specific styles

## Removed Files

The following old Vite/React files have been removed:
- `vite.config.js` - Replaced by `next.config.js`
- `index.html` - Not needed (Next.js handles HTML)
- `eslint.config.js` - Replaced by `.eslintrc.json`
- `src/App.jsx` - Replaced by `src/app/layout.tsx` and `src/app/page.tsx`
- `src/main.jsx` - Not needed (Next.js handles entry)
- `src/index.css` - Replaced by `src/styles/globals.css`
- `src/pages/` - Replaced by `src/app/` (Next.js App Router)
- All `.jsx` component files - Converted to `.tsx`
- `dist/` - Old Vite build output (Next.js uses `.next/` and `out/`)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

