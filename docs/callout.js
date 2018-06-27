import {uiButton, uiCallout} from "../dist/bundle.esm";
import Vue from "vue";
import { loadStyles } from '@microsoft/load-themed-styles';

new Vue({
    el: '#app',
    components : { uiButton, uiCallout },
    template : `<div>
        <ui-callout
            title='Title here'
            content='Content here'>
            <ui-button slot='actions'>Button</ui-button>
            <ui-button>Open simple</ui-button>
        </ui-callout>

        <ui-callout
            :showClose='true'
            title='Title here'
            content='Content here'>
            <ui-button slot='actions'>Button</ui-button>
            <ui-button>Open with close</ui-button>
        </ui-callout>

        <ui-callout
            type='OOBE'
            title='Title here'
            content='Content here'>
            <ui-button slot='actions'>Button</ui-button>
            <ui-button>Open OOBE</ui-button>
        </ui-callout>

        <ui-callout
            type='OOBE'
            position="bottom"
            title='Title here'
            content='Content here'>
            <ui-button slot='actions'>Button</ui-button>
            <ui-button>Open bottom</ui-button>
        </ui-callout>
    </div>`
});
