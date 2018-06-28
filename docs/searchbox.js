import {uiSearchbox} from "../dist/bundle.esm";
import Vue from "vue";
import { loadStyles } from '@microsoft/load-themed-styles';

loadStyles(".custom-class{ border: dashed 2px magenta !important");

new Vue({
    el: '#app',
    components : { uiSearchbox },
    data() {
        return {
            defaultSearch : "",
            collapsedSearch : "",
            commandBarSearch : ""
        };
    },
    template : `<div>
        <uiSearchbox placeholder='Search' v-model='defaultSearch'/>
        <br>
        <uiSearchbox type='commandBar' collapsed v-model='collapsedSearch'/>
        <br>
        <uiSearchbox type='commandBar' placeholder='Search' v-model='commandBarSearch'/>
    </div>`
});
