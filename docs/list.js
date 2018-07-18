import {uiList, uiListItem, uiListActions, uiListActionItem, uiIconMail, uiIconDelete, uiIconFlag, uiIconPinned} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiList, uiListItem, uiListActions, uiListActionItem, uiIconMail, uiIconDelete, uiIconFlag, uiIconPinned },
    data() {
        return {
            item1Checked: false,
            item2Checked: false,
            item3Checked: false,
            item4Checked: false
        };
    },
    template : `<div>
        <ui-list>
            <ui-list-item
                isSelectable
                isUnread
                primaryText='Alton Lafferty'
                secondaryText='Meeting notes'
                tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
                metaText='2:42p'
                v-model='item1Checked'>
                <ui-list-actions>
                    <ui-list-action-item><div slot="icon"><uiIconMail /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconDelete /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconFlag /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconPinned /></div></ui-list-action-item>
                </ui-list-actions>
            </ui-list-item>

            <ui-list-item
                isSelectable
                isUnread
                primaryText='Alton Lafferty'
                secondaryText='Meeting notes'
                tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
                metaText='2:42p'
                v-model='item2Checked'>
                <ui-list-actions>
                    <ui-list-action-item><div slot="icon"><uiIconMail /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconDelete /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconFlag /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconPinned /></div></ui-list-action-item>
                </ui-list-actions>
            </ui-list-item>

            <ui-list-item
                isSelectable
                primaryText='Alton Lafferty'
                secondaryText='Meeting notes'
                tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
                metaText='2:42p'
                v-model='item3Checked'>
                <ui-list-actions>
                    <ui-list-action-item><div slot="icon"><uiIconMail /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconDelete /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconFlag /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconPinned /></div></ui-list-action-item>
                </ui-list-actions>
            </ui-list-item>

            <ui-list-item
                isSelectable
                primaryText='Alton Lafferty'
                secondaryText='Meeting notes'
                tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
                metaText='2:42p'
                v-model='item4Checked'>
                <ui-list-actions>
                    <ui-list-action-item><div slot="icon"><uiIconMail /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconDelete /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconFlag /></div></ui-list-action-item>
                    <ui-list-action-item><div slot="icon"><uiIconPinned /></div></ui-list-action-item>
                </ui-list-actions>
            </ui-list-item>
        </ui-list>
    </div>`
});
