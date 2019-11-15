import { loadStyles } from '@microsoft/load-themed-styles';
import toggle from '../../node_modules/office-ui-fabric-vue/src/components/Toggle/Toggle.vue.js';
import { Toggle } from '../../node_modules/office-ui-fabric-js/src/components/Toggle/Toggle.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      Toggle: Toggle
    };
  },
  "extends": toggle
};

export default script;
