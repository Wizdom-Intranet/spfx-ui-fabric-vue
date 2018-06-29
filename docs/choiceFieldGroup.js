import {uiChoiceFieldGroup, uiChoiceField} from "../dist/bundle.esm";
import Vue from "vue";

new Vue({
    el: '#app',
    components : { uiChoiceFieldGroup, uiChoiceField },
    data() {
        return {
            choiceField: 2
        };
    },
    template : `<div>
        <uiChoiceFieldGroup v-model='choiceField'>
            <div requiredslot='title'>Unselected</div>
            <uiChoiceField :value='1'>Option 1</uiChoiceField>
            <uiChoiceField :value='2'>Option 2</uiChoiceField>
            <uiChoiceField :value='3' disabled>Option 3</uiChoiceField>
            <uiChoiceField :value='4'>Option 4</uiChoiceField>
        </uiChoiceFieldGroup> 
    </div>`
});
