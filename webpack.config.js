var path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bandle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    }
};