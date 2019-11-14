import ChoiceField from '../../node_modules/office-ui-fabric-vue/src/components/choice_field_group/ChoiceField.vue.js';

var script = {
  "extends": ChoiceField,
  created: function created() {
    this.$options._scopeId = this.$parent.$options._scopeId;
  }
};

export default script;
