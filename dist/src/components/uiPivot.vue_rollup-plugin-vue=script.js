import { loadStyles } from '@microsoft/load-themed-styles';
import pivot from '../../node_modules/office-ui-fabric-vue/src/components/Pivot/Pivot.vue.js';
import { Pivot } from '../../node_modules/office-ui-fabric-js/src/components/Pivot/Pivot.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      Pivot: Pivot
    };
  },
  "extends": pivot
};

export default script;
