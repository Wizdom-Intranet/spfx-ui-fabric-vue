<script>
import callout from "office-ui-fabric-vue/src/components/callout/callout.vue";
import { Callout as fabricCallout } from "office-ui-fabric-js/src/components/callout/callout"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            Callout : fabricCallout
        };
    },
    mounted(){
        this.$refs.calloutTrigger.addEventListener("click", ()=>{
            var contextualHostElm = this$1.$refs.callout.parentElement.parentElement;
            contextualHostElm.setAttribute(this.$options._scopeId,"");
            for(var i=0;i<contextualHostElm.children.length;i++)
                contextualHostElm.children[i].setAttribute(this.$options._scopeId,"");
            this$1.calloutInstance._contextualHost._openModal(); // recalculate position
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
</style>