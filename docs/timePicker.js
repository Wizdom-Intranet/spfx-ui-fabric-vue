import {uiTimePicker} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiTimePicker },
    data() {
        return {
            dato : new Date()
        };
    },
    template : `<div>
        <uiTimePicker v-model="dato" />
        <uiTimePicker v-model="dato" style="width:400px" />
        {{dato}}
    </div>`
});
