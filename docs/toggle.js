import { uiToggle } from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiToggle },
    data(){
        return{
            toggle1:false,
            toggle2:false,
            toggle3:false
        }
    },
    template : `<div>
    <ui-toggle
        v-model='toggle1'
        on-label='On'
        off-label='Off'
        description='Default' />

    <ui-toggle
    disabled
        v-model='toggle2'
        on-label='On'
        off-label='Off'
        description='Disabled' />

    <ui-toggle
        type='textLeft'
        v-model='toggle3'
        on-label='On'
        off-label='Off'
        description='Text at the left side' />
    </div>`
});
