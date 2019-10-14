import { loadStyles } from '@microsoft/load-themed-styles';
import uiTextfield from './uiTextfield.vue.js';
import { uiIconChevronDownMed } from './uiIcon.js';
import Popper from '../../node_modules/vue-popperjs/dist/vue-popper.min.js';
import debounce from 'lodash.debounce';

//
var script = {
  loadStyles: loadStyles,
  components: {
    uiTextfield: uiTextfield,
    uiIconChevronDownMed: uiIconChevronDownMed,
    Popper: Popper
  },
  props: ['options', //Array of available options to display in dropdown
  'display', //String that decides what attribute on the options is used for display and typeahead
  'placeholderText', //String to use as placeholder text
  'label', //Label
  'autoselectOff'],
  data: function data() {
    return {
      selected: null,
      userInput: ''
    };
  },
  methods: {
    selectOption: function selectOption(option) {
      this.selected = option;
      this.userInput = option[this.display];
    },
    //Autoselects an option if userinput matches display attribute
    autoselectMatch: debounce(function () {
      var _this = this;

      if (this.autoselectOff == true) {
        return;
      }

      this.options.forEach(function (option) {
        //Regex for exact match but case insensitive
        var regex = new RegExp('^' + _this.userInput + '$', 'i');

        if (regex.test(option[_this.display])) {
          _this.selectOption(option);
        }
      });
    }, 500),
    setUserInput: function setUserInput(newInput) {
      this.userInput = newInput;
    },
    inputBlurred: function inputBlurred() {
      this.$refs.popper.doClose();
    }
  },
  computed: {
    popperOptions: function popperOptions() {
      return {
        placement: "bottom-end",
        positionFixed: true,
        modifiers: {
          preventOverflow: {
            enabled: true
          },
          flip: {
            enabled: true
          },
          autoSizing: {
            enabled: true,
            fn: function autoSizing(data) {
              data.styles.width = data.offsets.reference.width - 2;
              return data;
            },
            order: 840
          }
        }
      };
    }
  },
  watch: {
    "userInput": debounce(function (newVal) {
      if (this.selected == null || this.selected[this.display] != newVal) {
        this.$refs.popper.doShow();
      }
      this.autoselectMatch();
      this.$emit('inputChanged', newVal);
    }, 500),
    "selected": function selected(newVal) {
      this.$refs.popper.doClose();
      this.$emit('optionSelected', newVal);
    }
  }
};

export default script;
