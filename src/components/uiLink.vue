<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import link from "office-ui-fabric-vue/src/components/Link/Link.vue";

export default {
    loadStyles,
    extends :  link
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Link/Link";
</style>
