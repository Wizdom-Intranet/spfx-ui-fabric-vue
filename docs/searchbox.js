import {uiSearchBox} from "../dist/bundle.esm";
import Vue from "vue";
import { loadStyles } from '@microsoft/load-themed-styles';

loadStyles(".custom-class{ border: dashed 2px magenta !important");

new Vue({
    el: '#app',
    components : { uiSearchBox },
    data() {
        return {
            defaultSearch : "",
            collapsedSearch : "",
            commandBarSearch : ""
        };
    },
    template : `<div>
        <uiSearchBox placeholder='Search' v-model='defaultSearch'/>
        <br>
        <uiSearchBox type='commandBar' collapsed v-model='collapsedSearch'/>
        <br>
        <uiSearchBox type='commandBar' placeholder='Search' v-model='commandBarSearch'/>
    </div>`
});
