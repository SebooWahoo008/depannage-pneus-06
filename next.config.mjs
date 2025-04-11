/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS && process.env.NODE_ENV === 'production' ? '/single-page-pneus15' : '',
  assetPrefix: process.env.GITHUB_ACTIONS && process.env.NODE_ENV === 'production' ? '/single-page-pneus15/' : '',
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      }
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'react-icons'],
    webpackBuildWorker: true,
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack'],
      },
    },
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      // Production optimizations
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          maxSize: 60000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                if (!module.context) return 'vendor';
                
                const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                if (!match || !match[1]) return 'vendor';
                
                return `vendor.${match[1].replace('@', '')}`;
              },
              priority: 10,
              reuseExistingChunk: true,
            },
            common: {
              minChunks: 2,
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
      };

      // Compression des assets
      config.optimization.minimize = true;
    }

    return config;
  },
  // Optimisation du cache
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig; 