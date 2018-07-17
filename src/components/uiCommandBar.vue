<script>
import commandbar from "office-ui-fabric-vue/src/components/command_bar/commandbar.vue";
import { CommandBar as fabricCommandBar } from "office-ui-fabric-js/src/components/commandbar/commandbar"


export default {
    injectCss,
    beforeMount(){ 
        this.$fabric = { 
            CommandBar : fabricCommandBar 
        } 
    },
    extends :  commandbar
}
</script>
<style lang="scss">
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Commandbar/Commandbar";
    @import "node_modules/office-ui-fabric-js/src/components/Commandbutton/Commandbutton";
    @import "node_modules/office-ui-fabric-js/src/components/ContextualMenu/ContextualMenu";
    @import "node_modules/office-ui-fabric-js/src/components/ContextualHost/ContextualHost";

    .inline-block {
        display: inline-block;
    }
    .ms-Icon.ms-Icon--More{
        content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="14" height="14" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 1152q27 0 50 -10t40.5 -27.5t27.5 -40.5t10 -50t-10 -50t-27.5 -40.5t-40.5 -27.5t-50 -10t-50 10t-40.5 27.5t-27.5 40.5t-10 50t10 50t27.5 40.5t40.5 27.5t50 10zM1024 1152q27 0 50 -10t40.5 -27.5t27.5 -40.5t10 -50t-10 -50t-27.5 -40.5t-40.5 -27.5t-50 -10t-50 10t-40.5 27.5t-27.5 40.5t-10 50t10 50t27.5 40.5t40.5 27.5t50 10zM1792 1152q27 0 50 -10t40.5 -27.5t27.5 -40.5t10 -50t-10 -50t-27.5 -40.5t-40.5 -27.5t-50 -10t-50 10t-40.5 27.5t-27.5 40.5t-10 50t10 50t27.5 40.5t40.5 27.5t50 10z" fill="black" stroke="none"/></svg>');
    }
</style>