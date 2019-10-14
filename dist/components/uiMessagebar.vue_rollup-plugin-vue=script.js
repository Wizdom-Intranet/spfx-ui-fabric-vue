import { loadStyles } from '@microsoft/load-themed-styles';
import MessageBar from '../node_modules/office-ui-fabric-vue/src/components/Message_Bar/MessageBar.vue.js';

//
var script = {
  loadStyles: loadStyles,
  computed: {
    hasIcon: function hasIcon() {
      return !!this.$slots['icon'];
    }
  },
  extends: MessageBar
};

export default script;
