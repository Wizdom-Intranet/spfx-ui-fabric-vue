import {uiButton} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiButton },
    template : "<h1><uiButton></uiButton></h1>",
});
