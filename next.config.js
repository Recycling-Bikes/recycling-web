/** @type {import('next').NextConfig} */
const  nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/v1/object/public/imagesbicis/**',
      },
      {
        protocol: 'https',
        hostname: 'trek.scene7.com',
      },
    ],
  },
}

module.exports = nextConfig