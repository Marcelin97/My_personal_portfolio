const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  entry: {
    home: [
      "/assets/scss/home.scss",
      "/assets/js/index.js",
      "/assets/js/home.js",
    ],
    realisation: [
      "/assets/scss/realisation.scss",
      "/assets/js/index.js",
      "/assets/js/realisation.js",
    ],
    'curriculum-vitae': [
      "/assets/scss/curriculum-vitae.scss",
      "/assets/js/index.js",
      "/assets/js/curriculum-vitae.js",
    ],
    contact: [
      "/assets/scss/contact.scss",
      "/assets/js/index.js",
      "/assets/js/contact.js",
    ],
    accessibilite: [
      "/assets/scss/accessibilite.scss",
      "/assets/js/index.js",
      "/assets/js/accessibilite.js",
    ],
    questions: [
      "/assets/scss/questions.scss",
      "/assets/js/index.js",
      "/assets/js/questions.js",
    ],
    news: [
      "/assets/scss/news.scss",
      "/assets/js/index.js",
      "/assets/js/news.js",
    ],
  },
  module: {
    rules: [
      {
        test: /.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "assets/dist/js/"),
  },
  devServer: {
    host: "127.0.0.1",
    port: 8080,
    writeToDisk: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
    }),
  ],
};
