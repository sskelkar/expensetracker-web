const path = require('path');
const Clean = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
let SOURCE = path.resolve(__dirname, 'src');
let DEST = path.resolve(__dirname, 'build');

module.exports = {
    entry: SOURCE + "/index.js",
    devServer: {
        contentBase: DEST,
        publicPath: '/js/',
        open: true,
        port: 3333
    },
    plugins: [
        //new Clean([DEST]),  TODO issue: build gets deleted before webpack-dev-server
        new Copy([{from: 'index.html', to: DEST}])
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"]
        }]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, DEST + '/js')
    }
}