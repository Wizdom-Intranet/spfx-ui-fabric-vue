import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

export default
[
    {
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
                ]
            }),
            commonJS({}),
            buble()
        ],
    },
    {
        input: 'src/index.js',
        output:{
            format:"umd",
            name:"ui",
            file : "./dist/bundle.js",
        },
        plugins: [
            vue({ 
                useSpfxThemeLoading : true
            }),
            resolve({
                // only : [
                //     "office-ui-fabric-vue", 
                //     "office-ui-fabric-js",
                // ]
            }),
            commonJS({}),
            buble()
        ],
    }
]
;