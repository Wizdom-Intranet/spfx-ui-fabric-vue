import {uiTimePicker} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiTimePicker },
    data() {
        return {
            dato : new Date(),
            noDate : null
        };
    },
    template : `<div>
        <uiTimePicker v-model="dato" />
        <uiTimePicker v-model="dato" style="width:400px" />
        <uiTimePicker v-model="noDate" style="width:100px" />
        {{dato}}<br/>
        {{noDate}}
    </div>`
});
