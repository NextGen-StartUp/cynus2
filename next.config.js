// next.config.js
const withMiddleware = require('next-middleware').middleware;

module.exports = withMiddleware({
  middleware: [require.resolve('./middleware/lowercasePathMiddleware')],
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
