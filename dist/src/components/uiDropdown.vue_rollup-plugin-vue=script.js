import { loadStyles } from '@microsoft/load-themed-styles';
import Dropdown$1 from '../../node_modules/office-ui-fabric-vue/src/components/Dropdown/Dropdown.vue.js';
import { Dropdown } from '../../node_modules/office-ui-fabric-js/src/components/Dropdown/Dropdown.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      Dropdown: Dropdown
    };
  },
  methods: {
    setSelectedStatus: function setSelectedStatus(content) {
      var this$1 = this;
      Array.prototype.forEach.call(this.$refs.dropdown.querySelectorAll('.ms-Dropdown-item'), function (item) {
        if (item.textContent.trim() == content.trim()) {
          item.classList.add('is-selected');
          this$1.setDropdownTitle(content);
        } else {
          item.classList.remove('is-selected');
        }
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    var childs = this.$refs.dropdown.querySelectorAll(":not([" + this.$options._scopeId + "])"); //IE vs. Array.From vs. querySelectorAll = no work >.<
    //Array.prototype.slice, does the trick instead 

    Array.prototype.slice.call(childs).map(function (c) {
      return c.setAttribute(_this.$options._scopeId, "");
    }); // Array.from(childs).map(c=>c.setAttribute(this.$options._scopeId, ""));
  },
  extends: Dropdown$1
};

export default script;
