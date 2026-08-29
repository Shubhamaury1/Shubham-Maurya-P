/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contactme",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
