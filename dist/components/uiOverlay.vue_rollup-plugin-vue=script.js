import { loadStyles } from '@microsoft/load-themed-styles';
import { Overlay } from '../node_modules/office-ui-fabric-js/src/components/Overlay/Overlay.js';
import overlay from '../node_modules/office-ui-fabric-vue/src/components/Overlay/Overlay.vue.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      Overlay: Overlay
    };
  },
  // watch:{
  //     useDarkOverlay:{
  //         handler(newVal){
  //         },
  //         immediate : true
  //     }
  // },
  // props : {
  //     useDarkOverlay: Boolean
  // },
  extends: overlay
};

export default script;
