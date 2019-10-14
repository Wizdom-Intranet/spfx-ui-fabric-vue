import { loadStyles } from '@microsoft/load-themed-styles';
import textField from '../node_modules/office-ui-fabric-vue/src/components/text_Field/textField.vue.js';
import { TextField } from '../node_modules/office-ui-fabric-js/src/components/TextField/TextField.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      TextField: TextField
    };
  },
  extends: textField
};

export default script;
