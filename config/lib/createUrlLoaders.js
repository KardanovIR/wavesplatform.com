const path = require('path');

module.exports = ({ emitFile = true, limit = 8192 }) => ([
    {
        test: /\.(woff2?|ttf|eot)(\?.*$|$)/,
        use: {
            loader: 'url-loader',
            options: {
                name: path.join('fonts', '[name].[ext]'),
                limit,
                emitFile
            }
        }
    },
    {
        test: /\.svg$/,
        use: {
            loader: 'svg-url-loader',
            options: {
                name: path.join('images', '[name].[ext]'),
                limit,
                emitFile
            }
        }
    },
    {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
            loader: 'url-loader',
            options: {
                name: path.join('images', '[name].[ext]'),
                limit,
                emitFile,
            }
        }
    }
])