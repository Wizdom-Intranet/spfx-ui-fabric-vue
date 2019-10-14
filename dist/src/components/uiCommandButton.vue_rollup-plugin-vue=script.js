import { loadStyles } from '@microsoft/load-themed-styles';
import { CommandButton } from '../../node_modules/office-ui-fabric-js/src/components/CommandButton/CommandButton.js';
import commandbutton from '../../node_modules/office-ui-fabric-vue/src/components/command_button/commandbutton.vue.js';

//
var script = {
  loadStyles: loadStyles,
  computed: {
    hasIcon: function hasIcon() {
      return !!this.$slots['icon'];
    }
  },
  beforeMount: function beforeMount() {
    this.$fabric = {
      CommandButton: CommandButton
    };
  },
  extends: commandbutton
};

export default script;
