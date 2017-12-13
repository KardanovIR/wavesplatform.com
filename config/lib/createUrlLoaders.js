const path = require('path');

module.exports = ({ emitFile = true, limit = 8192 }) => [
  {
    test: /\.svg$/,
    use: {
      loader: 'svg-url-loader',
      options: {
        publicPath: '/static/',
        name: path.join('images', '[name]_[hash:5].[ext]'),
        limit,
        emitFile,
      },
    },
  },
  {
    test: /\.mp4$/,
    use: {
      loader: 'file-loader',
      options: {
        publicPath: '/static/',
        name: path.join('images', '[name]_[hash:5].[ext]'),
        emitFile,
      },
    },
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: {
      loader: 'url-loader',
      options: {
        publicPath: '/static/',
        name: path.join('images', '[name]_[hash:5].[ext]'),
        limit,
        emitFile,
      },
    },
  },
];
