/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  redirects() {
    return [
      {
        source: "/post",
        destination: "/",
        permanent: true,
      },
      {
        source: "/preview/:username*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
