import { loadStyles } from '@microsoft/load-themed-styles';
import ChoiceFieldGroup$1 from '../node_modules/office-ui-fabric-vue/src/components/choice_field_group/ChoiceFieldGroup.vue.js';
import { ChoiceFieldGroup } from '../node_modules/office-ui-fabric-js/src/components/choiceFieldGroup/ChoiceFieldGroup.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      ChoiceFieldGroup: ChoiceFieldGroup
    };
  },
  extends: ChoiceFieldGroup$1
};

export default script;
