import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === 'production' ? '/boring-ping-pong-balls' : '',
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/boring-ping-pong-balls/' : '',
};

export default nextConfig;
