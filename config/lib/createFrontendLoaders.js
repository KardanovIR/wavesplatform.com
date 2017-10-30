const createUrlLoaders = require('./createUrlLoaders');

module.exports = includedDirectories => [
    ...createUrlLoaders({ emitFile: true }),
    {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: includedDirectories,
    },
    {
        test: /\.json$/,
        loader: 'json-loader',
    },
    {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ],
        include: /node_modules/
    }
];
