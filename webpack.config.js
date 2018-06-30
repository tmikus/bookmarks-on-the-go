const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    background: './src/background/index.ts',
    popup: './src/popup/index.tsx',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
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
      { from: 'node_modules/metro4/build', to: 'lib/metro4' },
      { from: 'node_modules/jquery/dist', to: 'lib/jquery' },
    ]),
  ],
};
