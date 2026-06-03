// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ubicomp2026-quantum-tutorial',
  assetPrefix: '/ubicomp2026-quantum-tutorial',
};

export default nextConfig;