<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import ListItem from "office-ui-fabric-vue/src/components/List/ListItem.vue";

export default {
    loadStyles,
    extends :  ListItem
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/ListItem/ListItem";

    @font-face {
        font-family: "FabricMDL2Icons-a13498cf";
        src: url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-a13498cf.woff) format('woff')
    }

    .ms-ListItem.is-selected{
        &::before,
        &:hover::before {
            display: "inline-block";
            font-style: "normal";
            font-weight: 400;            
            font-family: 'FabricMDL2Icons-a13498cf' !important;
            content: '\E73E' !important;
        }
    }
</style>