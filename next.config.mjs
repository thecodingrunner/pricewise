/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['m.media-amazon.com']
    }
}

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


