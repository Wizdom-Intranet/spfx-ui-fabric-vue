import { loadStyles } from '@microsoft/load-themed-styles';
import { ContextualHost } from '../../node_modules/office-ui-fabric-js/src/components/ContextualHost/ContextualHost.js';
import ContextualMenu$1 from '../../node_modules/office-ui-fabric-vue/src/components/contextual_menu/ContextualMenu.vue.js';
import { ContextualMenu } from '../../node_modules/office-ui-fabric-js/src/components/ContextualMenu/ContextualMenu.js';

var script = {
  loadStyles: loadStyles,
  beforeMount: function beforeMount() {
    this.$fabric = {
      ContextualMenu: ContextualMenu
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$refs.contextualMenuTrigger.addEventListener("click", function () {
      var setScopeIdForContextualHost = function setScopeIdForContextualHost(contextualhost) {
        contextualhost.setAttribute(_this.$options._scopeId, "");
        Array.prototype.slice.call(contextualhost.children).map(function (c) {
          return c.setAttribute(_this.$options._scopeId, "");
        }); // Array.from(contextualhost.children).map(c=>c.setAttribute(this.$options._scopeId,""));
      }; // set scopeId for contextualhost


      setScopeIdForContextualHost(this$1.$refs.contextualMenu.parentElement.parentElement); // scopeId for menuItems

      var menuItems = _this.$refs.contextualMenu.querySelectorAll("[class^='ms-ContextualMenu']");

      Array.prototype.slice.call(menuItems).map(function (menuItem) {
        return menuItem.setAttribute(_this.$options._scopeId, "");
      }); // Array.from(menuItems).map(menuItem=>menuItem.setAttribute(this.$options._scopeId, ""));

      var subItems = this$1.contextualMenuInstance._container.querySelectorAll(".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu"); // Array.from(subItems).map((subItem)=>{


      Array.prototype.slice.call(menuItems).map(function (subItem) {
        subItem.addEventListener("click", function () {
          var contextualMenuElmInsideHost = document.querySelector(".ms-ContextualHost:not([".concat(_this.$options._scopeId, "]) [").concat(_this.$options._scopeId, "]"));
          if (contextualMenuElmInsideHost && contextualMenuElmInsideHost.parentElement.parentElement) setScopeIdForContextualHost(contextualMenuElmInsideHost.parentElement.parentElement);
          if (ContextualHost.hosts[ContextualHost.hosts.length - 1]) ContextualHost.hosts[ContextualHost.hosts.length - 1]._openModal();
        });
      });
    });
  },
  extends: ContextualMenu$1
};

export default script;
