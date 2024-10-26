const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    fs: false,
    path: require.resolve("path-browserify"),
    zlib: require.resolve("browserify-zlib"),
    http: require.resolve("stream-http"),
    stream: require.resolve("stream-browserify"),
    crypto: require.resolve("crypto-browserify"),
    querystring: require.resolve("querystring-es3"),
    net: false,
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};
