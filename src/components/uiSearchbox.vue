<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import searchBox from "office-ui-fabric-vue/src/components/search_box/searchbox.vue";
import { SearchBox as fabricSearchBox } from "office-ui-fabric-js/src/components/SearchBox/SearchBox"

export default {
    loadStyles,
    beforeMount(){
        this.$fabric = {
            SearchBox : fabricSearchBox
        };
    },
    extends :  searchBox
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Label/Label"; /* searchbox uses mixins from label */
    @import "node_modules/office-ui-fabric-js/src/components/CommandButton/CommandButton"; /* searchbox uses classes from CommandButton */    
    @import "node_modules/office-ui-fabric-js/src/components/SearchBox/SearchBox";
    @font-face {
        font-family: "FabricMDL2Icons-a13498cf";
        src: url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-a13498cf.woff) format('woff')
    }

    .ms-Icon{
        display: "inline-block";
        font-style: "normal";
        font-weight: 400;
        &.ms-Icon--Search::before
        {
            font-family: 'FabricMDL2Icons-a13498cf';
            content: '\E721';
        }
        &.ms-Icon--Clear::before
        {
            font-family: 'FabricMDL2Icons-a13498cf';
            content: '\E894';
        }
    }
</style>