import { loadStyles } from '@microsoft/load-themed-styles';
import persona from '../node_modules/office-ui-fabric-vue/src/components/persona/persona.vue.js';
import { Persona } from '../node_modules/office-ui-fabric-js/src/components/persona/persona.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      Persona: Persona
    };
  },
  extends: persona
};

export default script;
