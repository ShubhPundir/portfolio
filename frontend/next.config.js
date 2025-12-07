/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // For static export (GitHub Pages)
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
  // GitHub Pages configuration - matches repository name
  // Always use basePath for GitHub Pages deployment
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true, // Recommended for GitHub Pages
}

module.exports = nextConfig

