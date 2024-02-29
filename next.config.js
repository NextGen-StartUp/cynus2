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
        source: '/:path((Ausschreibung|ausschreibung))',
        destination: '/Ausschreibung',
      },
    ];
  },
};

module.exports = nextConfig;