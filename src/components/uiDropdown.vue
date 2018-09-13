<script>
import Dropdown from "office-ui-fabric-vue/src/components/Dropdown/Dropdown.vue";
import { Dropdown as fabricDropdown } from "office-ui-fabric-js/src/components/Dropdown/Dropdown"

export default {
    injectCss,
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

    .ms-Dropdown-caretDown{
        bottom: 7px;
        &.ms-Icon.ms-Icon--ChevronDown::before
        {
            content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="12" height="12" version="1.1" xmlns="http://www.w3.org/2000/svg"><path transform="translate(0, 2048) scale(1, -1)" d="M1939 1581l90 -90l-1005 -1005l-1005 1005l90 90l915 -915z" fill="black" stroke="none"/></svg>');
        }
    }
</style>