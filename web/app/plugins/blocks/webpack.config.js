const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  stats: {
    hash: false,
    version: false,
    timings: false,
    children: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    chunks: false,
    modules: false,
    reasons: false,
    source: false,
    publicPath: false,
  },
  context: path.resolve(__dirname, 'resources'),
  entry: require('./resources/blocks.json'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'blocks/[name].js',
    chunkFilename: 'blocks/[id].js',
  },
  externals: {
    '@wordpress/blocks': 'wp.blocks',
    '@wordpress/editor': 'wp.editor',
    '@wordpress/i18n': 'wp.i18n',
  },
  resolve: {
    alias: {
      '@blocks': path.resolve(__dirname, 'resources/blocks'),
      '@components': path.resolve(__dirname, 'resources/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          ecma: 8,
          compress: {
            warnings: true,
            drop_console: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: false }),
  ],
};
