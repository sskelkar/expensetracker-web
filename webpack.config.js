const path = require('path');
const Clean = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const webpack = require('webpack');
let SOURCE = path.resolve(__dirname, 'src');
let DEST = path.resolve(__dirname, 'build');

module.exports = {
    entry: SOURCE + "/index.js",
    devServer: {
        contentBase: DEST,
        publicPath: '/js/',
        open: true
    },
    plugins: [
        //new Clean([DEST]),  TODO issue: build gets deleted before webpack-dev-server
        new Copy([{from: 'index.html', to: DEST}]),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: SOURCE,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "es2015"]
                    }
                }
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, DEST + '/js')
    }
}