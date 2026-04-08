/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
// output: 'export', // Revert for full SSR (animations/JS work perfectly)
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
