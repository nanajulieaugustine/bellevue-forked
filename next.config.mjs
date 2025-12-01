/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "static.wixstatic.com",
        pathname: "/**",
      },
       {
        protocol: "http",
        hostname: "bellevueteatret.dk",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
