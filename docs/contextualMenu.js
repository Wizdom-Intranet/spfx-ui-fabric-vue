import {uiButton, uiContextualMenu, uiContextualMenuItem} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiButton, uiContextualMenu, uiContextualMenuItem },
    data() {
        return {
          select: ['date', 'on']
        };
    },
    template : `<div>
        <uiContextualMenu>
            <uiButton type='primary'>Open Default</uiButton>
            <div slot='list'>
                <uiContextualMenuItem name='Animals' />
                <uiContextualMenuItem name='Books' />
                <uiContextualMenuItem name='Education' />
                <uiContextualMenuItem name='Music' />
                <uiContextualMenuItem name='Sports' disabled />
            </div>
        </uiContextualMenu>

        <uiContextualMenu type='multiselect' v-model='select'>
            <uiButton type='primary'>Open Multiselect</uiButton>
            <div slot='list'>
                <uiContextualMenuItem type='header' name='Sort by' />
                <uiContextualMenuItem name='Date' value='date' />
                <uiContextualMenuItem name='Sender' value='sender' />
                <uiContextualMenuItem type='divider' />
                <uiContextualMenuItem type='header' name='Order' />
                <uiContextualMenuItem name='Newest on top' value='new' />
                <uiContextualMenuItem name='Oldest on top' value='old' />
                <uiContextualMenuItem type='divider' />
                <uiContextualMenuItem type='header' name='conversations' />
                <uiContextualMenuItem name='On' value='on' />
                <uiContextualMenuItem name='Off' value='off' />
            </div>
        </uiContextualMenu>

        <uiContextualMenu>
            <uiButton type='primary'>Open Dividers and Submenu</uiButton>
            <div slot='list'>
                <uiContextualMenuItem name='Delete' />
                <uiContextualMenuItem name='Flag' />
                <uiContextualMenuItem type='divider' />
                <uiContextualMenuItem name='Important' />
                <uiContextualMenuItem name='Copy' />
                <uiContextualMenuItem name='Move' type='hasMenu'>
                    <uiContextualMenuItem name='Fiction' />
                    <uiContextualMenuItem name='Humor' />
                    <uiContextualMenuItem name='Magazines' />
                    <uiContextualMenuItem name='Non-fiction' />
                    <uiContextualMenuItem name='Textbooks' />
                </uiContextualMenuItem>
                <uiContextualMenuItem name='Create Rule...' />
                <uiContextualMenuItem name='Verdana' />
            </div>
        </uiContextualMenu>
    </div>`
});
