import {uiLabel} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiLabel },
    template : `<div>
        <uiLabel required>Name</uiLabel>
    </div>`
});
