import {uiButton, uiContextualMenu, uiContextualMenuItem} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiButton, uiContextualMenu, uiContextualMenuItem },
    template : `<div>
        <uiContextualMenu>
            <uiButton type='primary'>Open Example</uiButton>
            <div slot='list'>
            <uiContextualMenuItem name='Delete' />
            <uiContextualMenuItem name='Flag' />
            <uiContextualMenuItem type='divider' />
            <uiContextualMenuItem name='Important' />
            <uiContextualMenuItem name='Move' />
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
