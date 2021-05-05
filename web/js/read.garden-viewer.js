(()=>{var e={220:(e,t,n)=>{"use strict";t.__esModule=!0;var o=n(812),r={initialFixedMode:o.ViewerMode.WithScroll,initialFitMode:o.FitMode.Height,initialReadMode:!0,showPageSeparation:!1,zoom:{max:4,min:.1,steps:[.1,.2,.3,.4,.5,.75,1,1.25,1.5,1.75,2,2.5,3,3.5,4]},loadedContentsNumber:5,fontSize:{min:8,max:32,step:2},columnGap:216,pageChangeThreshold:40,chapterChangeThreshold:40,minCharsPerColumn:50,maxCharsPerColumn:70,initialFontSize:16,initialScale:1,readModeMargin:{top:0,right:0,bottom:0,left:0},uiModeMargin:{top:20,right:40,left:40,bottom:20}};t.default=r},926:function(e,t){"use strict";var n,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.__esModule=!0,t.setConfig=t.getConfig=void 0,t.getConfig=function(){return n},t.setConfig=function(e){return n=o(o({},n||{}),e)}},810:(e,t,n)=>{"use strict";t.__esModule=!0;var o={setScrollMode:n(449).default};t.default=o},449:function(e,t){"use strict";var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function l(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}u((o=o.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};t.__esModule=!0,t.default=function(e,t){return n(void 0,void 0,void 0,(function(){return o(this,(function(n){if("fixed"===t.scrollMode)throw new Error("Action not allowed in fixed mode");return[2,{scrollMode:e.scrollMode,layoutResetRequired:!0}]}))}))}},251:(e,t,n)=>{"use strict";t.__esModule=!0;var o={layout:n(267).LayoutTypes.Fixed,hasHorizontalScroll:!1,hasVerticalScroll:!1,horizontalTranslate:0,maxHorizontalTranslate:0,maxVerticalTranslate:0,minHorizontalTranslate:0,minVerticalTranslate:0,verticalTranslate:0};t.default=o},366:(e,t,n)=>{"use strict";t.__esModule=!0;var o={layout:n(267).LayoutTypes.Flow,columnsInViewport:2,fontFamily:"Helvetica",fontSize:18,textAlign:null,labels:[],snaps:[],totalChapterWidth:0,totalColumnWidth:0,totalColumns:0};t.default=o},555:(e,t)=>{"use strict";t.__esModule=!0,t.default={scale:1}},318:(e,t)=>{"use strict";t.__esModule=!0,t.default={scrollMode:"fixed",doublePage:!1}},853:(e,t)=>{"use strict";t.__esModule=!0,t.default={scrollMode:"horizontal",left:0,maxLeft:0,totalWidth:0,totalHeight:0,showPageSeparation:!1}},159:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function l(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};t.__esModule=!0;var i=n(147),a=n(461);t.default=function(e){return o(void 0,void 0,void 0,(function(){var t,n;return r(this,(function(o){switch(o.label){case 0:return t=i.getState(),[4,a.default(t,e)];case 1:return n=o.sent(),i.updateState(n),[2]}}))}))}},147:function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.__esModule=!0,t.updateState=t.getState=t.initializeState=void 0;var r,i=n(996),a=n(926),l=n(812),u=n(220),c=n(555),s=n(366),f=n(853),d=n(251),p=n(318);t.initializeState=function(e){var t=a.setConfig(o(o(o({},u.default),e),{zoom:o(o({},u.default.zoom),e.zoom||{}),fontSize:o(o({},u.default.fontSize),e.fontSize||{})})),n=t.initialReadMode?u.default.readModeMargin:u.default.uiModeMargin,i=t.initialReadMode?t.readModeMargin:t.uiModeMargin,h=o(o({},c.default),{config:t,margin:o(o({},n),i||{}),title:"Title",pageLabel:"1",pageNumber:1,scale:t.initialScale||c.default.scale,searchTerms:[]});if("flow"===t.layoutType&&(r=o(o(o(o({},h),s.default),f.default),{columnGap:t.columnGap,readMode:t.initialReadMode})),"fixed"===t.layoutType){var y=o(o({},d.default),{fitMode:t.initialFitMode});t.initialFixedMode===l.ViewerMode.Paginated&&(r=o(o(o({},h),y),p.default)),t.initialFixedMode===l.ViewerMode.WithScroll&&(r=o(o(o({},h),y),f.default))}},t.getState=function(){return r},t.updateState=function(e){r=i(r,e)}},461:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function l(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};t.__esModule=!0;var i=n(810);t.default=function(e,t){return o(void 0,void 0,void 0,(function(){var n;return r(this,(function(o){if(n=i.default[t.type])return[2,n(t,e)];throw Error('There is no dispatcher for the action "'+t.type+'"')}))}))}},267:(e,t)=>{"use strict";var n;t.__esModule=!0,t.LayoutTypes=void 0,(n=t.LayoutTypes||(t.LayoutTypes={})).Fixed="fixed",n.Flow="flow"},812:(e,t)=>{"use strict";var n,o;t.__esModule=!0,t.FitMode=t.ViewerMode=void 0,(o=t.ViewerMode||(t.ViewerMode={})).Paginated="paginated",o.WithScroll="withScroll",o.Flow="flow",(n=t.FitMode||(t.FitMode={})).Width="width",n.Height="height"},327:(e,t,n)=>{"use strict";t.__esModule=!0;var o=n(43),r=n(147),i=n(159);t.default=function(e){r.initializeState(e);var t={dispatch:i.default,state:r.getState()};return o.default.info("Viewer Initialized"),t}},996:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)},n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function r(e,t,n){return e.concat(t).map((function(e){return o(e,n)}))}function i(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function a(e,t){try{return t in e}catch(e){return!1}}function l(e,n,u){(u=u||{}).arrayMerge=u.arrayMerge||r,u.isMergeableObject=u.isMergeableObject||t,u.cloneUnlessOtherwiseSpecified=o;var c=Array.isArray(n);return c===Array.isArray(e)?c?u.arrayMerge(e,n,u):function(e,t,n){var r={};return n.isMergeableObject(e)&&i(e).forEach((function(t){r[t]=o(e[t],n)})),i(t).forEach((function(i){(function(e,t){return a(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,i)||(a(e,i)&&n.isMergeableObject(t[i])?r[i]=function(e,t){if(!t.customMerge)return l;var n=t.customMerge(e);return"function"==typeof n?n:l}(i,n)(e[i],t[i],n):r[i]=o(t[i],n))})),r}(e,n,u):o(n,u)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return l(e,n,t)}),{})};var u=l;e.exports=u},43:function(e,t,n){var o,r;!function(i,a){"use strict";void 0===(r="function"==typeof(o=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"];function r(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function i(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function a(o){return"debug"===o&&(o="log"),typeof console!==t&&("trace"===o&&n?i:void 0!==console[o]?r(console,o):void 0!==console.log?r(console,"log"):e)}function l(t,n){for(var r=0;r<o.length;r++){var i=o[r];this[i]=r<t?e:this.methodFactory(i,t,n)}this.log=this.debug}function u(e,n,o){return function(){typeof console!==t&&(l.call(this,n,o),this[e].apply(this,arguments))}}function c(e,t,n){return a(e)||u.apply(this,arguments)}function s(e,n,r){var i,a=this,u="loglevel";function s(){var e;if(typeof window!==t&&u){try{e=window.localStorage[u]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,o=n.indexOf(encodeURIComponent(u)+"=");-1!==o&&(e=/^([^;]+)/.exec(n.slice(o))[1])}catch(e){}return void 0===a.levels[e]&&(e=void 0),e}}"string"==typeof e?u+=":"+e:"symbol"==typeof e&&(u=void 0),a.name=e,a.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},a.methodFactory=r||c,a.getLevel=function(){return i},a.setLevel=function(n,r){if("string"==typeof n&&void 0!==a.levels[n.toUpperCase()]&&(n=a.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=a.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(i=n,!1!==r&&function(e){var n=(o[e]||"silent").toUpperCase();if(typeof window!==t&&u){try{return void(window.localStorage[u]=n)}catch(e){}try{window.document.cookie=encodeURIComponent(u)+"="+n+";"}catch(e){}}}(n),l.call(a,n,e),typeof console===t&&n<a.levels.SILENT)return"No console available for logging"},a.setDefaultLevel=function(e){s()||a.setLevel(e,!1)},a.enableAll=function(e){a.setLevel(a.levels.TRACE,e)},a.disableAll=function(e){a.setLevel(a.levels.SILENT,e)};var f=s();null==f&&(f=null==n?"WARN":n),a.setLevel(f,!1)}var f=new s,d={};f.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=d[e];return t||(t=d[e]=new s(e,f.getLevel(),f.methodFactory)),t};var p=typeof window!==t?window.log:void 0;return f.noConflict=function(){return typeof window!==t&&window.log===f&&(window.log=p),f},f.getLoggers=function(){return d},f.default=f,f})?o.call(t,n,t,e):o)||(e.exports=r)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";var e=n(43),t=n(327);e.default.setLevel("info"),window.readGardenViewer=t.default})()})();
