const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL;

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${rootUrl}/api/:slug*`,
      },
    ].filter(Boolean);
  },
};
