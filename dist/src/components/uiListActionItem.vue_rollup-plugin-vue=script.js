import ListActionItem from '../../node_modules/office-ui-fabric-vue/src/components/List/ListActionItem.vue.js';

//
var script = {
  "extends": ListActionItem,
  created: function created() {
    this.$options._scopeId = this.$parent.$options._scopeId;
  }
};

export default script;
