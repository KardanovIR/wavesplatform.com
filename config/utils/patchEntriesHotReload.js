module.exports = entries => {
    const newEntries = {};

    Object.keys(entries).forEach(key => {
        newEntries[key] = [
            'react-hot-loader/patch',
            entries[key],
            'webpack/hot/only-dev-server',
        ]
    });
    newEntries.devServerClient = 'webpack-dev-server/client?http://0.0.0.0:3000';

    return newEntries;
}