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
    .ms-Icon.ms-Icon--Cancel
    {
        content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1115 1024l690 -691l-90 -90l-691 690l-691 -690l-90 90l690 691l-690 691l90 90l691 -690l691 690l90 -90z" fill="black" stroke="none"/></svg>');
    }
</style>
