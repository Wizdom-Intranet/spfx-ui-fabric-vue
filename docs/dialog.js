import {uiButton, uiDialog} from "../dist/bundle.esm";
import Vue from "vue";
import { loadStyles } from '@microsoft/load-themed-styles';

loadStyles(".custom-class{ border: dashed 2px magenta !important");

new Vue({
    el: '#app',
    components : { uiButton, uiDialog },
    data() {
        return {
          showSimple : false,
          showLargeHeader : false,
          showBlocking : false,
          showClosing : false,
          showDark : false
        };
    },
    template : `<div>
    <uiButton @click="showSimple=true">Show simple</uiButton>
    <uiDialog v-model='showSimple' title='simple' />

    <uiButton @click="showLargeHeader=true">Show large header</uiButton>
    <uiDialog v-model='showLargeHeader' title='large header' type='lgHeader' />

    <uiButton @click="showBlocking=true">Show blocking</uiButton>
    <uiDialog v-model='showBlocking' title='blocking' type='blocking' />
        
    <uiButton @click="showClosing=true">Show closing</uiButton>
    <uiDialog v-model='showClosing' title='closing' type='close' />
        
    <uiButton @click="showDark=true">Show with dark overlay</uiButton>
    <uiDialog v-model='showDark' title='dark' :useDarkOverlay='true' />
    </div>`
});
