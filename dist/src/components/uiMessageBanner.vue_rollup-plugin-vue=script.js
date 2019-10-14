import { loadStyles } from '@microsoft/load-themed-styles';
import '../../node_modules/office-ui-fabric-vue/src/components/Message_Banner/MessageBanner.vue.js';
import { MessageBanner } from '../../node_modules/office-ui-fabric-js/src/components/MessageBanner/MessageBanner.js';

//
var script = {
  loadStyles: loadStyles,
  props: {
    value: Boolean
  },
  data: function data() {
    return {
      instance: null
    };
  },
  watch: {
    value: function value() {
      this.setVisibility();
    }
  },
  methods: {
    setVisibility: function setVisibility() {
      var _this = this;

      if (this.value) {
        if (!this.instance) {
          this.instance = new MessageBanner(this.$refs.messageBanner);

          this.instance._closeButton.addEventListener("click", function () {
            console.log("closed");

            _this.$emit('input', false); // this.value = false;

          }, false);
        }

        this.instance.show();
      } else if (this.instance && this.$refs.messageBanner.className.indexOf("is-hidden") < 0) this.instance.hide();
    }
  },
  mounted: function mounted() {
    this.setVisibility();
  }
};

export default script;
