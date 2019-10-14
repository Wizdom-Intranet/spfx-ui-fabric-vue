<script>
import dropdownitem from "office-ui-fabric-vue/src/components/Dropdown/dropdownitem.vue";

export default {
    extends :  dropdownitem,
    created(){
        this.$options._scopeId = this.$parent.$options._scopeId;
    }
}
</script>