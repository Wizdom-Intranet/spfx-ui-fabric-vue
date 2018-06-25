import {uiButton, uiOverlay} from "../dist/bundle.esm";
import Vue from "vue";
import { loadStyles } from '@microsoft/load-themed-styles';

loadStyles(".custom-class{ border: dashed 2px magenta !important");

new Vue({
    el: '#app',
    components : { uiButton, uiOverlay },
    data() {
        return {
          overlayVisibility: false
        };
    },
    template : `<div>
        <uiButton @click="overlayVisibility=true">Show</uiButton>
        <uiOverlay v-model='overlayVisibility' type="dark" />
    </div>`
});
