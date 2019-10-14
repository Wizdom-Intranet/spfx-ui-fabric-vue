import { loadStyles } from '@microsoft/load-themed-styles';
import ProgressIndicator$1 from '../../node_modules/office-ui-fabric-vue/src/components/progress_indicator/ProgressIndicator.vue.js';
import { ProgressIndicator } from '../../node_modules/office-ui-fabric-js/src/components/ProgressIndicator/ProgressIndicator.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      ProgressIndicator: ProgressIndicator
    };
  },
  extends: ProgressIndicator$1
};

export default script;
