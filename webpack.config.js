const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    background: './src/background/index.ts',
    popup: './src/background/index.ts',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.tsx' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public' },
    ]),
  ],
};
