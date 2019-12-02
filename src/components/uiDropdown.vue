<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import Dropdown from "office-ui-fabric-vue/src/components/Dropdown/Dropdown.vue";
import { Dropdown as fabricDropdown } from "office-ui-fabric-js/src/components/Dropdown/Dropdown"

export default {
    loadStyles,
    beforeMount(){
        this.$fabric = {
            Dropdown : fabricDropdown
        };
    },
    methods:{
        setSelectedStatus: function setSelectedStatus(content) {
            var this$1 = this;

            Array.prototype.forEach.call(this.$refs.dropdown.querySelectorAll('.ms-Dropdown-item'), function (item) {
                if (item.textContent.trim() == content.trim()) {
                    item.classList.add('is-selected');
                    this$1.setDropdownTitle(content);
                } else {
                    item.classList.remove('is-selected');
                }
            });
        },
    },
    mounted(){
        var childs = this.$refs.dropdown.querySelectorAll(":not([" + this.$options._scopeId + "])");
        //IE vs. Array.From vs. querySelectorAll = no work >.<
        //Array.prototype.slice, does the trick instead 
        Array.prototype.slice.call(childs).map(c=>c.setAttribute(this.$options._scopeId, ""));
        // Array.from(childs).map(c=>c.setAttribute(this.$options._scopeId, ""));
    },
    extends :  Dropdown
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Dropdown/Dropdown";

    @font-face {
        font-family: "FabricMDL2Icons-a13498cf";
        src: url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-a13498cf.woff) format('woff')
    }

    .ms-Icon{
        display: "inline-block";
        font-style: "normal";
        font-weight: 400;
        &.ms-Icon--ChevronDown::before
        {
            font-family: 'FabricMDL2Icons-a13498cf';
            content: '\E70D';
        }
    }

    .ms-Panel .ms-Dropdown-items{
        /* ui-fabric-js tries to adjust the ms-dropdown-items for small devices, but it confligts with using them normally in panels
           this will undo these adjustments. (Still works fine on small devices)
        */
        max-height: 200px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
        overflow-y: scroll;
        padding-top: 0;
    }
</style>