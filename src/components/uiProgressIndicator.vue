<script>
import ProgressIndicator from "office-ui-fabric-vue/src/components/progress_indicator/ProgressIndicator.vue";
import { ProgressIndicator as fabricProgressIndicator } from "office-ui-fabric-js/src/components/ProgressIndicator/ProgressIndicator"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            ProgressIndicator : fabricProgressIndicator
        };
    },
    extends :  ProgressIndicator
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/ProgressIndicator/ProgressIndicator";
</style>