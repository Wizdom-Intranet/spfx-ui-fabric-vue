import {uiIconAdd, uiIconFerry, uiIconSnooze, uiIconTrainSolid} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiIconAdd, uiIconFerry, uiIconSnooze, uiIconTrainSolid },
    template : `<div>
        Add: <uiIconAdd />
        <br>
        Ferry: <uiIconFerry />
        <br>
        Snooze: <uiIconSnooze />
        <br />
        Train: <uiIconTrainSolid />
    </div>`
});
