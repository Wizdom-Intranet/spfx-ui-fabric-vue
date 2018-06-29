import {uiSpinner} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiSpinner },
    template : `<div>
        <uiSpinner label='Loading...' />
    </div>`
});
