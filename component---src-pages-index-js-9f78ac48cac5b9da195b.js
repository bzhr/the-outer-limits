webpackJsonp([35783957827783],{37:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(e){l[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(e){return!1}}var l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,u,s=a(e),o=1;o<arguments.length;o++){r=Object(arguments[o]);for(var i in r)n.call(r,i)&&(s[i]=r[i]);if(l){u=l(r);for(var f=0;f<u.length;f++)c.call(r,u[f])&&(s[u[f]]=r[u[f]])}}return s}},249:function(e,t){},123:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),n=r(l);a(249);var c=function(e){return n.default.createElement("section",{className:"features",id:"features"},n.default.createElement("div",{className:"container"},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-12"},n.default.createElement("h4",{className:"features-title"},"Features"))),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-12"},n.default.createElement("ul",{className:"features-list"},e.data.map(function(e,t){return n.default.createElement("li",{className:"features-list-item",key:t},e.title)}))))))};t.default=c,e.exports=t.default},252:function(e,t){},126:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),n=r(l);a(252);var c=function(e){return n.default.createElement("section",{className:"howto",id:"howto"},n.default.createElement("div",{className:"container"},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-12"},n.default.createElement("h4",{className:"howto-title"},"How to"))),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-12"},n.default.createElement("ol",{className:"howto-list"},e.data.map(function(e,t){return n.default.createElement("li",{className:"howto-list-item",key:t},e.title)}))))))};t.default=c,e.exports=t.default},129:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var l=a(1),n=r(l),c=a(123),u=r(c),s=a(126),o=r(s),i=function(e){return n.default.createElement("main",null,n.default.createElement(u.default,{data:e.data.allDataJson.edges[0].node.features}),n.default.createElement(o.default,{data:e.data.allDataJson.edges[0].node.howTo}))};t.default=i;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-9f78ac48cac5b9da195b.js.map