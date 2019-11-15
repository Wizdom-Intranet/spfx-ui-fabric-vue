import { loadStyles } from '@microsoft/load-themed-styles';
import dialog from '../../node_modules/office-ui-fabric-vue/src/components/Dialog/Dialog.vue.js';
import { Dialog } from '../../node_modules/office-ui-fabric-js/src/components/Dialog/Dialog.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      Dialog: Dialog
    };
  },
  props: {
    useDarkOverlay: Boolean
  },
  methods: {
    ensureScopeIdForChilds: function ensureScopeIdForChilds() {
      if (this.dialogInstance && this.dialogInstance._overlay && this.dialogInstance._overlay.overlayElement) {
        this.dialogInstance._overlay.overlayElement.setAttribute(this.$options._scopeId, "");

        if (this.useDarkOverlay) this.dialogInstance._overlay.overlayElement.className += " ms-Overlay--dark";
      }
    },
    ensureOverlayIsClosed: function ensureOverlayIsClosed() {
      if (this.dialogInstance && this.dialogInstance._overlay && this.dialogInstance._overlay.overlayElement.parentElement) this.dialogInstance._overlay.remove();
    }
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      this.ensureScopeIdForChilds();
    });
  },
  watch: {
    value: function value(newVal) {
      this.ensureScopeIdForChilds();
      if (!newVal) this.ensureOverlayIsClosed();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.ensureOverlayIsClosed();
  },
  "extends": dialog
};

export default script;
