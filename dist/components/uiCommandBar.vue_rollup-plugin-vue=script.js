import { loadStyles } from '@microsoft/load-themed-styles';
import commandbar from '../node_modules/office-ui-fabric-vue/src/components/command_bar/commandbar.vue.js';
import { CommandBar } from '../node_modules/office-ui-fabric-js/src/components/commandbar/commandbar.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      CommandBar: CommandBar
    };
  },
  extends: commandbar
};

export default script;
