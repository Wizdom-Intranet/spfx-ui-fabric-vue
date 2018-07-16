import {uiIconAdd, uiIconFerry, uiIconSnooze} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiIconAdd, uiIconFerry, uiIconSnooze },
    template : `<div>
        Add: <uiIconAdd />
        <br>
        Ferry: <uiIconFerry />
        <br>
        Snooze: <uiIconSnooze />
    </div>`
});
