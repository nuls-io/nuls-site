/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
  /* // cannot work with output:export
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ]
  }, */
};

export default nextConfig;
