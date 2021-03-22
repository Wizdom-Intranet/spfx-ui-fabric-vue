<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import ContextualMenu from "office-ui-fabric-vue/src/components/contextual_menu/ContextualMenu.vue";
import { ContextualMenu as fabricContextualMenu } from "office-ui-fabric-js/src/components/ContextualMenu/ContextualMenu";
import { ContextualHost as fabricContextualHost } from "office-ui-fabric-js/src/components/ContextualHost/ContextualHost";

export default {
    loadStyles,
    beforeMount(){
        this.$fabric = {
            ContextualMenu : fabricContextualMenu
        };
    },
    mounted(){

        this.$refs.contextualMenuTrigger.addEventListener("click", ()=>{

            var setScopeIdForContextualHost = contextualhost => {

                contextualhost.setAttribute(this.$options._scopeId,"");
                Array.prototype.slice.call(contextualhost.children).map(c=>c.setAttribute(this.$options._scopeId, ""));
                // Array.from(contextualhost.children).map(c=>c.setAttribute(this.$options._scopeId,""));

                // if contextmenu is out of window to the right - we change left to right orientation.
                if(this.isOutOfViewport(contextualhost).right) {
                    contextualhost.style.left = "auto";
                    contextualhost.style.right = 0;
                }

                contextualhost.style.position = "fixed";
            }

            // set scopeId for contextualhost
            setScopeIdForContextualHost(this.$refs.contextualMenu.parentElement.parentElement);

            // scopeId for menuItems
            var menuItems = this.$refs.contextualMenu.querySelectorAll("[class^='ms-ContextualMenu']");
            Array.prototype.slice.call(menuItems).map(menuItem=>menuItem.setAttribute(this.$options._scopeId, ""));
            // Array.from(menuItems).map(menuItem=>menuItem.setAttribute(this.$options._scopeId, ""));

            var subItems = this.contextualMenuInstance._container.querySelectorAll(".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu");
            // Array.from(subItems).map((subItem)=>{
            Array.prototype.slice.call(menuItems).map((subItem)=>{
                subItem.addEventListener("click", ()=>{
                    var contextualMenuElmInsideHost = document.querySelector(`.ms-ContextualHost:not([${this.$options._scopeId}]) [${this.$options._scopeId}]`)
                    if(contextualMenuElmInsideHost && contextualMenuElmInsideHost.parentElement.parentElement)
                        setScopeIdForContextualHost(contextualMenuElmInsideHost.parentElement.parentElement);
                    if(fabricContextualHost.hosts[fabricContextualHost.hosts.length-1])
                        fabricContextualHost.hosts[fabricContextualHost.hosts.length-1]._openModal();
                });
            });

        });
    },
    methods: {
        isOutOfViewport(elem) {

            // Get element bounding
            var bounding = elem.getBoundingClientRect();

            // Check if it is out of the viewport on each side
            var out = {};
            out.top = bounding.top < 0;
            out.left = bounding.left < 0;
            out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
            out.right = bounding.right >= (window.innerWidth || document.documentElement.clientWidth);
            out.any = out.top || out.left || out.bottom || out.right;
            out.all = out.top && out.left && out.bottom && out.right;

            return out;

        }
    },
    extends :  ContextualMenu
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/ContextualMenu/ContextualMenu";
    @import "node_modules/office-ui-fabric-js/src/components/ContextualHost/ContextualHost";



    @font-face {
        font-family: "FabricMDL2Icons-a13498cf";
        src: url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-a13498cf.woff) format('woff')
    }

    .ms-Icon{
        display: "inline-block";
        font-style: "normal";
        font-weight: 400;
        &.ms-Icon--ChevronRight::before
        {
            font-family: 'FabricMDL2Icons-a13498cf';
            content: '\E76C';
        }
    }

    .ms-ContextualMenu-link.is-selected
    {
        &::after{
            display: "inline-block";
            font-style: "normal";
            font-weight: 400;            
            font-family: 'FabricMDL2Icons-a13498cf' !important;
            content: '\E73E' !important;
        }
    }
</style>