<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import List from "office-ui-fabric-vue/src/components/List/List.vue";

export default {
    loadStyles,
    extends :  List
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/List/List";
</style>
