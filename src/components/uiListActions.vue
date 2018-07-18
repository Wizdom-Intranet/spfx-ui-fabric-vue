<script>
import ListActions from "office-ui-fabric-vue/src/components/List/ListActions.vue";

export default {
    injectCss,
    extends :  ListActions,
    created(){
        this.$options._scopeId = this.$parent.$options._scopeId;
    }
}
</script>