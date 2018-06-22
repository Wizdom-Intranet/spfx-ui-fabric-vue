import {uiButton} from "../dist/bundle.esm";
import Vue from "vue";
import { loadStyles } from '@microsoft/load-themed-styles';

loadStyles(".custom-class{ border: dashed 2px magenta !important");

new Vue({
    el: '#app',
    components : { uiButton },
    template : `<div>
        <uiButton>Default</uiButton>
        <uiButton type="primary">Primary</uiButton>
        <uiButton class="custom-class">Custom class</uiButton>
    </div>`
});
