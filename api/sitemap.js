module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}({"./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t),t.default={SITE:{NAME:"",CANONICAL:"",GA:""},BUSINESS:{NAME:"",ADDRESS:"",ADDRESS_2:"",CITY:"",POSTCODE:""},SOCIAL_MEDIA:{FACEBOOK:"",TWITTER:"",INSTAGRAM:""}}},"./src/config/patchPreactSSR.js":
/*!**************************************!*\
  !*** ./src/config/patchPreactSSR.js ***!
  \**************************************/
/*! no exports provided */function(e,t,r){"use strict";r.r(t),function(e){var t=r(/*! path */"path"),n=r.n(t),o=r(/*! module-alias */"module-alias");r.n(o).a.addAliases({react:"preact/compat","react-dom":"preact","create-react-class":n.a.resolve(e,"./create-preact-class")})}.call(this,"/")},"./src/site/Loading.js":
/*!*****************************!*\
  !*** ./src/site/Loading.js ***!
  \*****************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o}));r(/*! preact/compat */"preact/compat");var n=r(/*! preact */"preact");function o(){return Object(n.h)("h1",null,"A module is loading")}},"./src/site/urls.js":
/*!**************************!*\
  !*** ./src/site/urls.js ***!
  \**************************/
/*! exports provided: STATIC */function(e,t,r){"use strict";r.r(t),r.d(t,"STATIC",(function(){return n}));const n={HOME:"",ANOTHERPAGE:"longer/url/for/sitemap"}},"./src/sitemap/renderer.js":
/*!*********************************!*\
  !*** ./src/sitemap/renderer.js ***!
  \*********************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);r(/*! ../config/patchPreactSSR */"./src/config/patchPreactSSR.js");var n=r(/*! ../config */"./src/config/index.js"),o=r(/*! ../site/urls */"./src/site/urls.js"),s=r(/*! date-fns */"date-fns"),c=r(/*! ../utils */"./src/utils/index.js");const a={HOME:{changefreq:"yearly",priority:.5,lastmod:new Date("2019-10-02")},ANOTHERPAGE:{changefreq:"daily",priority:.5,lastmod:new Date("2019-09-12")}};t.default=async(e,t)=>{new Date;const r=[];return Object.keys(o.STATIC).forEach(e=>{const{changefreq:t,priority:n,lastmod:s}=a[e],c=o.STATIC[e];r.push({loc:c,lastmod:s,changefreq:t,priority:n})}),t.setHeader("Content-Type","text/xml"),t.send('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset> \n'.replace("</urlset>",r.reduce((e,{loc:t,lastmod:r,changefreq:o,priority:a})=>(process&&process.env&&process.env.COMPILE,e+`\n    <url>\n      <loc>${t.length?Object(c.urljoin)(n.default.SITE.CANONICAL,t):n.default.SITE.CANONICAL}</loc>\n      <lastmod>${Object(s.format)(r,"yyyy-MM-dd")}</lastmod>\n      ${o?"<changefreq>"+o+"</changefreq>":""}\n      <priority>${a}</priority>\n   </url>`),"")+"</urlset>"))}},"./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: loadable, urljoin */function(e,t,r){"use strict";r.r(t);var n=r(/*! ./loadable */"./src/utils/loadable.js");r.d(t,"loadable",(function(){return n.default}));var o=r(/*! ./urljoin */"./src/utils/urljoin.js");r.d(t,"urljoin",(function(){return o.default}))},"./src/utils/loadable.js":
/*!*******************************!*\
  !*** ./src/utils/loadable.js ***!
  \*******************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));var n=r(/*! preact */"preact"),o=r(/*! @loadable/component */"@loadable/component"),s=r.n(o),c=r(/*! ../site/Loading */"./src/site/Loading.js");function a(e){return s()(e,{fallback:Object(n.h)(c.default,null)})}},"./src/utils/urljoin.js":
/*!******************************!*\
  !*** ./src/utils/urljoin.js ***!
  \******************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t),t.default=function(...e){let t,r;return r="*"!=e[-1]||e[-1].endsWith("/")?"/":"",t=e[0].startsWith("http")||e[0].startsWith("/")?"":"/",t+e.join("/")+r}},0:
/*!***************************************!*\
  !*** multi ./src/sitemap/renderer.js ***!
  \***************************************/
/*! no static exports found */function(e,t,r){e.exports=r(/*! /home/adrian_villa/code/fwrlines/template-preact-ssr/src/sitemap/renderer.js */"./src/sitemap/renderer.js")},"@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */function(e,t){e.exports=require("@loadable/component")},"date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */function(e,t){e.exports=require("date-fns")},"module-alias":
/*!*******************************!*\
  !*** external "module-alias" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("module-alias")},path:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */function(e,t){e.exports=require("path")},preact:
/*!*************************!*\
  !*** external "preact" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("preact")},"preact/compat":
/*!********************************!*\
  !*** external "preact/compat" ***!
  \********************************/
/*! no static exports found */function(e,t){e.exports=require("preact/compat")}});