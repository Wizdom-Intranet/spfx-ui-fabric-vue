import { loadStyles } from '@microsoft/load-themed-styles';
import checkbox from '../node_modules/office-ui-fabric-vue/src/components/checkbox/checkbox.vue.js';
import { CheckBox } from '../node_modules/office-ui-fabric-js/src/components/checkBox/checkBox.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      CheckBox: CheckBox
    };
  },
  extends: checkbox
};

export default script;
