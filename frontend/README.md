# Portfolio - Next.js with TypeScript

This is a [Next.js](https://nextjs.org/) project bootstrapped with TypeScript and Tailwind CSS, converted from a Vite React project.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components (converted to TypeScript)
- `src/styles/` - CSS stylesheets
- `src/assets/` - Image assets
- `public/` - Static files (resume, favicon, etc.)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

For static export (GitHub Pages):

```bash
npm run build
```

The `out` directory will contain the static files ready for deployment.

## Styling

This project uses:
- **Tailwind CSS** - Utility-first CSS framework (configured and ready to use)
- **Custom CSS** - Component-specific styles in `src/styles/` directory

You can use Tailwind utility classes alongside the existing CSS files. Both work together seamlessly.

## Migration Notes

This project was migrated from Vite + React to Next.js + TypeScript:
- All components converted from JSX to TSX
- React Router replaced with Next.js file-based routing
- HashRouter replaced with Next.js Link component
- Image optimization using Next.js Image component
- TypeScript types added throughout
- Tailwind CSS integrated for utility-first styling
