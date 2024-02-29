/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: "/(a|A)(u|U)(s|S)(s|S)(c|C)(h|H)(r|R)(e|E)(i|I)(b|B)(u|U)(n|N)(g|G)",
        destination: '/Ausschreibung'
      },
    ];
  },
};


module.exports = nextConfig
