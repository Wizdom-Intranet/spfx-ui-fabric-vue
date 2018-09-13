import {uiButton, uiPanel} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiButton,uiPanel },
    data() {
        return {
          defaultPanelVisiblity: false
        };
    },

    template : `<div>
        <uiButton @click='defaultPanelVisiblity=true'>Open Panel</uiButton>
        <uiPanel title='Panel' v-model='defaultPanelVisiblity'>
            <span class='ms-font-m'>Content goes here</span>
            <div v-for="i in 80">{{i}}</div>
        </uiPanel>
    </div>`
});
