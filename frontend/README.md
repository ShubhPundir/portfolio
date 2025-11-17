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
- `npm run export` - Build static export (equivalent to `next build` with static export)
- `npm run deploy` - Build and deploy to GitHub Pages

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

## Deployment

This project is configured for **static export** to GitHub Pages. The build process uses `next build` with `output: 'export'` configured in `next.config.js`, which automatically generates a static site.

### Important Configuration Notes

✅ **Static Export Configuration:**
- The project uses `output: 'export'` in `next.config.js` (equivalent to `next build + next export`)
- All pages are client-side rendered (no server-side rendering)
- No API routes are used
- No dynamic rendering that requires Node.js
- Images are unoptimized (required for static export)

### Deploying to GitHub Pages

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Build and deploy**:
   ```bash
   npm run deploy
   ```

   This command will:
   - Build the static export (`next build` with `output: 'export'`)
   - Deploy the `out` directory to the `gh-pages` branch
   - Your site will be available at: `https://shubhpundir.github.io/portfolio/`

3. **Configure GitHub Pages** (one-time setup):
   - Go to your repository settings on GitHub
   - Navigate to **Pages** section
   - Set source to **Deploy from a branch**
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Click **Save**

### Manual Build

If you want to build without deploying:

```bash
npm run export
```

The static files will be generated in the `out` directory, which you can deploy manually if needed.

### Repository URL

- GitHub Repository: https://github.com/ShubhPundir/portfolio
- Live Site: https://shubhpundir.github.io/portfolio/
