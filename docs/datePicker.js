import {uiDatePicker} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiDatePicker },
    data() {
        return {
            dato : new Date(),
            noDate : null
        };
    },
    template : `<div>
        {{dato}}<br/>
        <uiDatePicker v-model="dato" />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div style="text-align:right"><uiDatePicker locale="da-dk" v-model="dato" style="width:200px;display:inline-block" /></div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div><uiDatePicker  v-model="dato" style="width:200px;display:inline-block" /></div>
        {{dato.toString()}}<br/>
    </div>`
});
