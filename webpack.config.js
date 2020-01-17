module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bandle.js'
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