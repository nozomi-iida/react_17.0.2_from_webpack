const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  output: {
    path: path.join(__dirname, "../build"),
    filename: "bundle.js",
    assetModuleFilename: "media/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { plugins: ["react-refresh/babel"] },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
    new RemoveEmptyScriptsPlugin(),
  ],
};
