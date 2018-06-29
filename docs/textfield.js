import {uiTextfield} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiTextfield },
    data() {
        return {
            text: ''
        };
    },
    template : `<div>
        <uiTextfield type='underlined' v-model='text' label='Name' />
    </div>`
});
