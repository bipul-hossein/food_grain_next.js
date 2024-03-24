/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "localhost", "picsum.photos"], // <== Domain name
  },
};

export default nextConfig;
