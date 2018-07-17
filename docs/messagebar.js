import {uiMessagebar, uiLink, uiIconInfo, uiIconCompleted, uiIconBlocked} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiMessagebar, uiLink, uiIconInfo, uiIconCompleted, uiIconBlocked },
    template : `<div>
        <uiMessagebar icon='Info'>
            <div slot="icon"><uiIconInfo /></div>
            Info Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
            <br />
            <uiLink>Hyperlink string</uiLink>
        </uiMessagebar>

        <uiMessagebar icon='Completed' type='success'>
            <div slot="icon"><uiIconCompleted /></div>
            Success Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
            <br />
        </uiMessagebar>

        <uiMessagebar icon='Blocked' type='blocked'>
            <div slot="icon"><uiIconBlocked /></div>
            Blocked Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.
            <br /> 
            <uiLink>Hyperlink string</uiLink>
        </uiMessagebar>
    </div>`
});
