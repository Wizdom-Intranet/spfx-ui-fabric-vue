<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import overlay from "office-ui-fabric-vue/src/components/Overlay/Overlay.vue";
import { Overlay as fabricOverlay } from "office-ui-fabric-js/src/components/Overlay/Overlay"

export default {
    loadStyles,
    beforeMount(){
        this.$fabric = {
            Overlay : fabricOverlay
        };
    },
    // watch:{
    //     useDarkOverlay:{
    //         handler(newVal){
                
    //         },
    //         immediate : true
    //     }
    // },
    // props : {
    //     useDarkOverlay: Boolean
    // },
    extends :  overlay
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Overlay/Overlay";
</style>
