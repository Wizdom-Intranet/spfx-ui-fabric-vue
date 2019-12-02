<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import callout from "office-ui-fabric-vue/src/components/callout/callout.vue";
import { Callout as fabricCallout } from "office-ui-fabric-js/src/components/callout/callout"

export default {
    loadStyles,
    beforeMount(){
        this.$fabric = {
            Callout : fabricCallout
        };
    },
    mounted(){
        this.$refs.calloutTrigger.addEventListener("click", ()=>{
            var contextualHostElm = this.$refs.callout.parentElement.parentElement;
            contextualHostElm.setAttribute(this.$options._scopeId,"");
            for(var i=0;i<contextualHostElm.children.length;i++)
                contextualHostElm.children[i].setAttribute(this.$options._scopeId,"");
            this.calloutInstance._contextualHost._openModal(); // recalculate position
        });
    },
    extends :  callout
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Callout/Callout";
    @import "node_modules/office-ui-fabric-js/src/components/ContextualHost/ContextualHost";

@font-face {
        font-family: "FabricMDL2Icons-a13498cf";
        src: url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-a13498cf.woff) format('woff')
    }

    .ms-Icon{
        display: "inline-block";
        font-style: "normal";
        font-weight: 400;
        &.ms-Icon--Clear::before
        {
            font-family: 'FabricMDL2Icons-a13498cf';
            content: '\E894';
        }
    }
</style>