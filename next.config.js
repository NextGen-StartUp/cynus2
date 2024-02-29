
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: '/:path((Ausschreibung|ausschreibung))',
        destination: '/Ausschreibung',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

