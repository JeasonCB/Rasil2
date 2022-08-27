/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hyperui.dev', 'hyperui.dev//photos/man-1.jpeg']
  }
}

module.exports = nextConfig
