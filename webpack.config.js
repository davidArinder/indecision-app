const path = require('path') // node tool to concat path

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), // my correct path for app
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map', // links errors, etc to the file I wrote rather than bundle.js in dev tools
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}

