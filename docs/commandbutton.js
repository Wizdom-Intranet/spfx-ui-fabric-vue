import {uiCommandButton, uiContextualMenu, uiContextualMenuItem, uiIconAdd} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiCommandButton, uiContextualMenu, uiContextualMenuItem, uiIconAdd },
    template : `<div>
        <ui-command-button>Command</ui-command-button>

        <br>

        <ui-command-button icon='CircleRing'>
            <div slot="icon"><uiIconAdd /></div>
            Command
        </ui-command-button>

        <br>

        <ui-command-button type='noLabel'>
            <div slot="icon"><uiIconAdd /></div>
        </ui-command-button>

        <br>

        <ui-command-button disabled>
            <div slot="icon"><uiIconAdd /></div>
            Command
        </ui-command-button>

        <br>

        <ui-contextual-menu>
            <ui-command-button type='dropdown'>
                <div slot="icon"><uiIconAdd /></div>
                New
            </ui-command-button>
            <div slot='list'>
                <ui-contextual-menu-item name='Animals' />
                <ui-contextual-menu-item name='Books' />
                <ui-contextual-menu-item name='Education' />
                <ui-contextual-menu-item name='Music' />
                <ui-contextual-menu-item name='Sports' disabled />
            </div>
        </ui-contextual-menu>
    </div>`
});
