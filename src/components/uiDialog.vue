<script>
import dialog from "office-ui-fabric-vue/src/components/Dialog/Dialog.vue";
import { Dialog as fabricDialog } from "office-ui-fabric-js/src/components/Dialog/Dialog"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            Dialog : fabricDialog
        };
    },
    watch:{
        value(newVal){
            if(this.dialogInstance._overlay.overlayElement)
                this.dialogInstance._overlay.overlayElement.setAttribute(this.$options._scopeId,"");
        }
    },
    extends :  dialog
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Dialog/Dialog";
    @import "node_modules/office-ui-fabric-js/src/components/Overlay/Overlay";
</style>
