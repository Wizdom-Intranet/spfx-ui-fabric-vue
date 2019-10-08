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

    .ms-Icon.ms-Icon--Clear
    {
        content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="14" height="14" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z" fill="black" stroke="none"/></svg>');
    }
</style>