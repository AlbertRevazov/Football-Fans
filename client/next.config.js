// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/sign",
//         destination: "/",
//         permanent: true,
//       },
//     ];
//   },
// };
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
