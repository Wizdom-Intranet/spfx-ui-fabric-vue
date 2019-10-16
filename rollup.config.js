import bable from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

var configs = [
    {
        output:[
            {
                format:"es",
                file : "./dist/bundle.esm.js",
            },
        ]
    },
    {
        output:[
            {
                format:"esm",
                dir:"dist",
            }
        ],
        preserveModules: true,
    }    
]

export default configs.map(config=>({
    input: ['./index.js'],
    ...config,
    plugins: [
        commonjs(),
        resolve({
            only : [
                "office-ui-fabric-vue", 
                "office-ui-fabric-js",
                "vue-popperjs",
                "popper.js"
            ]
        }),
        vue({ 
            styleInjector:"function(context){ return function(scopeId, data){__vue_script__.loadStyles && __vue_script__.loadStyles(data.source)}}",
            template:{
                isProduction:true,
            }
        }),
        bable({
            "presets": [["@babel/preset-env"]],
            "plugins": [
                "@babel/plugin-transform-spread",
                "@babel/plugin-transform-object-assign",
                "babel-plugin-array-includes"
            ]
        }),
    ],
}));
