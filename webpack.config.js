module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/index.js', './src/index.html']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.sass$/, loader: "style!css!sass?indentedSyntax" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.woff2$/, loader: "file-loader" },
            { test: /\.woff$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" }
        ]
    },
    resolve: {
        alias: {
            bootstrap: __dirname + '/node_modules/bootstrap/dist/css/bootstrap.css'
        }
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    debug: true // shows also which files run through traceur, good to learn and validate the `exclude`
};