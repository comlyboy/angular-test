//@ts-check
"use strict";
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    libraryTarget: "commonjs",
    filename: "[name]-dev.js",
    path: path.resolve(__dirname, "./dist-dev"),
  },
  devtool: "source-map",
});
