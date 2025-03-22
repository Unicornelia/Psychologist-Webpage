"use strict";(self.webpackChunkcsabaeszter=self.webpackChunkcsabaeszter||[]).push([[876],{978:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return b},P:function(){return E},S:function(){return O},_:function(){return o},a:function(){return i},b:function(){return A},g:function(){return c},h:function(){return l}});var r=a(6540),s=(a(5147),a(5556)),n=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(s[a]=e[a]);return s}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function A(e,t,a,r,s){return void 0===s&&(s={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function c(e,t,a,r,s,n,o,l){const A={};n&&(A.backgroundColor=n,"fixed"===a?(A.width=r,A.height=s,A.backgroundColor=n,A.position="relative"):("constrained"===a||"fullWidth"===a)&&(A.position="absolute",A.top=0,A.left=0,A.bottom=0,A.right=0)),o&&(A.objectFit=o),l&&(A.objectPosition=l);const c=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},A)});return c}const d=["children"],u=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg height='${s}' width='${a}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=o(e,d);return r.createElement(r.Fragment,null,r.createElement(u,i({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],m=function(e){let{src:t,srcSet:a,loading:s,alt:n="",shouldLoad:l}=e,A=o(e,g);return r.createElement("img",i({},A,{decoding:"async",loading:s,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,n=o(e,h);const l=n.sizes||(null==t?void 0:t.sizes),A=r.createElement(m,i({},n,t,{sizes:l,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:`${t}-${n}-${a}`,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:l})})),A):A};var y;m.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},f.displayName="Picture",f.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(f,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:s.string,sources:null==(y=f.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const b=function(e){return r.createElement(r.Fragment,null,r.createElement(f,i({},e)),r.createElement("noscript",null,r.createElement(f,i({},e,{shouldLoad:!0}))))};b.displayName="MainImage",b.propTypes=f.propTypes;const v=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(s)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:n().object.isRequired,alt:v},B=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],L=new Set;let k,x;const N=function(e){let{as:t="div",image:s,style:n,backgroundColor:A,className:c,class:d,onStartLoad:u,onLoad:p,onError:g}=e,h=o(e,B);const{width:m,height:f,layout:y}=s,w=function(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}(m,f,y),{style:E,className:b}=w,v=o(w,j),C=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);d&&(c=d);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='${a}' width='${t}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(y,m,f);return(0,r.useEffect)((()=>{k||(k=Promise.all([a.e(593),a.e(896)]).then(a.bind(a,7896)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(N);if(x&&L.has(N))return;let t,r;return k.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;C.current&&(C.current.innerHTML=a(i({isLoading:!0,isLoaded:L.has(N),image:s},h)),L.has(N)||(t=requestAnimationFrame((()=>{C.current&&(r=o(C.current,N,L,n,u,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{L.has(N)&&x&&(C.current.innerHTML=x(i({isLoading:L.has(N),isLoaded:L.has(N),image:s},h)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[s]),(0,r.createElement)(t,i({},v,{style:i({},E,n,{backgroundColor:A}),className:`${b}${c?` ${c}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},S=(0,r.memo)((function(e){return e.image?(0,r.createElement)(N,e):null}));S.propTypes=C,S.displayName="GatsbyImage";const Q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],R=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},T=new Set(["fixed","fullWidth","constrained"]),I={src:n().string.isRequired,alt:v,width:R,height:R,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!T.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}},O=(Y=S,function(e){let{src:t,__imageData:a,__error:s}=e,n=o(e,Q);return s&&console.warn(s),a?r.createElement(Y,i({image:a},n)):(console.warn("Image not loaded",t),null)});var Y;O.displayName="StaticImage",O.propTypes=I},4402:function(e,t,a){var r=a(978),s=a(1250),n=a(9331);const i=s.default.div.withConfig({displayName:"BackgroundImage__BackgroundImageWrapper",componentId:"sc-9b44va-0"})(["position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1;overflow:hidden;"]);t.A=()=>(0,n.Y)(i,null,(0,n.Y)(r.S,{src:"../images/pastelshapes2.jpg",alt:"Background",layout:"fullWidth",placeholder:"blurred",style:{height:"100vh",objectFit:"cover"},__imageData:a(6436)}))},5147:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let s=0;s<e.length;s++){const n=e[s];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,s)+"-"+e.slice(s),t=!1,r=a,a=!0,s++):a&&r&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,s-1)+"-"+e.slice(s-1),r=a,a=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,r=a,a=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},6436:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgABBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAemiAWR//8QAGhABAQACAwAAAAAAAAAAAAAAAQACAxESMf/aAAgBAQABBQIZntHmzLiG/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAEBEgIf/aAAgBAQAGPwIYo//EABoQAAMAAwEAAAAAAAAAAAAAAAABEUFRYZH/2gAIAQEAAT8ho4vR6NeDoo0yqp//2gAMAwEAAgADAAAAEOMf/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8QV//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxAMn//EABoQAQEAAwEBAAAAAAAAAAAAAAERACExQXH/2gAIAQEAAT8QG/J0bPmckde+ZR5+Q3ARCbusRwCOKMS5/9k="},"images":{"fallback":{"src":"/static/d7ac32050ec9ee09a0c5e68840782df3/5267c/pastelshapes2.jpg","srcSet":"/static/d7ac32050ec9ee09a0c5e68840782df3/7284f/pastelshapes2.jpg 750w,\\n/static/d7ac32050ec9ee09a0c5e68840782df3/29ba9/pastelshapes2.jpg 1080w,\\n/static/d7ac32050ec9ee09a0c5e68840782df3/c8896/pastelshapes2.jpg 1366w,\\n/static/d7ac32050ec9ee09a0c5e68840782df3/5267c/pastelshapes2.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/d7ac32050ec9ee09a0c5e68840782df3/57584/pastelshapes2.webp 750w,\\n/static/d7ac32050ec9ee09a0c5e68840782df3/984df/pastelshapes2.webp 1080w,\\n/static/d7ac32050ec9ee09a0c5e68840782df3/4a276/pastelshapes2.webp 1366w,\\n/static/d7ac32050ec9ee09a0c5e68840782df3/9c00f/pastelshapes2.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.6666666666666666}')}}]);
//# sourceMappingURL=b383053df8df2d6499b3aebfe4d8705076030ece-bf5fba3482eefaba7d72.js.map