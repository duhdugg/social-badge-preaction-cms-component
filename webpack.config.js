let path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    SocialBadgeComponent: './src/SocialBadgeComponent.jsx',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: {
      root: '[name]',
      amd: '[name]',
      commonjs: '[name]',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|\.test\.js)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    axios: {
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
      root: 'axios',
    },
    '@preaction/bootstrap-clips': {
      commonjs: '@preaction/bootstrap-clips',
      commonjs2: '@preaction/bootstrap-clips',
      amd: '@preaction/bootstrap-clips',
      root: '@preaction/bootstrap-clips',
    },
    '@preaction/inputs': {
      commonjs: '@preaction/inputs',
      commonjs2: '@preaction/inputs',
      amd: '@preaction/inputs',
      root: '@preaction/inputs',
    },
    '@preaction/validation': {
      commonjs: '@preaction/validation',
      commonjs2: '@preaction/validation',
      amd: '@preaction/validation',
      root: '@preaction/validation',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
}
