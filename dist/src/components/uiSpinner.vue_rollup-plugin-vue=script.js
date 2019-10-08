import { loadStyles } from '@microsoft/load-themed-styles';
import Spinner$1 from '../../node_modules/office-ui-fabric-vue/src/components/Spinner/Spinner.vue.js';
import { Spinner } from '../../node_modules/office-ui-fabric-js/src/components/Spinner/Spinner.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      Spinner: Spinner
    };
  },
  mounted: function mounted() {
    var _this = this;

    // console.log("spin", this.$refs.spinner);
    var childs = this.$refs.spinner.querySelectorAll(":not([" + this.$options._scopeId + "])"); //IE vs. Array.From vs. querySelectorAll = no work >.<
    //Array.prototype.slice, does the trick instead 

    Array.prototype.slice.call(childs).map(function (c) {
      return c.setAttribute(_this.$options._scopeId, "");
    }); // Array.from(childs).map(c=>c.setAttribute(this.$options._scopeId, ""));
  },
  extends: Spinner$1
};

export default script;
