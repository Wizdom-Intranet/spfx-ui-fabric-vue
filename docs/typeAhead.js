import {uiTypeAhead} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiTypeAhead },
    data() {
        return {
            options : [
                {name: 'aaa', id: 1},
                {name: 'aab', id: 2},
                {name: 'aba', id: 3},
                {name: 'abb', id: 4},
                {name: 'baa', id: 5},
                {name: 'bab', id: 6},
                {name: 'bba', id: 7},
                {name: 'bbb', id: 8},
                {name: 'caa', id: 9},
                {name: 'cab', id: 10},
            ],
            display : 'name',
            placeholderText: 'This is set with the "placeholderText" prop',
            label: 'This is set with the "label" prop',
            autoselectOff: null
        };
    },
    template : `
    <div>
        {{'Typeahead testpage'}}<br/>

        <uiTypeAhead :options="options" :display="display" :placeholderText="placeholderText" :label="label"/>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <div style="text-align:right"><uiTypeAhead style="width:200px;display:inline-block" :options="options" :display="display" :placeholderText="placeholderText" :label="label" :autoselectOff="false"/></div>
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <div><uiTypeAhead style="width:200px;display:inline-block" :options="options" :display="display" :placeholderText="'autoselectOff'" :label="'autoselectOff'" :autoselectOff="true"/></div>
    </div>`
});
