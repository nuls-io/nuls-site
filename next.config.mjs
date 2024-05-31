/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ]
  },
};

export default nextConfig;
