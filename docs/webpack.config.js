const path = require('path');

module.exports = {
    entry: {
        button:'./docs/button.js'
    },
    output: {
        filename: './[name].js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
};