const path = require('path');

module.exports = {
    entry: [
        './src/js/ui.js',
        'core-js/modules/es.promise',
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    }
};
