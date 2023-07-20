/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
      unoptimized: true
  },
  experimental: {
      appDir: true,
    },
}

module.exports = nextConfig