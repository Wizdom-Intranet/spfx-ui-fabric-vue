<script>
import toggle from "office-ui-fabric-vue/src/components/Toggle/Toggle.vue";
import { Toggle as fabricToggle } from "office-ui-fabric-js/src/components/Toggle/Toggle"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            Toggle : fabricToggle
        };
    },
    extends :  toggle
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Toggle/Toggle";
</style>
