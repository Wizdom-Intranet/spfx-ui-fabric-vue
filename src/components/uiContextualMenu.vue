<script>
import ContextualMenu from "office-ui-fabric-vue/src/components/contextual_menu/ContextualMenu.vue";
import { ContextualMenu as fabricContextualMenu } from "office-ui-fabric-js/src/components/ContextualMenu/ContextualMenu";
import { ContextualHost as fabricContextualHost } from "office-ui-fabric-js/src/components/ContextualHost/ContextualHost";

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            ContextualMenu : fabricContextualMenu
        };
    },
    mounted(){
        this.$refs.contextualMenuTrigger.addEventListener("click", ()=>{
            
            var setScopeIdForContextualHost = contextualhost => {
                contextualhost.setAttribute(this.$options._scopeId,"");
                Array.from(contextualhost.children).map(c=>c.setAttribute(this.$options._scopeId,""));
            }

            // set scopeId for contextualhost
            setScopeIdForContextualHost(this$1.$refs.contextualMenu.parentElement.parentElement);

            // scopeId for menuItems
            var menuItems = this.$refs.contextualMenu.querySelectorAll("[class^='ms-ContextualMenu']");
            Array.from(menuItems).map(menuItem=>menuItem.setAttribute(this.$options._scopeId, ""));

            var subItems = this$1.contextualMenuInstance._container.querySelectorAll(".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu");
            Array.from(subItems).map((subItem)=>{
                subItem.addEventListener("click", ()=>{
                    var contextualMenuElmInsideHost = document.querySelector(`.ms-ContextualHost:not([${this.$options._scopeId}]) [${this.$options._scopeId}]`)
                    if(contextualMenuElmInsideHost && contextualMenuElmInsideHost.parentElement.parentElement)
                        setScopeIdForContextualHost(contextualMenuElmInsideHost.parentElement.parentElement);
                    fabricContextualHost.hosts[fabricContextualHost.hosts.length-1]._openModal();
                });
            });

        });
    },
    extends :  ContextualMenu
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/ContextualMenu/ContextualMenu";
    @import "node_modules/office-ui-fabric-js/src/components/ContextualHost/ContextualHost";

    .ms-Icon.ms-Icon--ChevronRight::before
    {
        content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="8" height="8" version="1.1" xmlns="http://www.w3.org/2000/svg"><path transform="translate(0, 2048) scale(1, -1)" d="M515 93l930 931l-930 931l90 90l1022 -1021l-1022 -1021z" fill="black" stroke="none"/></svg>');
    }
</style>