import '@microsoft/load-themed-styles';

var uiButton = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',[_vm._v(" this is button "),_c('input',{attrs:{"type":"text"},domProps:{"value":_vm.count}}),_c('button',{on:{"click":function($event){_vm.count++;}}},[_vm._v("add")])])},staticRenderFns: [],
    data: function data(){
        return { count : 1}
    }
}

export { uiButton };
