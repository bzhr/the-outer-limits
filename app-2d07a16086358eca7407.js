webpackJsonp([0xd2a57dc1d883],{65:function(e,t,n){"use strict";function o(e,t,n){var o=a.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function r(e,t,n){return a.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=o,t.apiRunnerAsync=r;var a=[{plugin:n(286),options:{plugins:[]}},{plugin:n(285),options:{plugins:[],trackingId:"UA-6061419-3",anonymize:!0}}]},176:function(e,t,n){"use strict";var o;t.components={"component---src-pages-index-js":n(282),"component---src-pages-chapters-black-hole-js":n(281)},t.json=(o={"layout-index.json":n(168),"index.json":n(284)},o["layout-index.json"]=n(168),o["chapters-black-hole.json"]=n(283),o),t.layouts={"component---src-layouts-index-js":n(280)}},177:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),s=o(c),l=n(2),f=o(l),p=n(132),d=o(p),h=n(45),g=o(h),m=n(65),v=function(e){var t=e.children;return s.default.createElement("div",null,t())},y=function(e){function t(n){r(this,t);var o=a(this,e.call(this)),u=n.location;return d.default.getPage(u.pathname)||(u=i({},u,i({},u,{pathname:"/404.html"}))),o.state={location:u,pageResources:d.default.getResourcesForPathname(n.location.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=d.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):d.default.getResourcesForPathname(e.location.pathname,function(n){t.setState({location:e.location,pageResources:n})})}},t.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(t){d.default.getPage(e.state.location.pathname)&&t.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);y.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=y,e.exports=t.default},45:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(299),a=o(r),u=(0,a.default)();e.exports=u},178:function(e,t,n){"use strict";var o=n(17),r={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var a=decodeURIComponent(n),u=a.slice(t.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,r[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,r[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,r[u]=e,!0}return!1}),i}}},179:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(106),a=o(r),u=n(65),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},283:function(e,t,n){n(34),e.exports=function(e){return n.e(95118013005383,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(295)})})}},284:function(e,t,n){n(34),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(296)})})}},168:function(e,t,n){n(34),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(109)})})}},280:function(e,t,n){n(34),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(180)})})}},132:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(1),a=(o(r),n(178)),u=o(a),i=n(45),c=o(i),s=void 0,l={},f={},p={},d={},h={},g=[],m=[],v={},y=[],R={},w=function(e){return e&&e.default||e},P=void 0,b=!0;P=n(181)({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){O(e,function(){y=y.filter(function(t){return t!==e}),P.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){P.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){P.onPostLoadPageResources(e)});var _=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},j=function(e,t){return v[e]>v[t]?1:v[e]<v[t]?-1:0},O=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[t])e.nextTick(function(){n(null,d[t])});else{var o="component---"===t.slice(0,12)?f.components[t]||f.layouts[t]:f.json[t];o(function(e,o){d[t]=o,n(e,o)})}},E=function(t,n){h[t]?e.nextTick(function(){n(null,h[t])}):O(t,function(e,o){if(e)n(e);else{var r=w(o());h[t]=r,n(e,r)}})},x=1,k={empty:function(){m=[],v={},R={},y=[],g=[]},addPagesArray:function(e){g=e;var t="";t="/projects/jeff-mills-the-outer-limits",s=(0,u.default)(e,t)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return m.pop()},enqueue:function(e){if(!g.some(function(t){return t.path===e}))return!1;var t=1/x;x+=1,v[e]?v[e]+=1:v[e]=1,k.has(e)||m.unshift(e),m.sort(j);var n=s(e);return n.jsonName&&(R[n.jsonName]?R[n.jsonName]+=1+t:R[n.jsonName]=1+t,y.indexOf(n.jsonName)!==-1||d[n.jsonName]||y.unshift(n.jsonName)),n.componentChunkName&&(R[n.componentChunkName]?R[n.componentChunkName]+=1+t:R[n.componentChunkName]=1+t,y.indexOf(n.componentChunkName)!==-1||d[n.jsonName]||y.unshift(n.componentChunkName)),y.sort(_),P.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:R}},getPages:function(){return{pathArray:m,pathCount:v}},getPage:function(e){return s(e)},has:function(e){return m.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};b&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(s(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),b=!1;var o=s(t);if(!o)return console.log("A page wasn't found for \""+t+'"'),n();if(t=o.path,p[t])return e.nextTick(function(){n(p[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[t]})}),p[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[t]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return E(o.componentChunkName,function(e,t){e&&console.log("Loading the component for "+o.path+" failed"),r=t,i()}),E(o.jsonName,function(e,t){e&&console.log("Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&E(o.layoutComponentChunkName,function(e,t){e&&console.log("Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return m.slice(-1)[0]},length:function(){return m.length},indexOf:function(e){return m.length-m.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:k.getResourcesForPathname};t.default=k}).call(t,n(306))},297:function(e,t){e.exports=[{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-chapters-black-hole-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"chapters-black-hole.json",path:"/chapters/black-hole/"}]},181:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(65),u=n(1),i=o(u),c=n(169),s=o(c),l=n(17),f=n(292),p=n(271),d=o(p),h=n(179),g=o(h),m=n(45),v=o(m),y=n(297),R=o(y),w=n(298),P=o(w),b=n(177),_=o(b),j=n(176),O=o(j),E=n(132),x=o(E);n(264),window.___emitter=v.default,x.default.addPagesArray(R.default),x.default.addProdRequires(O.default),window.asyncRequires=O.default,window.___loader=x.default,window.matchPath=l.matchPath;var k=P.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),C=function(e){var t=k[e];return null!=t&&(g.default.replace(t.toPath),!0)};C(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,t){C(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(182);var o=function(e){function t(n){n.page.path===x.default.getPage(e).path&&(v.default.off("onPostLoadPageResources",t),clearTimeout(o),window.___history.push(e))}var n=k[e];if(n&&(e=n.toPath),window.location.pathname!==e){var o=setTimeout(function(){v.default.off("onPostLoadPageResources",t),v.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);x.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):v.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],p=function(e){var t=e.children;return i.default.createElement(l.Router,{history:g.default},t)},h=(0,l.withRouter)(_.default);x.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(c?c:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(h,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return x.default.getPage(o.location.pathname)?(0,u.createElement)(_.default,r({page:!0},o)):(0,u.createElement)(_.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,d.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},298:function(e,t){e.exports=[]},182:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(45),a=o(r),u="/";u="/projects/jeff-mills-the-outer-limits/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},271:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},34:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},285:function(e,t,n){"use strict";t.onRouteUpdate=function(e){var t=e.location;"function"==typeof ga&&setTimeout(function(){window.ga("set","page",(t||{}).pathname),window.ga("send","pageview")},0)}},286:function(e,t,n){"use strict";n(202),n(203)},108:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=function e(t,l,f){if("string"!=typeof l){if(s){var p=c(l);p&&p!==s&&e(t,p,f)}var d=a(l);u&&(d=d.concat(u(l)));for(var h=0;h<d.length;++h){var g=d[h];if(!(n[g]||o[g]||f&&f[g])){var m=i(l,g);try{r(t,g,m)}catch(e){}}}return t}return t}},299:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(t,n)})}}}e.exports=n},36:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,i,c=n(e),s=1;s<arguments.length;s++){o=Object(arguments[s]);for(var l in o)a.call(o,l)&&(c[l]=o[l]);if(r){i=r(o);for(var f=0;f<i.length;f++)u.call(o,i[f])&&(c[i[f]]=o[i[f]])}}return c}},306:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){g&&d&&(g=!1,d.length?h=d.concat(h):m=-1,h.length&&i())}function i(){if(!g){var e=r(u);g=!0;for(var t=h.length;t;){for(d=h,h=[];++m<t;)d&&d[m].run();m=-1,t=h.length}d=null,g=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],g=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||g||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},281:function(e,t,n){n(34),e.exports=function(e){return n.e(0x9112fd61d73b,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(191)})})}},282:function(e,t,n){n(34),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(192)})})}}});
//# sourceMappingURL=app-2d07a16086358eca7407.js.map