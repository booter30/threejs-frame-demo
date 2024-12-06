/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for loading Three.js from CDN
  experimental: {
    urlImports: ['https://cdnjs.cloudflare.com']
  }
};

module.exports = nextConfig;