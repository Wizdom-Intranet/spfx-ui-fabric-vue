const path = require('path');

module.exports = {
    entry: {
        button:'./docs/button.js',
        overlay:'./docs/overlay.js',
        dialog:'./docs/dialog.js',
        callout:'./docs/callout.js',
        searchbox:'./docs/searchbox.js',
        contextualmenu:'./docs/contextualmenu.js',
        checkbox:'./docs/checkbox.js',
        choiceFieldGroup:'./docs/choiceFieldGroup.js',
        dropdown:'./docs/dropdown.js',
        panel:'./docs/panel.js',
        spinner:'./docs/spinner.js',
        label:'./docs/label.js',
        messagebar:'./docs/messagebar.js',
        textfield:'./docs/textfield.js',
        persona:'./docs/persona.js',
        icon:'./docs/icon.js',
        commandbar: './docs/commandbar.js',
        commandbutton: './docs/commandbutton.js',
    },
    output: {
        filename: './[name].js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    // mode: "production",
    module: {
        rules: [
            {
                sideEffects : false,
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {modules:"umd"}]
                        ]
                    }
                }
            }
        ]
    },
    externals: {
        // vue: 'Vue'
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
};