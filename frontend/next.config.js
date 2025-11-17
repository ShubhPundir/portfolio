/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // For static export (GitHub Pages)
  images: {
    unoptimized: true, // Required for static export
  },
  // GitHub Pages configuration - matches repository name
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  trailingSlash: true, // Recommended for GitHub Pages
}

module.exports = nextConfig

