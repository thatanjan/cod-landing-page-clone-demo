/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.callofduty.com',
        port: '',
        pathname: '/content/dam/atvi/callofduty/**',
      },
      {
        protocol: 'https',
        hostname: 'imgs.callofduty.com',
        port: '',
        pathname: '/content/dam/atvi/global/ratings/esrb/**',
      },
    ],
  },
}

export default nextConfig
