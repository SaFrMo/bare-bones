var webpack = require('webpack')

var config = {
    entry: './src/main',
    output: {
        path: './static',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    babel: {
        presets: ['es2015']
    },
    plugins: [

    ]
}

if (process.env.NODE_ENV == 'production') {
    config.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}

module.exports = config
