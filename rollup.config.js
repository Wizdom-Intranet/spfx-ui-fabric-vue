import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import bable from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output:{
        format:"es",
        file : "./dist/bundle.esm.js",
    },
    plugins: [
        vue({ 
            useSpfxThemeLoading : true
        }),
        resolve({
            only : [
                "office-ui-fabric-vue", 
                "office-ui-fabric-js",
                "vue-popperjs",
                "popper.js"
            ]
        }),
        commonJS({}),
        bable({
            "presets": [["@babel/preset-env"]],
            "plugins": [
                "@babel/plugin-transform-spread",
                "@babel/plugin-transform-object-assign",
                "babel-plugin-array-includes"
            ]
        }),
        buble({
            objectAssign: 'Object.assign'
        })
    ],
};
