import {uiProgressIndicator} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiProgressIndicator },
    data(){
        return {value:0.8}
    },
    template : `<div>
        <uiProgressIndicator :percent='value' name='Example.jpg' description='Example.jpg' />
    </div>`
});
