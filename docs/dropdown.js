import { uiDropdown, uiDropdownItem, uiPanel, uiButton } from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiDropdown, uiDropdownItem, uiButton, uiPanel },
    data(){
        return {
            select: 'duck',
            defaultPanelVisiblity: false
        }
    },
    template : `<div>
        <uiDropdown v-model='select' label='Dropdown label'>
            <uiDropdownItem value='dog'>Dog barking</uiDropdownItem>
            <uiDropdownItem value='wind'>Wind blowing</uiDropdownItem>
            <uiDropdownItem value='duck'>Duck quacking</uiDropdownItem>
            <uiDropdownItem value='cow'>Cow mooing</uiDropdownItem>
        </uiDropdown>
        <uiButton @click='defaultPanelVisiblity=true'>Open Panel with dropdown</uiButton>
        <uiPanel title='Panel' v-model='defaultPanelVisiblity'>
            <uiDropdown v-model='select' label='Dropdown label'>
                <uiDropdownItem value='dog'>Dog barking</uiDropdownItem>
                <uiDropdownItem value='wind'>Wind blowing</uiDropdownItem>
                <uiDropdownItem value='duck'>Duck quacking</uiDropdownItem>
                <uiDropdownItem value='cow'>Cow mooing</uiDropdownItem>
            </uiDropdown>
        </uiPanel>

        selected: {{select}}
    </div>`
});
