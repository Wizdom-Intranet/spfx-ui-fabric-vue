import {uiDynamicIcon} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiDynamicIcon },
    template : `<div>
        Add: <uiDynamicIcon name="Add" />
        <br>
        Ferry: <uiDynamicIcon name="Ferry" />
        <br>
        Snooze: <uiDynamicIcon name="Snooze" />
        <br />
        Train: <uiDynamicIcon name="TrainSolid" />
    </div>`
});
