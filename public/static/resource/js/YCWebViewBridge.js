!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.YCWebViewBridge=e():t.YCWebViewBridge=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,r){"use strict";function n(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function o(t){return"string"===n(t)&&""===t.replace(/^\s+/,"").replace(/\s+$/,"")}function i(t,e){var r=n(e);if("string"===r){if(n(t)===e.toLowerCase())return;throw new Error("target type should be a "+r)}if("array"===r){if(e.some(function(e){return n(t)===e}))return;throw new Error("target type should be included in ["+e+"]")}throw new Error("validation parameter types should be string or array")}Object.defineProperty(e,"__esModule",{value:!0}),e.getType=n,e.isEmpty=o,e.default=i},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=r(6),u=n(i),a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=r(16),s=r(0),c=n(s),h="_global_",l={},p=function(){function t(e){o(this,t),(0,c.default)(e,["string","undefined"]),this.spaceName=e||h,this.cache=this._getCache()}return a(t,[{key:"_getCache",value:function(){var t=l[this.spaceName];return t||(t=l[this.spaceName]={}),t}},{key:"on",value:function(t,e){"array"!==(0,s.getType)(this.cache[t])&&(this.cache[t]=[]),this.cache[t].push(e)}},{key:"once",value:function(t,e){if("string"===(0,s.getType)(t)&&"function"===(0,s.getType)(e)){var r=this,n=(0,f.after)(e,function(){return r.off(t,n)});this.on(t,n)}}},{key:"one",value:function(t,e){"string"===(0,s.getType)(t)&&"function"===(0,s.getType)(e)&&(this.off(t),this.on(t,e))}},{key:"off",value:function(t,e){"string"===(0,s.getType)(t)&&("function"===(0,s.getType)(e)?(0,u.default)(this.cache[t],function(t){return t===e}):this.cache[t]=null)}},{key:"emit",value:function(t){for(var e=this,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];if("string"!==(0,s.getType)(t))return 0;if("array"!==(0,s.getType)(this.cache[t]))return 0;var i=this.cache[t];return i.forEach(function(t){t.apply(e,n)}),i.length}}],[{key:"getCache",value:function(t){return l[t]}}]),t}();e.default=p},function(t,e,r){"use strict";function n(t){var e=window.YCJSBridge;"object"===(0,f.getType)(e)?t(null,e):t(new Error(s+"don't exist"))}function o(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"NOOP";if(!(0,f.isEmpty)(t)){var n={};return"object"===(0,f.getType)(e)&&(n=e),{eventName:t,params:n,dispatchId:r}}}function i(t){if("string"!==(0,f.getType)(t)||(0,f.isEmpty)(t)){var e="decodeData is not a string";return{err:e}}var r=a.Base64.decode(t);return JSON.parse(r)}function u(t){if("object"!==(0,f.getType)(t)||(0,f.isEmpty)(t)){var e="encodeData is not a json object";return e}var r=JSON.stringify(t);return a.Base64.encode(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.CALL_NATIVE_KEY=e.ANDROID_JAVASCRIPT_INTERFACE_OBJECT_NAME=void 0,e.getInterfaceObject=n,e.getBridgeParameter=o,e.decodeData=i,e.encodeData=u;var a=r(20),f=r(0),s=e.ANDROID_JAVASCRIPT_INTERFACE_OBJECT_NAME="YCJSBridge";e.CALL_NATIVE_KEY="evaluateJava"},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(5),i=n(o),u=r(19),a=n(u),f=r(2),s=function(){var t=null;return(0,f.getInterfaceObject)(function(e,r){t=e?i.default:a.default}),t}();e.default=s},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(1),a=n(u),f=r(17),s=n(f),c=r(0),h=function(){},l={ok:!0,data:{signal:"noop"}},p=function(){function t(e){o(this,t),this.events=new a.default(e)}return i(t,[{key:"ready",value:function(t){s.default.ready(t)}},{key:"on",value:function(t,e){var r=this;this.ready(function(n){r.events.on(t,e),n.registerHandler(t,function(e,n){r.events.emit(t,e,n)})})}},{key:"one",value:function(t,e){this.events.off(t,null),this.on(t,e)}},{key:"once",value:function(t,e){var r=this;this.ready(function(n){r.events.once(t,e),n.registerHandler(t,function(e,n){r.events.emit(t,e,n)})})}},{key:"off",value:function(t,e){this.events.off(t,e)}},{key:"callNative",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=e,o=r;"function"===(0,c.getType)(e)?(n=l,o=e):e||(n=l,o=h),this.ready(function(e){e.callHandler(t,n,o)})}}]),t}();e.default=p},function(t,e,r){function n(t,e){var r=[];if(!t||!t.length)return r;var n=-1,u=[],a=t.length;for(e=o(e,3);++n<a;){var f=t[n];e(f,n,t)&&(r.push(f),u.push(n))}return i(t,u),r}var o=r(7),i=r(8);t.exports=n},function(t,e){function r(t){return t}t.exports=r},function(t,e,r){function n(t,e){for(var r=t?e.length:0,n=r-1;r--;){var u=e[r];if(r==n||u!==f){var f=u;i(u)?a.call(t,u,1):o(t,u)}}return t}var o=r(9),i=r(15),u=Array.prototype,a=u.splice;t.exports=n},function(t,e,r){function n(t,e){return e=o(e,t),null==(t=u(t,e))||delete t[a(i(e))]}var o=r(10),i=r(12),u=r(13),a=r(14);t.exports=n},function(t,e,r){function n(){if(!arguments.length)return[];var t=arguments[0];return o(t)?t:[t]}var o=r(11);t.exports=n},function(t,e){var r=Array.isArray;t.exports=r},function(t,e){function r(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}t.exports=r},function(t,e){function r(t){return t}t.exports=r},function(t,e){function r(t){return t}t.exports=r},function(t,e){function r(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<e}var n=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.after=function(t,e){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=t.apply(void 0,n);return e.apply(void 0,n),i}};e.before=function(t,e){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e.apply(void 0,n),t.apply(void 0,n)}},e.currying=function(t){var e=[];return function r(){for(var o=this,i=arguments.length,u=Array(i),a=0;a<i;a++)u[a]=arguments[a];return 0===u.length?n(function(){return t.apply(o,e)},function(){return e.splice(0,e.length)})():([].push.apply(e,u),r)}},e.compose=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ready=void 0;var n=r(18),o=function(t){return t&&t.__esModule?t:{default:t}}(n),i=e.ready=function(t){if(window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var e=document.createElement("iframe");e.style.display="none",o.default.isAndroid?e.src="androidHttps://__bridge_loaded__":e.src="https://__bridge_loaded__",document.documentElement.appendChild(e),setTimeout(function(){return document.documentElement.removeChild(e)},0)};e.default={ready:i}},function(t,e,r){"use strict";function n(){var t=navigator.userAgent.toLowerCase(),e=-1!==t.indexOf("android")?1:0;return{isAndroid:e,isiOS:!!t.match(/\(i[^;]+;( u;)? cpu.+mac os x/),isiPhone:t.indexOf("iphone")>-1||t.indexOf("mac")>-1,isiPad:t.indexOf("ipad")>-1,isWeChat:-1!==t.indexOf("micromessenger")?1:0,isQQ:"qq/"===t.match(/qq\//i),androidVersion:!!e&&t.substr(t.indexOf("android")+8,1)}}Object.defineProperty(e,"__esModule",{value:!0}),e.BROWSER=n,e.default=n()},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(1),a=n(u),f=r(2),s=r(25),c=n(s),h="__callbackEmiter",l=function(){function t(e){o(this,t),this.events=new a.default(e),this.callbackEmiter=new a.default(h),window.__YCBridge__={dispatch:this._YCDispatch.bind(this),responseCallback:this._YCResponseCallback.bind(this)}}return i(t,[{key:"on",value:function(t,e){this.events.on(t,e)}},{key:"one",value:function(t,e){this.events.off(t,null),this.on(t,e)}},{key:"once",value:function(t,e){this.events.once(t,e)}},{key:"off",value:function(t,e){this.events.off(t,e)}},{key:"callNative",value:function(t,e,r){var n=this;(0,f.getInterfaceObject)(function(o,i){if(!o){var u=void 0;if("function"==typeof window.YCJSBridge.evaluateJava){if("function"!=typeof r)u=(0,f.getBridgeParameter)(t,e);else{var a=t+"_"+(0,c.default)();n.callbackEmiter.once(a,function(t){r(t)}),u=(0,f.getBridgeParameter)(t,e,a)}n.__AndroidEvaluateJava(u)}}})}},{key:"_YCDispatch",value:function(t){var e=this,r=(0,f.decodeData)(t),n=r.eventName,o=r.params,i=void 0===o?{}:o,u=r.dispatchId,a=function(t){return t};"NOOP"!==u&&(a=function(t){var r=(0,f.getBridgeParameter)(n,t,u);e.__AndroidResponseCallback(r)});var s=this.events.emit(n,i,a);if(0===s){var c={ok:!1,errCode:404},h=(0,f.getBridgeParameter)(n,c,u);this.__AndroidResponseCallback(h)}}},{key:"_YCResponseCallback",value:function(t){var e=(0,f.decodeData)(t),r=e.eventName,n=e.params,o=void 0===n?{}:n;this.callbackEmiter.emit(r,o)}},{key:"__AndroidResponseCallback",value:function(t){var e=(0,f.encodeData)(t);window.YCJSBridge.responseCallback(e)}},{key:"__AndroidEvaluateJava",value:function(t){var e=(0,f.encodeData)(t);window.YCJSBridge.evaluateJava(e)}}]),t}();e.default=l},function(t,e,r){(function(n){var o,i;!function(e,r){t.exports=r(e)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:this,function(n){"use strict";var u,a=n.Base64;if(void 0!==t&&t.exports)try{u=r(21).Buffer}catch(t){}var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=function(t){for(var e={},r=0,n=t.length;r<n;r++)e[t.charAt(r)]=r;return e}(f),c=String.fromCharCode,h=function(t){if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?c(192|e>>>6)+c(128|63&e):c(224|e>>>12&15)+c(128|e>>>6&63)+c(128|63&e)}var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return c(240|e>>>18&7)+c(128|e>>>12&63)+c(128|e>>>6&63)+c(128|63&e)},l=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,p=function(t){return t.replace(l,h)},d=function(t){var e=[0,2,1][t.length%3],r=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[f.charAt(r>>>18),f.charAt(r>>>12&63),e>=2?"=":f.charAt(r>>>6&63),e>=1?"=":f.charAt(63&r)].join("")},g=n.btoa?function(t){return n.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,d)},y=u?u.from&&u.from!==Uint8Array.from?function(t){return(t.constructor===u.constructor?t:u.from(t)).toString("base64")}:function(t){return(t.constructor===u.constructor?t:new u(t)).toString("base64")}:function(t){return g(p(t))},v=function(t,e){return e?y(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):y(String(t))},w=function(t){return v(t,!0)},b=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),_=function(t){switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),r=e-65536;return c(55296+(r>>>10))+c(56320+(1023&r));case 3:return c((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return c((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},A=function(t){return t.replace(b,_)},m=function(t){var e=t.length,r=e%4,n=(e>0?s[t.charAt(0)]<<18:0)|(e>1?s[t.charAt(1)]<<12:0)|(e>2?s[t.charAt(2)]<<6:0)|(e>3?s[t.charAt(3)]:0),o=[c(n>>>16),c(n>>>8&255),c(255&n)];return o.length-=[0,0,2,1][r],o.join("")},E=n.atob?function(t){return n.atob(t)}:function(t){return t.replace(/[\s\S]{1,4}/g,m)},B=u?u.from&&u.from!==Uint8Array.from?function(t){return(t.constructor===u.constructor?t:u.from(t,"base64")).toString()}:function(t){return(t.constructor===u.constructor?t:new u(t,"base64")).toString()}:function(t){return A(E(t))},R=function(t){return B(String(t).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},P=function(){var t=n.Base64;return n.Base64=a,t};if(n.Base64={VERSION:"2.4.3",atob:E,btoa:g,fromBase64:R,toBase64:v,utob:p,encode:v,encodeURI:w,btou:A,decode:R,noConflict:P},"function"==typeof Object.defineProperty){var C=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};n.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",C(function(){return R(this)})),Object.defineProperty(String.prototype,"toBase64",C(function(t){return v(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",C(function(){return v(this,!0)}))}}return n.Meteor&&(Base64=n.Base64),void 0!==t&&t.exports?t.exports.Base64=n.Base64:(o=[],void 0!==(i=function(){return n.Base64}.apply(e,o))&&(t.exports=i)),{Base64:n.Base64}})}).call(e,r(3))},function(t,e,r){"use strict";(function(t){function n(){return i.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,e){if(n()<e)throw new RangeError("Invalid typed array length");return i.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=i.prototype):(null===t&&(t=new i(e)),t.length=e),t}function i(t,e,r){if(!(i.TYPED_ARRAY_SUPPORT||this instanceof i))return new i(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return s(this,t)}return u(this,t,e,r)}function u(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?l(t,e,r,n):"string"==typeof e?c(t,e,r):p(t,e)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e,r,n){return a(e),e<=0?o(t,e):void 0!==r?"string"==typeof n?o(t,e).fill(r,n):o(t,e).fill(r):o(t,e)}function s(t,e){if(a(e),t=o(t,e<0?0:0|d(e)),!i.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function c(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!i.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|y(e,r);t=o(t,n);var u=t.write(e,r);return u!==n&&(t=t.slice(0,u)),t}function h(t,e){var r=e.length<0?0:0|d(e.length);t=o(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function l(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),i.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=i.prototype):t=h(t,e),t}function p(t,e){if(i.isBuffer(e)){var r=0|d(e.length);return t=o(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||Q(e.length)?o(t,0):h(t,e);if("Buffer"===e.type&&$(e.data))return h(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function g(t){return+t!=t&&(t=0),i.alloc(+t)}function y(t,e){if(i.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return H(t).length;default:if(n)return z(t).length;e=(""+e).toLowerCase(),n=!0}}function v(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return Y(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return O(this,e,r);case"latin1":case"binary":return U(this,e,r);case"base64":return C(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function b(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=i.from(e,n)),i.isBuffer(e))return 0===e.length?-1:_(t,e,r,n,o);if("number"==typeof e)return e&=255,i.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):_(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function _(t,e,r,n,o){function i(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}var u=1,a=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u=2,a/=2,f/=2,r/=2}var s;if(o){var c=-1;for(s=r;s<a;s++)if(i(t,s)===i(e,-1===c?0:s-c)){if(-1===c&&(c=s),s-c+1===f)return c*u}else-1!==c&&(s-=s-c),c=-1}else for(r+f>a&&(r=a-f),s=r;s>=0;s--){for(var h=!0,l=0;l<f;l++)if(i(t,s+l)!==i(e,l)){h=!1;break}if(h)return s}return-1}function A(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var a=parseInt(e.substr(2*u,2),16);if(isNaN(a))return u;t[r+u]=a}return u}function m(t,e,r,n){return K(z(e,t.length-r),t,r,n)}function E(t,e,r,n){return K(W(e),t,r,n)}function B(t,e,r,n){return E(t,e,r,n)}function R(t,e,r,n){return K(H(e),t,r,n)}function P(t,e,r,n){return K(q(e,t.length-r),t,r,n)}function C(t,e,r){return 0===e&&r===t.length?X.fromByteArray(t):X.fromByteArray(t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i=t[o],u=null,a=i>239?4:i>223?3:i>191?2:1;if(o+a<=r){var f,s,c,h;switch(a){case 1:i<128&&(u=i);break;case 2:f=t[o+1],128==(192&f)&&(h=(31&i)<<6|63&f)>127&&(u=h);break;case 3:f=t[o+1],s=t[o+2],128==(192&f)&&128==(192&s)&&(h=(15&i)<<12|(63&f)<<6|63&s)>2047&&(h<55296||h>57343)&&(u=h);break;case 4:f=t[o+1],s=t[o+2],c=t[o+3],128==(192&f)&&128==(192&s)&&128==(192&c)&&(h=(15&i)<<18|(63&f)<<12|(63&s)<<6|63&c)>65535&&h<1114112&&(u=h)}}null===u?(u=65533,a=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),o+=a}return S(n)}function S(t){var e=t.length;if(e<=G)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=G));return r}function O(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function U(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function Y(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=V(t[i]);return o}function x(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function I(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function k(t,e,r,n,o,u){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<u)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function M(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function D(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function j(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function L(t,e,r,n,o){return o||j(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),Z.write(t,e,r,n,23,4),r+4}function N(t,e,r,n,o){return o||j(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),Z.write(t,e,r,n,52,8),r+8}function J(t){if(t=F(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function F(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function V(t){return t<16?"0"+t.toString(16):t.toString(16)}function z(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],u=0;u<n;++u){if((r=t.charCodeAt(u))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function W(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function q(t,e){for(var r,n,o,i=[],u=0;u<t.length&&!((e-=2)<0);++u)r=t.charCodeAt(u),n=r>>8,o=r%256,i.push(o),i.push(n);return i}function H(t){return X.toByteArray(J(t))}function K(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function Q(t){return t!==t}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var X=r(22),Z=r(23),$=r(24);e.Buffer=i,e.SlowBuffer=g,e.INSPECT_MAX_BYTES=50,i.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=n(),i.poolSize=8192,i._augment=function(t){return t.__proto__=i.prototype,t},i.from=function(t,e,r){return u(null,t,e,r)},i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0})),i.alloc=function(t,e,r){return f(null,t,e,r)},i.allocUnsafe=function(t){return s(null,t)},i.allocUnsafeSlow=function(t){return s(null,t)},i.isBuffer=function(t){return!(null==t||!t._isBuffer)},i.compare=function(t,e){if(!i.isBuffer(t)||!i.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,u=Math.min(r,n);o<u;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,e){if(!$(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=i.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var u=t[r];if(!i.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,o),o+=u.length}return n},i.byteLength=y,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)w(this,e,e+1);return this},i.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},i.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},i.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):v.apply(this,arguments)},i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},i.prototype.compare=function(t,e,r,n,o){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var u=o-n,a=r-e,f=Math.min(u,a),s=this.slice(n,o),c=t.slice(e,r),h=0;h<f;++h)if(s[h]!==c[h]){u=s[h],a=c[h];break}return u<a?-1:a<u?1:0},i.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},i.prototype.indexOf=function(t,e,r){return b(this,t,e,r,!0)},i.prototype.lastIndexOf=function(t,e,r){return b(this,t,e,r,!1)},i.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return A(this,t,e,r);case"utf8":case"utf-8":return m(this,t,e,r);case"ascii":return E(this,t,e,r);case"latin1":case"binary":return B(this,t,e,r);case"base64":return R(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var G=4096;i.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n;if(i.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=i.prototype;else{var o=e-t;n=new i(o,void 0);for(var u=0;u<o;++u)n[u]=this[u+t]}return n},i.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},i.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},i.prototype.readUInt8=function(t,e){return e||I(t,1,this.length),this[t]},i.prototype.readUInt16LE=function(t,e){return e||I(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUInt16BE=function(t,e){return e||I(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUInt32LE=function(t,e){return e||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUInt32BE=function(t,e){return e||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},i.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},i.prototype.readInt8=function(t,e){return e||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,e){e||I(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt16BE=function(t,e){e||I(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt32LE=function(t,e){return e||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,e){return e||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,e){return e||I(t,4,this.length),Z.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,e){return e||I(t,4,this.length),Z.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,e){return e||I(t,8,this.length),Z.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,e){return e||I(t,8,this.length),Z.read(this,t,!1,52,8)},i.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){k(this,t,e,r,Math.pow(2,8*r)-1,0)}var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},i.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){k(this,t,e,r,Math.pow(2,8*r)-1,0)}var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},i.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,1,255,0),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},i.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},i.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},i.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):D(this,t,e,!0),e+4},i.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},i.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);k(this,t,e,r,o-1,-o)}var i=0,u=1,a=0;for(this[e]=255&t;++i<r&&(u*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/u>>0)-a&255;return e+r},i.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);k(this,t,e,r,o-1,-o)}var i=r-1,u=1,a=0;for(this[e+i]=255&t;--i>=0&&(u*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/u>>0)-a&255;return e+r},i.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,1,127,-128),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},i.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},i.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},i.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,2147483647,-2147483648),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):D(this,t,e,!0),e+4},i.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},i.prototype.writeFloatLE=function(t,e,r){return L(this,t,e,!0,r)},i.prototype.writeFloatBE=function(t,e,r){return L(this,t,e,!1,r)},i.prototype.writeDoubleLE=function(t,e,r){return N(this,t,e,!0,r)},i.prototype.writeDoubleBE=function(t,e,r){return N(this,t,e,!1,r)},i.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,u=n-r;if(this===t&&r<e&&e<n)for(o=u-1;o>=0;--o)t[o+e]=this[o+r];else if(u<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<u;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+u),e);return u},i.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!i.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var u;if("number"==typeof t)for(u=e;u<r;++u)this[u]=t;else{var a=i.isBuffer(t)?t:z(new i(t,n).toString()),f=a.length;for(u=0;u<r-e;++u)this[u+e]=a[u%f]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,r(3))},function(t,e,r){"use strict";function n(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function o(t){return 3*t.length/4-n(t)}function i(t){var e,r,o,i,u,a=t.length;i=n(t),u=new h(3*a/4-i),r=i>0?a-4:a;var f=0;for(e=0;e<r;e+=4)o=c[t.charCodeAt(e)]<<18|c[t.charCodeAt(e+1)]<<12|c[t.charCodeAt(e+2)]<<6|c[t.charCodeAt(e+3)],u[f++]=o>>16&255,u[f++]=o>>8&255,u[f++]=255&o;return 2===i?(o=c[t.charCodeAt(e)]<<2|c[t.charCodeAt(e+1)]>>4,u[f++]=255&o):1===i&&(o=c[t.charCodeAt(e)]<<10|c[t.charCodeAt(e+1)]<<4|c[t.charCodeAt(e+2)]>>2,u[f++]=o>>8&255,u[f++]=255&o),u}function u(t){return s[t>>18&63]+s[t>>12&63]+s[t>>6&63]+s[63&t]}function a(t,e,r){for(var n,o=[],i=e;i<r;i+=3)n=(t[i]<<16)+(t[i+1]<<8)+t[i+2],o.push(u(n));return o.join("")}function f(t){for(var e,r=t.length,n=r%3,o="",i=[],u=0,f=r-n;u<f;u+=16383)i.push(a(t,u,u+16383>f?f:u+16383));return 1===n?(e=t[r-1],o+=s[e>>2],o+=s[e<<4&63],o+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],o+=s[e>>10],o+=s[e>>4&63],o+=s[e<<2&63],o+="="),i.push(o),i.join("")}e.byteLength=o,e.toByteArray=i,e.fromByteArray=f;for(var s=[],c=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,d=l.length;p<d;++p)s[p]=l[p],c[l.charCodeAt(p)]=p;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,r,n,o){var i,u,a=8*o-n-1,f=(1<<a)-1,s=f>>1,c=-7,h=r?o-1:0,l=r?-1:1,p=t[e+h];for(h+=l,i=p&(1<<-c)-1,p>>=-c,c+=a;c>0;i=256*i+t[e+h],h+=l,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=n;c>0;u=256*u+t[e+h],h+=l,c-=8);if(0===i)i=1-s;else{if(i===f)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=s}return(p?-1:1)*u*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var u,a,f,s=8*i-o-1,c=(1<<s)-1,h=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),e+=u+h>=1?l/f:l*Math.pow(2,1-h),e*f>=2&&(u++,f/=2),u+h>=c?(a=0,u=c):u+h>=1?(a=(e*f-1)*Math.pow(2,o),u+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,o),u=0));o>=8;t[r+p]=255&a,p+=d,a/=256,o-=8);for(u=u<<o|a,s+=o;s>0;t[r+p]=255&u,p+=d,u/=256,s-=8);t[r+p-d]|=128*g}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e,r){"use strict";function n(){return++o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var o=0}]).default});