const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');

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
  context: path.resolve(__dirname, 'src'),
  entry: {
    'cta': './blocks/cta.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'blocks/[name].js',
    chunkFilename: 'blocks/[id].js',
  },
  externals: {
    '@wordpress/blocks': 'wp.blocks',
    '@wordpress/editor': 'wp.editor',
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
  plugins: [
    new CleanWebpackPlugin({ verbose: false }),
  ],
};
