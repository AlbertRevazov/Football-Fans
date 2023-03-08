module.exports = {
  async redirects() {
    return [
      {
        source: "/sign",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
