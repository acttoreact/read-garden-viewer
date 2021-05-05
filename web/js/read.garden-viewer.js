(()=>{var e={220:(e,t,n)=>{"use strict";t.__esModule=!0;var o=n(746),r={debugViewerSafeArea:!1,initialFixedMode:o.ViewerMode.WithScroll,initialFitMode:o.FitMode.Height,initialReadMode:!0,showPageSeparation:!1,zoom:{max:4,min:.1,steps:[.1,.2,.3,.4,.5,.75,1,1.25,1.5,1.75,2,2.5,3,3.5,4]},loadedContentsNumber:5,fontSize:{min:8,max:32,step:2},columnGap:216,pageChangeThreshold:40,chapterChangeThreshold:40,minCharsPerColumn:50,maxCharsPerColumn:70,initialFontSize:16,initialScale:1,readModeMargin:{top:0,right:0,bottom:0,left:0},uiModeMargin:{top:20,right:40,left:40,bottom:20}};t.default=r},926:function(e,t){"use strict";var n,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.__esModule=!0,t.setConfig=t.getConfig=void 0,t.getConfig=function(){return n},t.setConfig=function(e){return n=o(o({},n||{}),e)}},810:(e,t,n)=>{"use strict";t.__esModule=!0;var o=n(449),r=n(780),a={setScrollMode:o.default,setDebugViewerSafeArea:r.default};t.default=a},780:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};t.__esModule=!0;var a=n(726);t.default=function(e){return o(void 0,void 0,void 0,(function(){return r(this,(function(t){return a.default("debug-viewer-safe-area",""+(e.value?1:0)),[2,{debugViewerSafeArea:e.value}]}))}))}},449:function(e,t){"use strict";var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((o=o.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};t.__esModule=!0,t.default=function(e,t){return n(void 0,void 0,void 0,(function(){return o(this,(function(n){if("fixed"===t.scrollMode)throw new Error("Action not allowed in fixed mode");return[2,{scrollMode:e.scrollMode,layoutResetRequired:!0}]}))}))}},251:(e,t,n)=>{"use strict";t.__esModule=!0;var o={layout:n(267).LayoutTypes.Fixed,hasHorizontalScroll:!1,hasVerticalScroll:!1,horizontalTranslate:0,maxHorizontalTranslate:0,maxVerticalTranslate:0,minHorizontalTranslate:0,minVerticalTranslate:0,verticalTranslate:0};t.default=o},366:(e,t,n)=>{"use strict";t.__esModule=!0;var o={layout:n(267).LayoutTypes.Flow,columnsInViewport:2,fontFamily:"Helvetica",fontSize:18,textAlign:null,labels:[],snaps:[],totalChapterWidth:0,totalColumnWidth:0,totalColumns:0};t.default=o},555:(e,t)=>{"use strict";t.__esModule=!0,t.default={scale:1,basicDOMElementsCreated:!1}},318:(e,t)=>{"use strict";t.__esModule=!0,t.default={scrollMode:"fixed",doublePage:!1}},853:(e,t)=>{"use strict";t.__esModule=!0,t.default={scrollMode:"horizontal",left:0,maxLeft:0,totalWidth:0,totalHeight:0,showPageSeparation:!1}},159:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};t.__esModule=!0;var a=n(147),i=n(461);t.default=function(e){return o(void 0,void 0,void 0,(function(){var t,n;return r(this,(function(o){switch(o.label){case 0:return t=a.getState(),[4,i.default(t,e)];case 1:return n=o.sent(),a.updateState(n),[2]}}))}))}},147:function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.__esModule=!0,t.updateState=t.getState=t.initializeState=void 0;var r,a=n(746),i=n(555),l=n(366),u=n(853),c=n(251),s=n(318),d=n(220),f=n(926);t.initializeState=function(e){var t=f.setConfig(o(o(o({},d.default),e),{zoom:o(o({},d.default.zoom),e.zoom||{}),fontSize:o(o({},d.default.fontSize),e.fontSize||{})})),n=t.initialReadMode?d.default.readModeMargin:d.default.uiModeMargin,p=t.initialReadMode?t.readModeMargin:t.uiModeMargin,h=o(o({},i.default),{config:t,margin:o(o({},n),p||{}),title:"Title",pageLabel:"1",pageNumber:1,scale:t.initialScale||i.default.scale,searchTerms:[],debugViewerSafeArea:t.debugViewerSafeArea});if("flow"===t.layoutType&&(r=o(o(o(o({},h),l.default),u.default),{columnGap:t.columnGap,readMode:t.initialReadMode})),"fixed"===t.layoutType){var v=o(o({},c.default),{fitMode:t.initialFitMode});t.initialFixedMode===a.ViewerMode.Paginated&&(r=o(o(o({},h),v),s.default)),t.initialFixedMode===a.ViewerMode.WithScroll&&(r=o(o(o({},h),v),u.default))}},t.getState=function(){return r},t.updateState=function(e){var t=r;Object.keys(e).forEach((function(n){t[n]=e[n]}))}},461:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};t.__esModule=!0;var a=n(810);t.default=function(e,t){return o(void 0,void 0,void 0,(function(){var n;return r(this,(function(o){if(n=a.default[t.type])return[2,n(t,e)];throw Error('There is no dispatcher for the action "'+t.type+'"')}))}))}},267:(e,t)=>{"use strict";var n;t.__esModule=!0,t.LayoutTypes=void 0,(n=t.LayoutTypes||(t.LayoutTypes={})).Fixed="fixed",n.Flow="flow"},746:(e,t)=>{"use strict";var n,o;t.__esModule=!0,t.FitMode=t.ViewerMode=void 0,(o=t.ViewerMode||(t.ViewerMode={})).Paginated="paginated",o.WithScroll="withScroll",o.Flow="flow",(n=t.FitMode||(t.FitMode={})).Width="width",n.Height="height"},609:(e,t,n)=>{"use strict";t.__esModule=!0;var o=n(147),r=n(726);t.default=function(e){var t=document.createElement("div");t.id="rg-viewer",document.body.appendChild(t);var n=document.createElement("div");n.classList.add("rg-content-wrapper"),t.appendChild(n);var a=document.createElement("div");a.classList.add("rg-total-width-calculator"),n.appendChild(a);var i=document.createElement("div");i.classList.add("rg-bg-cleaner"),n.appendChild(i);var l=document.createElement("div");l.classList.add("rg-additional-page"),n.appendChild(l.cloneNode(!0));var u=document.createElement("div");n.appendChild(u);var c=document.createElement("div");c.classList.add("rg-end-of-chapter-calculator"),c.dataset.page="-",n.appendChild(c);for(var s=0;s<10;s++){var d=l.cloneNode(!0);9===s&&(d.classList.add("rg-real-end-of-chapter"),d.textContent="realEndOfChapter"),n.appendChild(d)}var f=document.createElement("div");f.classList.add("rg-pages-labels"),t.appendChild(f);var p=document.createElement("div");p.classList.add("rg-highlights","rg-selection"),t.appendChild(p);var h=document.createElement("div");h.classList.add("rg-highlights","rg-selectors"),t.appendChild(h);var v=document.createElement("div");v.classList.add("rg-highlights","rg-search"),t.appendChild(v),r.default("debug-viewer-safe-area",""+(e.debugViewerSafeArea?1:0)),o.updateState({basicDOMElementsCreated:!0,readGardenViewerNode:t,contentWrapperNode:n,totalWidthCalculatorNode:a,contentPlaceholderNode:u,endOfChapterCalculatorNode:c,pagesLabelsNode:f,selectionHighlightsNode:p,selectionSelectorsNode:h,searchTermsHighlightsNode:v})}},327:(e,t,n)=>{"use strict";t.__esModule=!0;var o=n(43),r=n(147),a=n(159),i=n(609);t.default=function(e){r.initializeState(e);var t={dispatch:a.default,state:r.getState()};return i.default(t.state),o.default.info("Viewer Initialized"),t}},726:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){document.documentElement.style.setProperty("--"+e,t)}},43:function(e,t,n){var o,r;!function(a,i){"use strict";void 0===(r="function"==typeof(o=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"];function r(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(o){return"debug"===o&&(o="log"),typeof console!==t&&("trace"===o&&n?a:void 0!==console[o]?r(console,o):void 0!==console.log?r(console,"log"):e)}function l(t,n){for(var r=0;r<o.length;r++){var a=o[r];this[a]=r<t?e:this.methodFactory(a,t,n)}this.log=this.debug}function u(e,n,o){return function(){typeof console!==t&&(l.call(this,n,o),this[e].apply(this,arguments))}}function c(e,t,n){return i(e)||u.apply(this,arguments)}function s(e,n,r){var a,i=this,u="loglevel";function s(){var e;if(typeof window!==t&&u){try{e=window.localStorage[u]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,o=n.indexOf(encodeURIComponent(u)+"=");-1!==o&&(e=/^([^;]+)/.exec(n.slice(o))[1])}catch(e){}return void 0===i.levels[e]&&(e=void 0),e}}"string"==typeof e?u+=":"+e:"symbol"==typeof e&&(u=void 0),i.name=e,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=r||c,i.getLevel=function(){return a},i.setLevel=function(n,r){if("string"==typeof n&&void 0!==i.levels[n.toUpperCase()]&&(n=i.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(a=n,!1!==r&&function(e){var n=(o[e]||"silent").toUpperCase();if(typeof window!==t&&u){try{return void(window.localStorage[u]=n)}catch(e){}try{window.document.cookie=encodeURIComponent(u)+"="+n+";"}catch(e){}}}(n),l.call(i,n,e),typeof console===t&&n<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(e){s()||i.setLevel(e,!1)},i.enableAll=function(e){i.setLevel(i.levels.TRACE,e)},i.disableAll=function(e){i.setLevel(i.levels.SILENT,e)};var d=s();null==d&&(d=null==n?"WARN":n),i.setLevel(d,!1)}var d=new s,f={};d.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=f[e];return t||(t=f[e]=new s(e,d.getLevel(),d.methodFactory)),t};var p=typeof window!==t?window.log:void 0;return d.noConflict=function(){return typeof window!==t&&window.log===d&&(window.log=p),d},d.getLoggers=function(){return f},d.default=d,d})?o.call(t,n,t,e):o)||(e.exports=r)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}(()=>{"use strict";var e=n(43),t=n(327);e.default.setLevel("info"),window.readGardenViewer=t.default})()})();