(function(e){function t(t){for(var o,i,c=t[0],u=t[1],a=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,a||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,c=1;c<r.length;c++){var u=r[c];0!==n[u]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={app:0},s=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"018b":function(e,t,r){},1268:function(e,t,r){"use strict";r("a645")},"178b":function(e,t,r){"use strict";r("018b")},5148:function(e,t,r){"use strict";r("9fc8")},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("7a23");const n=Object(o["g"])("h1",null,[Object(o["g"])("a",{href:"https://github.com/ndabAP/vue-command"},"vue-command")],-1),s=Object(o["g"])("p",null,"A fully working, most feature-rich Vue.js terminal emulator.",-1),i=Object(o["g"])("pre",null,[Object(o["h"])("      "),Object(o["g"])("code",null,"\n$ npm install --save vue-command\n      "),Object(o["h"])("\n    ")],-1);function c(e,t){const r=Object(o["A"])("vue-command");return Object(o["s"])(),Object(o["f"])("main",null,[n,s,Object(o["i"])(r,{history:e.history,"onUpdate:history":t[0]||(t[0]=t=>e.history=t),query:e.query,"onUpdate:query":t[1]||(t[1]=t=>e.query=t),commands:e.commands,prompt:e.prompt,"help-text":"Type in help","show-help":""},null,8,["history","query","commands","prompt"]),i])}r("14d9");const u=(e,t)=>e&&t,a=(e,t)=>e||t;var l=r("22d1"),d=r.n(l),p=r("5b05"),b=r.n(p),m=r("4d97"),j=r.n(m),h=r("23bc"),y=r.n(h),O=r("2326"),f=r.n(O),v=r("23db"),_=r.n(v);const g={class:"vue-command__query"},P={key:0,class:"vue-command__query__prompt"},w=["disabled","placeholder","onKeydown"];var x={__name:"VueCommandQuery",setup(e,{expose:t}){const r=Object(o["m"])("dispatch"),n=Object(o["m"])("hidePrompt"),s=Object(o["m"])("optionsResolver"),i=Object(o["m"])("parser"),c=Object(o["m"])("programs"),a=Object(o["m"])("setCursorPosition"),l=Object(o["m"])("setQuery"),p=Object(o["m"])("terminal"),m=Object(o["x"])(!1),h=Object(o["x"])(""),O=Object(o["x"])(""),v=Object(o["x"])(""),x=Object(o["x"])(null),q=()=>{if(_()(v.value))return;const e=I(v.value),t=d()(e);for(const r of c.value)if(r.startsWith(t)){if(u(b()(r.length,f()(v.value).length),y()(s)&&y()(i)))return void s(r,i(v.value),l);if(j()(r.length,f()(v.value).length))return void l(r)}},k=()=>{x.value.focus()},F=e=>{},Q=()=>{m.value=!0,r(v.value)},C=Object(o["G"])(v,()=>{a(x.value.selectionStart)}),H=Object(o["G"])(()=>p.value.cursorPosition,e=>{x.value.setSelectionRange(e,e)}),T=Object(o["G"])(()=>p.value.query,e=>{v.value=e}),S=Object(o["G"])(m,()=>{T(),C(),H(),S(),h.value=""});return Object(o["q"])(()=>{O.value=p.value.prompt}),Object(o["r"])(()=>{k();const e=Object(o["m"])("helpText"),t=Object(o["m"])("helpTimeout"),r=Object(o["m"])("showHelp");if(u(r,!m.value)){const r=setTimeout(()=>{h.value=e},t),n=Object(o["G"])(m,()=>{clearTimeout(r),n()})}}),t({focus:k}),(e,t)=>(Object(o["s"])(),Object(o["f"])("div",g,[Object(o["D"])(n)?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("span",P,Object(o["C"])(O.value),1)),Object(o["H"])(Object(o["g"])("input",{ref_key:"queryRef",ref:x,"onUpdate:modelValue":t[0]||(t[0]=e=>v.value=e),class:"vue-command__query__input",disabled:m.value,placeholder:h.value,autocapitalize:"none",autocorrect:"off",type:"text",onClick:t[1]||(t[1]=t=>Object(o["D"])(a)(e.$refs.queryRef.selectionStart)),onInput:t[2]||(t[2]=e=>Object(o["D"])(l)(e.target.value)),onKeydown:[Object(o["I"])(Object(o["J"])(q,["exact","prevent"]),["tab"]),Object(o["I"])(Object(o["J"])(F,["ctrl","exact","prevent"]),["r"])],onKeyup:t[3]||(t[3]=Object(o["I"])(Object(o["J"])(e=>Q(e.target.value),["exact"]),["enter"]))},null,40,w),[[o["E"],v.value]])]))}};r("ef06");const q=x;var k=q,F=r("91bb"),Q=r.n(F),C=r("5226"),H=r.n(C);const T="ArrowUp",S="ArrowDown",R=(e,t="command not found",r="VueCommandNotFound")=>G(`${e}: ${t}`,r),G=(e,t="VueCommandStdout",r=!1)=>Object(o["n"])(Object(o["j"])({name:t,setup(){const e=Object(o["m"])("exit");Object(o["r"])(e)},render:()=>r?Object(o["l"])("div",{innerHTML:e}):Object(o["l"])("div",e)})),E=()=>Object(o["n"])(k),A=(e,t)=>{const r=e.vueCommandHistoryRef,o=e=>{switch(e.key){case T:case S:switch(e.preventDefault(),e.key){case T:t.decrementHistory();break;case S:t.incrementHistory();break}}};r.addEventListener("keydown",o)},I=e=>Q()(H()(e)," "),D=()=>[A],L=()=>[E()];var V=r("c832"),$=r.n(V),N=r("f9cd"),J=r.n(N),z=r("65de"),B=r.n(z),M=r("881d"),K=r.n(M),U=r("e3b4"),W=r.n(U);const X=Object(o["g"])("div",{class:"vue-command__actions"},[Object(o["g"])("span",{class:"vue-command__actions__button vue-command__actions__button--close"}),Object(o["g"])("span",{class:"vue-command__actions__button vue-command__actions__button--minimize"}),Object(o["g"])("span",{class:"vue-command__actions__button vue-command__actions__button--fullscreen"})],-1);var Y={__name:"VueCommand",props:{commands:{default:()=>({}),required:!1,type:Object},cursorPosition:{default:0,required:!1,type:Number},dispatchedQueries:{default:new Set,required:!1,type:Set},eventResolver:{default:D,required:!1,type:Array},helpText:{required:!1,type:String},helpTimeout:{default:3500,required:!1,type:Number},hidePrompt:{default:!1,required:!1,type:Boolean},history:{default:L,required:!1,type:Array},historyPosition:{default:0,required:!1,type:Number},isFullscreen:{default:!1,required:!1,type:Boolean},optionsResolver:{default:null,required:!1,type:Function},parser:{default:I,required:!1,type:Function},prompt:{default:"~$",required:!1,type:String},showHelp:{default:!1,required:!1,type:Boolean},query:{default:"",required:!1,type:String}},emits:["update:cursorPosition","update:dispatchedQueries","update:history","update:historyPosition","update:isFullscreen","update:query"],setup(e,{expose:t,emit:r}){const n=e,s=Object(o["x"])(null),i=Object(o["x"])(null),c=Object(o["x"])(null),l=Object(o["w"])({cursorPosition:n.cursorPosition,dispatchedQueries:n.dispatchedQueries,history:n.history,historyPosition:n.historyPosition,isFullscreen:n.isFullscreen,prompt:n.prompt,query:n.query}),p=Object(o["b"])(()=>({cursorPosition:l.cursorPosition,dispatchedQueries:l.dispatchedQueries,history:l.history,historyPosition:l.historyPosition,isFullscreen:l.isFullscreen,prompt:l.prompt,query:l.query})),b=Object(o["b"])(()=>Object.keys(n.commands)),m=Object(o["b"])(()=>e=>a(!l.isFullscreen,u(l.isFullscreen,B()(e,l.history.length-1)))),j=Object(o["b"])(()=>e=>u(l.isFullscreen,B()(e,l.history.length-1))),h=e=>{l.dispatchedQueries.delete(e),l.dispatchedQueries.add(e),r("update:dispatchedQueries",l.dispatchedQueries)},O=(...e)=>{l.history.push(...e),r("update:history",l.history)},f=()=>{if(W()(l.dispatchedQueries.size-1,l.historyPosition)){w(l.historyPosition+1);const e=K()([...l.dispatchedQueries],l.historyPosition);x(e)}},v=()=>{if(!B()(l.historyPosition,0)){w(l.historyPosition-1);const e=K()([...l.dispatchedQueries],l.historyPosition);x(e)}},g=e=>{l.cursorPosition=e,r("update:cursorPosition",e)},P=e=>{l.isFullscreen=e,r("update:isFullscreen",e)},w=e=>{l.historyPosition=e,r("update:historyPosition",e)},x=e=>{l.query=e,r("update:query",e)},q=()=>{if(l.isFullscreen)return;const e=J()(l.history);if(!B()($()(e,"__name"),"VueCommandQuery"))return;const t=J()(s.value),r=$()(t,"focus");r()},k=()=>{w(l.dispatchedQueries.size)},F=async e=>{if(_()(e))return void O(E());h(e);const t=n.parser(e),r=d()(I(e)),s=$()(n.commands,r);if(!y()(s))return void O(R(r));const i=await Promise.resolve(s(t));if(B()($()(i,"__name"),"VueCommandQuery")){const e=i;return void O(e)}const c=Object(o["j"])({provide(){return{context:{rawQuery:e,parsedQuery:t}}},render:()=>Object(o["l"])(i)});O(Object(o["n"])(c))},Q=()=>{O(E()),k(),g(0),P(!1),x("")},C=async()=>{await Object(o["o"])(),i.value.scrollTop=i.value.scrollHeight};return Object(o["G"])(l.history,async()=>{await C()}),Object(o["G"])(()=>n.cursorPosition,e=>{l.cursorPosition=e}),Object(o["G"])(()=>n.dispatchedQueries,e=>{l.dispatchedQueries=e}),Object(o["G"])(()=>n.history,e=>{l.history=e}),Object(o["G"])(()=>n.historyPosition,e=>{l.historyPosition=e}),Object(o["G"])(()=>n.isFullscreen,e=>{l.isFullscreen=e}),Object(o["G"])(()=>n.prompt,e=>{l.prompt=e}),Object(o["G"])(()=>n.query,e=>{l.query=e}),Object(o["r"])(()=>{const e=Object(o["k"])();for(const t of n.eventResolver)t(e.refs,e.exposed)}),Object(o["u"])("addDispatchedQuery",h),Object(o["u"])("dispatch",F),Object(o["u"])("decrementHistory",v),Object(o["u"])("exit",Q),Object(o["u"])("helpText",n.helpText),Object(o["u"])("helpTimeout",n.helpTimeout),Object(o["u"])("hidePrompt",n.hidePrompt),Object(o["u"])("incrementHistory",f),Object(o["u"])("optionsResolver",n.optionsResolver),Object(o["u"])("parser",n.parser),Object(o["u"])("programs",b),Object(o["u"])("setCursorPosition",g),Object(o["u"])("setFullscreen",P),Object(o["u"])("setHistoryPosition",w),Object(o["u"])("showHelp",n.showHelp),Object(o["u"])("setQuery",x),Object(o["u"])("terminal",p),t({addDispatchedQuery:h,decrementHistory:v,dispatch:F,exit:Q,incrementHistory:f,programs:b,setCursorPosition:g,setFullscreen:P,setHistoryPosition:w,setQuery:x,terminal:p}),(e,t)=>(Object(o["s"])(),Object(o["f"])("div",{ref_key:"vueCommandRef",ref:c,class:"vue-command"},[Object(o["z"])(e.$slots,"bar",{},()=>[X]),Object(o["g"])("div",{ref_key:"vueCommandHistoryRef",ref:i,class:"vue-command__history",onClick:q},[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(l.history,(e,t)=>Object(o["H"])((Object(o["s"])(),Object(o["f"])("div",{key:t,class:Object(o["p"])({"vue-command__history__entry":!0,"vue-command__history__entry--fullscreen":Object(o["D"])(j)(t)})},[(Object(o["s"])(),Object(o["d"])(Object(o["B"])(e),{ref_for:!0,ref_key:"vueCommandHistoryEntryComponentRefs",ref:s,class:"vue-command__history__entry__component"},null,512))],2)),[[o["F"],Object(o["D"])(m)(t)]])),128))],512)],512))}};r("178b");const Z=Y;var ee=Z;const te={style:{height:"100%"}};function re(e,t){return Object(o["H"])((Object(o["s"])(),Object(o["f"])("div",te,[Object(o["g"])("textarea",{ref:"nano",onKeyup:t[0]||(t[0]=Object(o["I"])(Object(o["J"])((...t)=>e.exit&&e.exit(...t),["ctrl","exact"]),["x"]))},"This is a nano text editor emulator! Press Ctrl + x to leave.",544)],512)),[[o["F"],e.terminal.isFullscreen]])}var oe={inject:["exit","setFullscreen","terminal"],created(){this.setFullscreen(!0)},mounted(){this.$refs.nano.focus()}},ne=(r("5148"),r("6b0d")),se=r.n(ne);const ie=se()(oe,[["render",re],["__scopeId","data-v-2f7725da"]]);var ce=ie;const ue={key:0},ae={key:1},le={key:2};function de(e,t){return Object(o["s"])(),Object(o["f"])("div",null,[e.isLoading||e.isError?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("span",ue,Object(o["C"])(e.joke),1)),e.isLoading&&!e.isError?(Object(o["s"])(),Object(o["f"])("span",ae,"Loading ...")):Object(o["e"])("",!0),e.isError?(Object(o["s"])(),Object(o["f"])("span",le,"There was an error getting the joke")):Object(o["e"])("",!0)])}const pe="https://api.chucknorris.io/jokes/random",be=5e3,me=new AbortController;var je={inject:["exit"],data:()=>({isError:!1,isLoading:!0,joke:""}),async mounted(){setTimeout(()=>{this.isLoading&&me.abort()},be);try{const e=await fetch(pe,{signal:me.signal});if(!e.ok)return this.isLoading=!1,this.setIsError(!0),void this.exit();const{value:t}=await e.json();this.joke=t}catch(e){this.setIsError(!0)}finally{this.isLoading=!1,this.exit()}},methods:{setIsError(e){this.isError=e}}};const he=se()(je,[["render",de]]);var ye=he;const Oe="~$";var fe={components:{VueCommand:ee},setup(){const e=Object(o["x"])(L()),t=Object(o["x"])(Oe),r=Object(o["x"])("");return{commands:{cd:e=>{if(!(e.length<1))return"home"===e[1]&&(t.value=Oe+"/home"),"../"!==e[1]&&".."!==e[1]||t.value!==Oe+"/home"||(t.value=""+Oe),E()},clear:()=>(e.value=[],E()),"hello-world":()=>G("Hello world"),help:()=>G("cd\n            clear\n            hello-world\n            help\n            nano\n            norris\n          "),nano:()=>ce,norris:()=>ye},history:e,prompt:t,query:r}}};r("1268");const ve=se()(fe,[["render",c]]);var _e=ve,ge=r("9483");Object(ge["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const Pe=Object(o["c"])(_e);Pe.config.unwrapInjectedRef=!0,Pe.mount("#app")},"9fc8":function(e,t,r){},a645:function(e,t,r){},ba90:function(e,t,r){},ef06:function(e,t,r){"use strict";r("ba90")}});
//# sourceMappingURL=app.08404d6e.js.map