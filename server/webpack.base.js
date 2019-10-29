//@ts-check
"use strict";
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const base = {};

const config = merge(base, {
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    // @ts-ignore
  },
  performance: {
    hints: false,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  target: "node",
  node: {
    __dirname: true,
    __filename: true,
  },
  externals: [nodeExternals()],
});

module.exports = config;
