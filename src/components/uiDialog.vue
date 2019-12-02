<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import dialog from "office-ui-fabric-vue/src/components/Dialog/Dialog.vue";
import { Dialog as fabricDialog } from "office-ui-fabric-js/src/components/Dialog/Dialog"

export default {
    loadStyles,
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

    @font-face {
        font-family: "FabricMDL2Icons-a13498cf";
        src: url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-a13498cf.woff) format('woff')
    }

    .ms-Icon{
        display: "inline-block";
        font-style: "normal";
        font-weight: 400;
        &.ms-Icon--Cancel::before
        {
            font-family: 'FabricMDL2Icons-a13498cf';
            content: '\E711';
        }
    }
</style>
