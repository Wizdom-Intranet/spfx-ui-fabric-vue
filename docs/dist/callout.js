!function(t){var n={};function e(o){if(n[o])return n[o].exports;var u=n[o]={i:o,l:!1,exports:{}};return t[o].call(u.exports,u,u.exports,e),u.l=!0,u.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)e.d(o,u,function(n){return t[n]}.bind(null,u));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/dist/",e(e.s=12)}({12:function(t,n){(void 0)(["../dist/bundle.esm","vue","@microsoft/load-themed-styles"],function(t,n){"use strict";var e,o,u;return{setters:[function(t){e=t.uiButton,o=t.uiCallout},function(t){u=t.default},function(t){t.loadStyles}],execute:function(){new u({el:"#app",components:{uiButton:e,uiCallout:o},template:"<div>\n        <ui-callout\n            title='Title here'\n            content='Content here'>\n            <ui-button slot='actions'>Button</ui-button>\n            <ui-button>Open simple</ui-button>\n        </ui-callout>\n\n        <ui-callout\n            :showClose='true'\n            title='Title here'\n            content='Content here'>\n            <ui-button slot='actions'>Button</ui-button>\n            <ui-button>Open with close</ui-button>\n        </ui-callout>\n\n        <ui-callout\n            type='OOBE'\n            title='Title here'\n            content='Content here'>\n            <ui-button slot='actions'>Button</ui-button>\n            <ui-button>Open OOBE</ui-button>\n        </ui-callout>\n\n        <ui-callout\n            type='OOBE'\n            position=\"bottom\"\n            title='Title here'\n            content='Content here'>\n            <ui-button slot='actions'>Button</ui-button>\n            <ui-button>Open bottom</ui-button>\n        </ui-callout>\n    </div>"})}}})}});