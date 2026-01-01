/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  // Enable static export if needed
  // output: 'export',
};

module.exports = nextConfig;
