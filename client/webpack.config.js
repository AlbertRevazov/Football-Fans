module.exports = {
  devtool: "source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "./build/client.js",
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },

  module: {
    loaders: [{ test: /\.tsx?$/, loader: "ts-loader" }],
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },

      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};
