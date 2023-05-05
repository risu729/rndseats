// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  output: 'export',

  /**
   * @type {(config: import('webpack').Configuration) => import('webpack').Configuration}
   */
  webpack(config) {
    // import SVGs as strings
    config.module?.rules?.push({
      test: /\.svg$/i,
      type: 'asset/source',
    })
    return config
  },
}

export default nextConfig
