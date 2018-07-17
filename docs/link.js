import {uiLink} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiLink },
    template : `<div>
        <ui-link href='#' title='More info about Example Link'>Example Link</ui-link>
    </div>`
});
