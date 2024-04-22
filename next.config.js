/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.ibb.co",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/cart",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
