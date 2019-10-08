import { loadStyles } from '@microsoft/load-themed-styles';
import callout from '../../node_modules/office-ui-fabric-vue/src/components/callout/callout.vue.js';
import { Callout } from '../../node_modules/office-ui-fabric-js/src/components/callout/callout.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      Callout: Callout
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$refs.calloutTrigger.addEventListener("click", function () {
      var contextualHostElm = this$1.$refs.callout.parentElement.parentElement;
      contextualHostElm.setAttribute(_this.$options._scopeId, "");

      for (var i = 0; i < contextualHostElm.children.length; i++) {
        contextualHostElm.children[i].setAttribute(_this.$options._scopeId, "");
      }

      this$1.calloutInstance._contextualHost._openModal(); // recalculate position

    });
  },
  extends: callout
};

export default script;
