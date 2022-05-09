const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  mode: "development",
  module: {
    rules: [{ test: /\.css$/, use: ["css-loader", "style-loader"] }],
  },
};
