<script>
import ChoiceField from "office-ui-fabric-vue/src/components/choice_field_group/ChoiceField.vue";
export default {
    extends :  ChoiceField,
    created(){
        this.$options._scopeId = this.$parent.$options._scopeId;
    }
}
</script>
