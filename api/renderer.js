module.exports=function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.e=function(){return Promise.resolve()},s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){process.nextTick((function(){throw e}))},s(s.s=0)}({"./public/loadable-stats.json":
/*!************************************!*\
  !*** ./public/loadable-stats.json ***!
  \************************************/
/*! exports provided: errors, warnings, version, hash, publicPath, outputPath, assetsByChunkName, assets, filteredAssets, entrypoints, namedChunkGroups, logging, children, default */function(e){e.exports=JSON.parse('{"errors":[],"warnings":[],"version":"4.41.5","hash":"11e2fba582f38ab88af3","publicPath":"/","outputPath":"/home/adrian_villa/code/fwrlines/template-preact-ssr/public","assetsByChunkName":{"chunk-bar-baz":"0.main.js","css.animated_v_caret":["62f76.css","1.main.js"],"css.epsilon":["0e433.css","2.main.js"],"css.number_increase":["0e433.css","3.main.js"],"main":["1326e.css","main.js"]},"assets":[{"name":"0.main.js","size":2037,"chunks":[0],"chunkNames":["chunk-bar-baz"],"info":{},"emitted":false},{"name":"0e433.css","size":1,"chunks":[2,3],"chunkNames":["css.epsilon","css.number_increase"],"info":{"immutable":true},"emitted":false},{"name":"1.main.js","size":109,"chunks":[1],"chunkNames":["css.animated_v_caret"],"info":{},"emitted":false},{"name":"1326e.css","size":10755,"chunks":[4],"chunkNames":["main"],"info":{"immutable":true},"emitted":false},{"name":"2.main.js","size":109,"chunks":[2],"chunkNames":["css.epsilon"],"info":{},"emitted":false},{"name":"3.main.js","size":109,"chunks":[3],"chunkNames":["css.number_increase"],"info":{},"emitted":false},{"name":"62f76.css","size":159,"chunks":[1],"chunkNames":["css.animated_v_caret"],"info":{"immutable":true},"emitted":false},{"name":"index.html","size":961,"chunks":[],"chunkNames":[],"info":{},"emitted":false},{"name":"main.js","size":276760,"chunks":[4],"chunkNames":["main"],"info":{},"emitted":false}],"filteredAssets":0,"entrypoints":{"main":{"chunks":[4],"assets":["1326e.css","main.js"],"children":{"preload":[{"name":"chunk-bar-baz","chunks":[0],"assets":["0.main.js"]}]},"childAssets":{"preload":["0.main.js"]}}},"namedChunkGroups":{"main":{"chunks":[4],"assets":["1326e.css","main.js"],"children":{"preload":[{"name":"chunk-bar-baz","chunks":[0],"assets":["0.main.js"]}]},"childAssets":{"preload":["0.main.js"]}},"chunk-bar-baz":{"chunks":[0],"assets":["0.main.js"],"children":{},"childAssets":{}},"css.epsilon":{"chunks":[2],"assets":["0e433.css","2.main.js"],"children":{},"childAssets":{}},"css.animated_v_caret":{"chunks":[1],"assets":["62f76.css","1.main.js"],"children":{},"childAssets":{}},"css.number_increase":{"chunks":[3],"assets":["0e433.css","3.main.js"],"children":{},"childAssets":{}}},"logging":{"webpack.buildChunkGraph.visitModules":{"entries":[],"filteredEntries":5,"debug":false}},"children":[{"errors":[],"warnings":[],"publicPath":"/","outputPath":"/home/adrian_villa/code/fwrlines/template-preact-ssr/public","assetsByChunkName":{},"assets":[{"name":"index.html","size":546520,"chunks":[0],"chunkNames":[],"info":{},"emitted":false}],"filteredAssets":0,"entrypoints":{"undefined":{"chunks":[0],"assets":["index.html"],"children":{},"childAssets":{}}},"namedChunkGroups":{"undefined":{"chunks":[0],"assets":["index.html"],"children":{},"childAssets":{}}},"logging":{"webpack.buildChunkGraph.visitModules":{"entries":[],"filteredEntries":2,"debug":false}},"children":[],"name":"html-webpack-plugin for \\"index.html\\""},{"errors":[],"warnings":[],"publicPath":"/","outputPath":"/home/adrian_villa/code/fwrlines/template-preact-ssr/public","assetsByChunkName":{},"assets":[],"filteredAssets":0,"entrypoints":{"mini-css-extract-plugin":{"chunks":[0],"assets":["*"],"children":{},"childAssets":{}}},"namedChunkGroups":{"mini-css-extract-plugin":{"chunks":[0],"assets":["*"],"children":{},"childAssets":{}}},"logging":{"webpack.buildChunkGraph.visitModules":{"entries":[],"filteredEntries":2,"debug":false}},"children":[],"name":"mini-css-extract-plugin node_modules/css-loader/dist/cjs.js!node_modules/postcss-loader/src/index.js!node_modules/sass-loader/dist/cjs.js!../ds/dist/es/core/AnimatedVCaret/animated_v_caret.scss"},{"errors":[],"warnings":[],"publicPath":"/","outputPath":"/home/adrian_villa/code/fwrlines/template-preact-ssr/public","assetsByChunkName":{},"assets":[],"filteredAssets":0,"entrypoints":{"mini-css-extract-plugin":{"chunks":[0],"assets":["*"],"children":{},"childAssets":{}}},"namedChunkGroups":{"mini-css-extract-plugin":{"chunks":[0],"assets":["*"],"children":{},"childAssets":{}}},"logging":{"webpack.buildChunkGraph.visitModules":{"entries":[],"filteredEntries":2,"debug":false}},"children":[],"name":"mini-css-extract-plugin node_modules/css-loader/dist/cjs.js!node_modules/postcss-loader/src/index.js!node_modules/sass-loader/dist/cjs.js!../ds/dist/es/core/Epsilon/epsilon.scss"},{"errors":[],"warnings":[],"publicPath":"/","outputPath":"/home/adrian_villa/code/fwrlines/template-preact-ssr/public","assetsByChunkName":{},"assets":[],"filteredAssets":0,"entrypoints":{"mini-css-extract-plugin":{"chunks":[0],"assets":["*"],"children":{},"childAssets":{}}},"namedChunkGroups":{"mini-css-extract-plugin":{"chunks":[0],"assets":["*"],"children":{},"childAssets":{}}},"logging":{"webpack.buildChunkGraph.visitModules":{"entries":[],"filteredEntries":2,"debug":false}},"children":[],"name":"mini-css-extract-plugin node_modules/css-loader/dist/cjs.js!node_modules/postcss-loader/src/index.js!node_modules/sass-loader/dist/cjs.js!../ds/dist/es/core/NumberIncrease/number_increase.scss"},{"errors":[],"warnings":[],"publicPath":"/","outputPath":"/home/adrian_villa/code/fwrlines/template-preact-ssr/public","assetsByChunkName":{},"assets":[],"filteredAssets":0,"entrypoints":{"mini-css-extract-plugin":{"chunks":[0],"assets":["*"],"children":{},"childAssets":{}}},"namedChunkGroups":{"mini-css-extract-plugin":{"chunks":[0],"assets":["*"],"children":{},"childAssets":{}}},"logging":{"webpack.buildChunkGraph.visitModules":{"entries":[],"filteredEntries":2,"debug":false}},"children":[],"name":"mini-css-extract-plugin node_modules/css-loader/dist/cjs.js!node_modules/postcss-loader/src/index.js!node_modules/sass-loader/dist/cjs.js!node_modules/@fwrlines/alphabet-scss/main.scss"}]}')},"./src/components/AsyncClock.js":
/*!**************************************!*\
  !*** ./src/components/AsyncClock.js ***!
  \**************************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t);var n=s(/*! ../utils */"./src/utils/index.js");t.default=Object(n.loadable)({resolved:{},chunkName:()=>"chunk-bar-baz",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!s.m[t]},importAsync:()=>Promise.resolve().then(s.bind(null,/*! ./Clock.js */"./src/components/Clock.js")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return s(t)},resolve(){/*! ./Clock.js */
return"./src/components/Clock.js"}})},"./src/components/Clock.js":
/*!*********************************!*\
  !*** ./src/components/Clock.js ***!
  \*********************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t);var n=s(/*! preact */"preact");class r extends n.Component{constructor(...e){var t,s,n;super(...e),t=this,s="state",n={time:Date.now()},s in t?Object.defineProperty(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n}componentDidMount(){this.timer=setInterval(()=>{this.setState({time:Date.now()})},1e3)}componentWillUnmount(){clearInterval(this.timer)}render(){let e=new Date(this.state.time).toLocaleTimeString();return Object(n.h)("h1",{class:"x-secondary cx"},e," ","local time")}}t.default=r},"./src/components/QueryTester.js":
/*!***************************************!*\
  !*** ./src/components/QueryTester.js ***!
  \***************************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t);var n=s(/*! preact */"preact"),r=s(/*! @apollo/react-hooks */"@apollo/react-hooks"),i=s(/*! react-helmet */"react-helmet"),a=s(/*! graphql-tag */"graphql-tag"),c=s.n(a);t.default=({props:e})=>{const{loading:t,error:s,data:a={}}=Object(r.useQuery)(c()("query {\n  getHello {\n    y\n  }\n}\n"));return console.log("data",a,s),t?Object(n.h)("p",null,"Loading ..."):Object(n.h)(n.Fragment,null,Object(n.h)(i.Helmet,null,Object(n.h)("title",null,"Preact SSR Example with GraphQl"),Object(n.h)("link",{rel:"canonical",href:"http://mysite.com/example"})),a&&Object(n.h)(n.Fragment,null,"DATA :",a.getHello.y))}},"./src/config/patchPreactSSR.js":
/*!**************************************!*\
  !*** ./src/config/patchPreactSSR.js ***!
  \**************************************/
/*! no exports provided */function(e,t,s){"use strict";s.r(t),function(e){var t=s(/*! path */"path"),n=s.n(t),r=s(/*! module-alias */"module-alias");s.n(r).a.addAliases({react:"preact/compat","react-dom":"preact","create-react-class":n.a.resolve(e,"./create-preact-class")})}.call(this,"/")},"./src/graphql/getClientSSR.js":
/*!*************************************!*\
  !*** ./src/graphql/getClientSSR.js ***!
  \*************************************/
/*! exports provided: getClient */function(e,t,s){"use strict";s.r(t),s.d(t,"getClient",(function(){return u}));var n=s(/*! apollo-client */"apollo-client"),r=s(/*! apollo-link */"apollo-link"),i=s(/*! apollo-link-http */"apollo-link-http"),a=s(/*! apollo-link-retry */"apollo-link-retry"),c=s(/*! apollo-cache-inmemory */"apollo-cache-inmemory"),l=s(/*! node-fetch */"node-fetch"),o=s.n(l);function u(e){const t=function(e){const t=Object(i.createHttpLink)({uri:e,fetch:o.a}),s=new a.RetryLink({delay:{initial:1e4,max:2e3,jitter:!0},attempts:{max:2,retryIf:(e,t)=>!!e}});return r.ApolloLink.from([s,t])}(e);return new n.ApolloClient({link:t,cache:new c.InMemoryCache,ssrForceFetchDelay:900,ssrMode:!0})}},"./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t);s(/*! ./config/patchPreactSSR */"./src/config/patchPreactSSR.js");var n=s(/*! preact */"preact"),r=s(/*! @apollo/react-hooks */"@apollo/react-hooks"),i=s(/*! @loadable/server */"@loadable/server"),a=s(/*! react-router-dom */"react-router-dom"),c=s(/*! react-helmet */"react-helmet"),l=s(/*! ./graphql/getClientSSR */"./src/graphql/getClientSSR.js"),o=s(/*! @apollo/react-ssr */"@apollo/react-ssr"),u=s(/*! ./site/App.js */"./src/site/App.js"),d=s(/*! preact-render-to-string */"preact-render-to-string"),p=s.n(d),h=s(/*! ../public/loadable-stats.json */"./public/loadable-stats.json");const m=Object(l.getClient)(process&&process.env&&process.env.GRAPHQL_ENDPOINT||"https://api.fwrlines.com/graphql"),f={};t.default=async(e,t)=>{const s=new i.ChunkExtractor({stats:h}),l=Object(n.h)(r.ApolloProvider,{client:m},Object(n.h)(a.StaticRouter,{location:e.url,context:f},Object(n.h)(u.default,null))),d=await(b=s.collectChunks(l),Object(o.getMarkupFromTree)({tree:b,renderFunction:p.a}));var b;console.log(e.method," ",e.baseUrl||e.url);const g=s.getScriptTags(),k=s.getLinkTags(),j=s.getStyleTags(),v=c.Helmet.renderStatic();return t.send('<!DOCTYPE html>\n<html lang="it">\n  <head>\n    <title></title>\n\t\t<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n\t\t<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n\t\t<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n\t\t<link rel="manifest" href="/manifest.json">\n\t\t<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#060930">\n\t\t<meta name="robots" content="index, follow">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t<meta name="msapplication-TileColor" content="#060930">\n\t\t<meta name="theme-color" content="#ffffff">\n    <meta name=\'twitter:site\' content="@meccamico" />\n    <meta name=\'twitter:creator\' content="@meccamico" />\n    <meta property=\'og:site_name\' content="Meccamico" />\n  </head>\n  <body>\n\t\t<div id="main"></div>\n  </body>\n</html>\n\n\n'.replace('<div id="main"></div>',`<div id="main">${d}</div>`).replace("</body>",g+`<script>window.__APOLLO_STATE__ = ${JSON.stringify(m.extract())}<\/script>`+"</body>").replace("<title></title>",v.title.toString()+v.meta.toString()+k+j).replace(/(\r\n|\n|\r)/gm,"").replace(/\s\s+/g,""))}},"./src/site/App.js":
/*!*************************!*\
  !*** ./src/site/App.js ***!
  \*************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t);var n=s(/*! preact */"preact"),r=s(/*! preact/hooks */"preact/hooks"),i=s(/*! ../components/AsyncClock */"./src/components/AsyncClock.js"),a=s(/*! ../components/QueryTester */"./src/components/QueryTester.js"),c=s(/*! @fwrlines/ds */"@fwrlines/ds");t.default=()=>{const[e,t]=Object(r.useState)(!1);return Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Preact test"),Object(n.h)("h2",null,"Includes",Object(n.h)(c.AnimatedVCaret,{active:e,setActive:t,id:"myarrow",width:"200px"})),Object(n.h)("ul",null,Object(n.h)("li",null,"SSR"),Object(n.h)("li",null,"Lighthouse 100/100 ootb"),Object(n.h)("li",null,"Apollo")),Object(n.h)(i.default,{thing:"thing",thing2:"thing2"}),Object(n.h)(a.default,null))}},"./src/site/Loading.js":
/*!*****************************!*\
  !*** ./src/site/Loading.js ***!
  \*****************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return r}));s(/*! preact/compat */"preact/compat");var n=s(/*! preact */"preact");function r(){return Object(n.h)("h1",null,"A module is loading")}},"./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: loadable, urljoin */function(e,t,s){"use strict";s.r(t);var n=s(/*! ./loadable */"./src/utils/loadable.js");s.d(t,"loadable",(function(){return n.default}));var r=s(/*! ./urljoin */"./src/utils/urljoin.js");s.d(t,"urljoin",(function(){return r.default}))},"./src/utils/loadable.js":
/*!*******************************!*\
  !*** ./src/utils/loadable.js ***!
  \*******************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return c}));var n=s(/*! preact */"preact"),r=s(/*! @loadable/component */"@loadable/component"),i=s.n(r),a=s(/*! ../site/Loading */"./src/site/Loading.js");function c(e){return i()(e,{fallback:Object(n.h)(a.default,null)})}},"./src/utils/urljoin.js":
/*!******************************!*\
  !*** ./src/utils/urljoin.js ***!
  \******************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t),t.default=function(...e){let t,s;return s="*"!=e[-1]||e[-1].endsWith("/")?"/":"",t=e[0].startsWith("http")||e[0].startsWith("/")?"":"/",t+e.join("/")+s}},0:
/*!*******************************!*\
  !*** multi ./src/renderer.js ***!
  \*******************************/
/*! no static exports found */function(e,t,s){e.exports=s(/*! /home/adrian_villa/code/fwrlines/template-preact-ssr/src/renderer.js */"./src/renderer.js")},"@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */function(e,t){e.exports=require("@apollo/react-hooks")},"@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */function(e,t){e.exports=require("@apollo/react-ssr")},"@fwrlines/ds":
/*!*******************************!*\
  !*** external "@fwrlines/ds" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("@fwrlines/ds")},"@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */function(e,t){e.exports=require("@loadable/component")},"@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("@loadable/server")},"apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */function(e,t){e.exports=require("apollo-cache-inmemory")},"apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */function(e,t){e.exports=require("apollo-client")},"apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=require("apollo-link")},"apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("apollo-link-http")},"apollo-link-retry":
/*!************************************!*\
  !*** external "apollo-link-retry" ***!
  \************************************/
/*! no static exports found */function(e,t){e.exports=require("apollo-link-retry")},"graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=require("graphql-tag")},"module-alias":
/*!*******************************!*\
  !*** external "module-alias" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("module-alias")},"node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("node-fetch")},path:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */function(e,t){e.exports=require("path")},preact:
/*!*************************!*\
  !*** external "preact" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("preact")},"preact-render-to-string":
/*!******************************************!*\
  !*** external "preact-render-to-string" ***!
  \******************************************/
/*! no static exports found */function(e,t){e.exports=require("preact-render-to-string")},"preact/compat":
/*!********************************!*\
  !*** external "preact/compat" ***!
  \********************************/
/*! no static exports found */function(e,t){e.exports=require("preact/compat")},"preact/hooks":
/*!*******************************!*\
  !*** external "preact/hooks" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("preact/hooks")},"react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("react-helmet")},"react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("react-router-dom")}});