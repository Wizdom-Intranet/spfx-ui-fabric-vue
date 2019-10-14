import { loadStyles } from '@microsoft/load-themed-styles';
import { SearchBox } from '../node_modules/office-ui-fabric-js/src/components/SearchBox/SearchBox.js';
import searchBox from '../node_modules/office-ui-fabric-vue/src/components/search_box/searchbox.vue.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      SearchBox: SearchBox
    };
  },
  extends: searchBox
};

export default script;
