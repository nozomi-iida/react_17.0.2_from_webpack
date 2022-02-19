const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env) => {
  return merge(common(env), {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
      client: {
        overlay: {
          warnings: false,
          errors: true,
        },
      },
    },
    plugins: [
      new ESLintPlugin({
        extensions: [".ts", ".tsx"],
        exclude: "node_modules",
      }),
    ],
  });
};
