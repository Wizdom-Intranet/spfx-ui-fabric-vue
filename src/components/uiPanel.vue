<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import panel from "office-ui-fabric-vue/src/components/panel/panel.vue";
import { Panel as fabricPanel } from "office-ui-fabric-js/src/components/Panel/Panel"

export default {
    loadStyles,
    beforeMount(){
        this.$fabric = {
            Panel : fabricPanel
        };
    },
    watch: {
        value(newVal) {
            if(newVal){
                this.panelInstance.panelHost.overlay.overlayElement.setAttribute(this.$options._scopeId, "");
            }
        }
    },
    beforeDestroy(){
        if(this.panelInstance != null)
            this.panelInstance.dismiss();
    },
    extends :  panel
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import 'node_modules/office-ui-fabric-core/src/sass/Fabric.Animations.Output';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Panel/Panel";
    @import "node_modules/office-ui-fabric-js/src/components/Overlay/Overlay";

    .ms-Panel-contentInner{
        margin-top: 0;
        border-top:solid 40px transparent;
        box-sizing: border-box;
    }
</style>
