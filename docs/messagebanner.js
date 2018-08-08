import {uiMessageBanner, uiButton, uiTextfield} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiMessageBanner, uiButton, uiTextfield },
    data(){
        return{show:true}
    },
    template : `<div>
    <uiButton @click="show=true">Show</uiButton>
    <uiButton @click="show=false">Hide</uiButton>
    state:{{show}}<br />

        <ui-message-banner v-model="show">
            You have reached your total storage on OneDrive. Please upgrade your storage plan if you need more storage.
            <ui-button type='primary' slot='actions'>Get More Storage</ui-button>
        </ui-message-banner>
    </div>`
});
