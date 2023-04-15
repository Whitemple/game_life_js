const path = require("path");
// Указываем явно мод. То есть если он не подтянулся автоматически, то мы прописываем ему мод разработки
const mode = process.env.NODE_ENV || "development";
// Проверяем, если переменная мод указана пролдакшн. то тогда она сущесвует
const devMode = mode === "development";
// Мы проверяем если мод разработки, то тогда будет идти для веба. Если если нет, то собираем учитывая настройки браузерс лист и будем учитывать для каких браузеров собират ьи какие автоперфиксы используем
const target = devMode ? "web" : "browserslist";
// Если режим разработки, то добавляем соур мапы, если режим продакшн. то нет тогда false. В webpack 5 nсавим false, другие занчения, типа undefined приводят к ошибке
// const devtool = devMode ? 'source-map' : undefined;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => ({
  //   mode,
  target,

  devtool: env.production ? "eval-source-map" : "source-map",
  mode: env.production ? "production" : "development",
  entry: {
    // babel: "@babel/polyfill/noConflict",
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash].js",
    clean: true,
    assetModuleFilename: "asset/[hash][ext]",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "index-[hash].css",
    }),
  ],
  module: {
    rules: [
      // HTML-loader
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // CSS-loader, postcss-loader, scss-loader
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      //   Babel-loader
    //   {
    //     test: /\.m?js$/i,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: "babel-loader",
    //       options: {
    //         presets: [["@babel/preset-env", { targets: "defaults" }]],
    //       },
    //     },
    //   },
      // Image rules
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: "asset/resource",
      },
      // Fonts rules
      {
        test: /\.woff2?$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
});