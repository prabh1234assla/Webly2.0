/** @type {import('next').NextConfig} */

import webpack from 'webpack'

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl/,
      type: "asset/source",
    }),
    config.plugins.push(
      new webpack.ProvidePlugin({
       THREE: 'three',
      })
     )
    return config
  },
}

export default nextConfig