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
    @font-face {
        // font-family: "FabricMDL2Icons";
        font-family: "FabricMDL2Icons-a13498cf";
        src: url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-a13498cf.woff) format('woff')
    }

    .ms-CheckBox-field.is-checked::after
    {
        // display: "inline-block";
        // font-style: "normal";
        // font-weight: 400;            
        font-family: 'FabricMDL2Icons-a13498cf' !important;
        // content: '\E73E' !important;
    }
</style>