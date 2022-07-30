/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['blog.wildix.com', 'https://blog.wildix.com'],
  },
}

// module.exports = nextConfig
