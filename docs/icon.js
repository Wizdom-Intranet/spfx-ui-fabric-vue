import {uiIconAdd, uiIconFerry} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiIconAdd, uiIconFerry },
    template : `<div>
        Add:
        <uiIconAdd />
        Ferry:
        <uiIconFerry />
    </div>`
});
