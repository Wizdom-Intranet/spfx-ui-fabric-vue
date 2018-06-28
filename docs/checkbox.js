import {uiCheckbox} from "../dist/bundle.esm";
import Vue from "vue";
import { loadStyles } from '@microsoft/load-themed-styles';

new Vue({
    el: '#app',
    components : { uiCheckbox },
    data(){
        return {
            checked : false
        }
    },
    template : `<div>
        <uiCheckbox v-model='checked'>Checkbox</uiCheckbox>
        <uiCheckbox v-model='checked' disabled>Checkbox Disabled</uiCheckbox>
    </div>`
});
