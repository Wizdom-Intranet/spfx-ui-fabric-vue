<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import label from "office-ui-fabric-vue/src/components/Label/Label.vue";

export default {
    loadStyles,
    extends :  label
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Label/Label";
</style>
