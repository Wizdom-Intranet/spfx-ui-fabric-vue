<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import checkbox from "office-ui-fabric-vue/src/components/checkbox/checkbox.vue";
import { CheckBox as fabricCheckbox } from "office-ui-fabric-js/src/components/checkBox/checkBox"

export default {
    loadStyles,
    beforeMount(){ 
        this.$fabric = { 
            CheckBox : fabricCheckbox 
        } 
    },
    extends :  checkbox
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/checkbox/Checkbox";

    .ms-CheckBox-field::after
    {
        content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path transform="translate(0, 2048) scale(1, -1)" d="M1837 1491l-1069 -1070l-557 558l90 90l467 -466l979 978z" fill="white" stroke="none"/></svg>') !important;
        // @media screen and (-ms-high-contrast: active) {
        //     color: $ms-color-black;
        // }

        // @media screen and (-ms-high-contrast: black-on-white) {
        //     color: $ms-color-white;
        // }
    }
</style>