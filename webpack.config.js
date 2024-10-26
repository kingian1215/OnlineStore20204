const path = require('path');
console.log('輸出路徑', path.resolve(__dirname, './dist'));
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 入口設定
  entry: './src/index.js',

  // 輸出設定
  output: {
    filename: 'bundle.[contenthash].js', // 加入 contenthash 便於快取控制
    path: path.resolve(__dirname, './dist'),
    // path:'/JS_sample/JsProject2024/online-store',
    publicPath: '/', // 用於支援 SPA 路由
  },

  // 模式
  mode: 'development', // 可改為 'production' 以進行優化

  // 開發伺服器設定
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true, // 支援 SPA
    open: true, // 自動打開瀏覽器
  },

  // 模組與載入器設定
  module: {
    rules: [
      // 編譯 JavaScript (支援 ES6+ 語法)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // 處理 CSS
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // 處理圖片檔案
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      // 處理字體檔案
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // 插件設定
  plugins: [
    new CleanWebpackPlugin(), // 清理輸出目錄
    new HtmlWebpackPlugin({
      template: './src/index.html', // 來源 HTML 檔案
      filename: 'index.html', // 輸出 HTML 檔案
      inject: 'body', // JavaScript 放在 body 內
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // 為 CSS 檔案加上 contenthash
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  ],

  // 優化設定
  optimization: {
    splitChunks: {
      chunks: 'all', // 將共用模組提取至單獨的檔案
    },
  },

  resolve: {
    alias: {
      "zlib": "browserify-zlib",
      "querystring": "querystring-es3",
      "path": "path-browserify",
      "crypto": "crypto-browserify",
      "stream": "stream-browserify",
      "http": "stream-http",
      // 若確定不需要 "fs" 和 "net"，無需包含
    },
    
    fallback: {
      "assert": require.resolve("assert/"),
      "vm": require.resolve("vm-browserify"),
      "async_hooks": false  // async_hooks 在瀏覽器環境中不支援，可設為 false
    }
  },

};

module.exports = function override(config) {
  config.resolve.alias = {
      ...config.resolve.alias,
      path: require.resolve("path-browserify"),
      // add other fallbacks as needed
  };
  return config;
};