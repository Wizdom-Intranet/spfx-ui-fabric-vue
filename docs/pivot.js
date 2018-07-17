import {uiPivot, uiPivotItem} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiPivot, uiPivotItem },
    template : `<div>
        Normal
        <uiPivot>
            <uiPivotItem label='My files'>This is the my files tab.</uiPivotItem>
            <uiPivotItem label='Recent'>This is the recent tab.</uiPivotItem>
            <uiPivotItem label='Shared with me'>This is the shared with me tab.</uiPivotItem>
        </uiPivot>
        <br /><br />
        
        Large
        <uiPivot size='large'>
            <uiPivotItem label='My files'>This is the my files tab.</uiPivotItem>
            <uiPivotItem label='Recent'>This is the recent tab.</uiPivotItem>
            <uiPivotItem label='Shared with me'>This is the shared with me tab.</uiPivotItem>
        </uiPivot>
        <br /><br />

        Tabs
        <uiPivot type='tabs'>
            <uiPivotItem label='My files'>This is the my files tab.</uiPivotItem>
            <uiPivotItem label='Recent'>This is the recent tab.</uiPivotItem>
            <uiPivotItem label='Shared with me'>This is the shared with me tab.</uiPivotItem>
        </uiPivot>
        <br /><br />
        
        Large tabs
        <uiPivot size='large' type='tabs'>
            <uiPivotItem label='My files'>This is the my files tab.</uiPivotItem>
            <uiPivotItem label='Recent'>This is the recent tab.</uiPivotItem>
            <uiPivotItem label='Shared with me'>This is the shared with me tab.</uiPivotItem>
        </uiPivot>
    </div>`
});
