// eslint-disable-next-line no-undef
const redirects = require('./config/redirects');
// eslint-disable-next-line no-undef
module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: '/project/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
