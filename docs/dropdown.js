import { uiDropdown, uiDropdownItem } from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiDropdown, uiDropdownItem },
    data(){
        return {
            select: 'duck'
        }
    },
    template : `<div>
        <uiDropdown v-model='select' label='Dropdown label'>
            <uiDropdownItem value='dog'>Dog barking</uiDropdownItem>
            <uiDropdownItem value='wind'>Wind blowing</uiDropdownItem>
            <uiDropdownItem value='duck'>Duck quacking</uiDropdownItem>
            <uiDropdownItem value='cow'>Cow mooing</uiDropdownItem>
        </uiDropdown>
    </div>`
});
