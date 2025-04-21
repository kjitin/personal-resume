/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Configure image domains if you're using next/image with external images
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true,
  },

  // Ensure static assets are properly handled
  // This is the default, but explicitly setting it for clarity
  output: "standalone",

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
