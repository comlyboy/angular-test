// @ts-check
"use strict";
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
/**
 * @param {String} chunkName
 */
function canMinimize(chunkName) {
  const chunks = ["serverless-min"];
  return chunks.includes(chunkName);
}

const config = merge(common, {
  mode: "production",
  entry: {
    server: path.resolve(__dirname, "./src/server.ts"),
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        // include: /\-min\.js$/,
        chunkFilter: chunk => {
          // Exclude uglification for the `vendor` chunk
          return canMinimize(chunk.name);
        },
        sourceMap: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          // extractComments: "all",
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        },
      }),
    ],
  },
});

module.exports = config;
