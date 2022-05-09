/* eslint-disable prettier/prettier */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 选择调试开发环境
  mode: "development",
  devtool: "source-map",
  entry: "./debug/index.js",
  // 在debug目录下会生成一个dist目录，打包完成后会生成一个main.js文件
  output: {
    path: path.join(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader", "style-loader"]
        // enfore:'pre'
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};