import {uiPersona} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiPersona },
    template : `<div>
        <uiPersona size='sm' src='assets/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' />
    </div>`
});
