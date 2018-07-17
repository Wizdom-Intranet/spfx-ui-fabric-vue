import {uiSearchBox, uiCommandBar, uiCommandButton, uiContextualMenu, uiContextualMenuItem, uiIconAdd} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiSearchBox, uiCommandBar, uiCommandButton, uiContextualMenu, uiContextualMenuItem, uiIconAdd },
    template : `<div>
        <ui-command-bar>
            <template slot='main'>
                <ui-search-box type='commandBar' placeholder='Search' />
                <ui-command-button>
                    <div slot="icon"><uiIconAdd /></div>
                    Command 1
                </ui-command-button>
                <ui-contextual-menu>
                    <ui-command-button>
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
                <ui-command-button >
                    <div slot="icon"><uiIconAdd /></div>
                    Command 2
                </ui-command-button>
                <ui-command-button >
                    <div slot="icon"><uiIconAdd /></div>
                    Command 3
                </ui-command-button>
                <ui-command-button >
                    <div slot="icon"><uiIconAdd /></div>
                    Command 4
                </ui-command-button>
            </template>
            <template slot='side'>
                <ui-command-button type="noLabel">
                    <div slot="icon"><uiIconAdd /></div>
                </ui-command-button>
            </template>
        </ui-command-bar>
    </div>`
});
