import {uiMessagebar} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiMessagebar },
    template : `<div>
        <uiMessagebar icon='Completed' type='success'>
            Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
            <br />
        </uiMessagebar>
    </div>`
});
