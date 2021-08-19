module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${process.env.NEXT_PUBLIC_ROOT_URL}/api/:slug*`,
      },
    ].filter(Boolean);
  },
};
