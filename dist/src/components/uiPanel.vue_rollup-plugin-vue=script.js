import { loadStyles } from '@microsoft/load-themed-styles';
import panel from '../../node_modules/office-ui-fabric-vue/src/components/panel/panel.vue.js';
import { Panel } from '../../node_modules/office-ui-fabric-js/src/components/panel/panel.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      Panel: Panel
    };
  },
  watch: {
    value: function value(newVal) {
      if (newVal) {
        this.panelInstance.panelHost.overlay.overlayElement.setAttribute(this.$options._scopeId, "");
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.panelInstance != null) this.panelInstance.dismiss();
  },
  extends: panel
};

export default script;
