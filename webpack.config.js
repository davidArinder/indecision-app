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
    }
}

