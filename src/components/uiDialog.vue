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
    props : {
        useDarkOverlay : Boolean
    },
    methods : {
        ensureScopeIdForChilds(){
            if(this.dialogInstance && this.dialogInstance._overlay && this.dialogInstance._overlay.overlayElement){
                this.dialogInstance._overlay.overlayElement.setAttribute(this.$options._scopeId,"");
                if(this.useDarkOverlay)
                    this.dialogInstance._overlay.overlayElement.className += " ms-Overlay--dark";
            }
        },
        ensureOverlayIsClosed(){
            if(this.dialogInstance && this.dialogInstance._overlay && this.dialogInstance._overlay.overlayElement.parentElement)
                this.dialogInstance._overlay.remove()
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.ensureScopeIdForChilds();
        })
    },
    watch:{
        value(newVal){
            this.ensureScopeIdForChilds();

        if(!newVal)
            this.ensureOverlayIsClosed();
        }
    },
    beforeDestroy()
    {
        this.ensureOverlayIsClosed();
    },
    extends :  dialog
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Dialog/Dialog";
    @import "node_modules/office-ui-fabric-js/src/components/Overlay/Overlay";

    .ms-Icon.ms-Icon--Cancel
    {
        content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1115 1024l690 -691l-90 -90l-691 690l-691 -690l-90 90l690 691l-690 691l90 90l691 -690l691 690l90 -90z" fill="black" stroke="none"/></svg>');
    }
</style>
