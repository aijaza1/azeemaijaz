/** @type {import('next').NextConfig} */
const nextConfig = {
    target: "static", 
    images: {
      unoptimized: true,
    },
    experimental: {
      appDir: true,
    },
  };
  
  module.exports = nextConfig;