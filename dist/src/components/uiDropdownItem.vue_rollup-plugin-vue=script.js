import dropdownitem from '../../node_modules/office-ui-fabric-vue/src/components/Dropdown/dropdownitem.vue.js';

var script = {
  extends: dropdownitem,
  created: function created() {
    this.$options._scopeId = this.$parent.$options._scopeId;
  }
};

export default script;
