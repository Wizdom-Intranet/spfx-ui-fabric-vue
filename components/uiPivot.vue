<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import pivot from "office-ui-fabric-vue/src/components/Pivot/Pivot.vue";
import { Pivot as fabricPivot } from "office-ui-fabric-js/src/components/Pivot/Pivot"
export default {
    loadStyles,
    beforeMount(){
        this.$fabric = {
            Pivot : fabricPivot
        };
    },
    extends :  pivot
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Pivot/Pivot";
</style>
