const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const DefinePlugin = new Webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production"),
  },
});

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./index.html",
});

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    chunkFilename: "[name].bundle.js",
    filename: "[name].[hash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "../src/componets"),
      "@helper": path.resolve(__dirname, "../src/helper"),
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@sass": path.resolve(__dirname, "../src/assets/sass"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", {}]],
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader?limit=10000&name=img/[name].[ext]",
      },
    ],
  },
  plugins: [DefinePlugin, HTMLWebpackPluginConfig],
};
