import{r as R}from"./chunks/index.037f8e6e.js";import{j as r,m as q}from"./chunks/jsx-runtime.38af6c36.js";var L={},Y,W;Object.defineProperty(L,"__esModule",{value:!0});var _=r.exports,d=R.exports,a=function(){return a=Object.assign||function(e){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)};function F(e,t){var o,s;switch(t.type){case"TYPE":return a(a({},e),{speed:t.speed,text:(o=t.payload)===null||o===void 0?void 0:o.substring(0,e.text.length+1)});case"DELAY":return a(a({},e),{speed:t.payload});case"DELETE":return a(a({},e),{speed:t.speed,text:(s=t.payload)===null||s===void 0?void 0:s.substring(0,e.text.length-1)});case"COUNT":return a(a({},e),{count:e.count+1});default:return e}}var A=function(e){var t=e.words,o=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,s=e.loop,n=s===void 0?1:s,i=e.typeSpeed,l=i===void 0?80:i,h=e.deleteSpeed,N=h===void 0?50:h,y=e.delaySpeed,v=y===void 0?1500:y,c=e.onLoopDone,b=e.onType,p=e.onDelete,g=e.onDelay,j=d.useReducer(F,{speed:l,text:"",count:0}),T=j[0],w=T.speed,x=T.text,k=T.count,f=j[1],S=d.useRef(0),m=d.useRef(!1),u=d.useRef(!1),C=d.useRef(!1),D=d.useRef(!1),P=d.useCallback(function(){var E=k%o.length,B=o[E];u.current?(f({type:"DELETE",payload:B,speed:N}),x===""&&(u.current=!1,f({type:"COUNT"}))):(f({type:"TYPE",payload:B,speed:l}),C.current=!0,x===B&&(f({type:"DELAY",payload:v}),C.current=!1,D.current=!0,setTimeout(function(){D.current=!1,u.current=!0},v),n>0&&(S.current+=1,S.current/o.length===n&&(D.current=!1,m.current=!0)))),C.current&&b&&b(S.current),u.current&&p&&p(),D.current&&g&&g()},[k,v,N,n,l,o,x,b,p,g]);return d.useEffect(function(){var E=setTimeout(P,w);return m.current&&clearTimeout(E),function(){return clearTimeout(E)}},[P,w]),d.useEffect(function(){c&&m.current&&c()},[c]),[x,{isType:C.current,isDelay:D.current,isDelete:u.current,isDone:m.current}]},U="styles-module_blinkingCursor__yugAC",V="styles-module_blinking__9VXRT";(function(e,t){t===void 0&&(t={});var o=t.insertAt;if(e&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",o==="top"&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var O=d.memo(function(e){var t=e.cursorBlinking,o=t===void 0||t,s=e.cursorStyle,n=s===void 0?"|":s,i=e.cursorColor,l=i===void 0?"inherit":i;return _.jsx("span",a({style:{color:l},className:"".concat(U," ").concat(o?V:"")},{children:n}))});W=L.Cursor=O,L.Typewriter=function(e){var t=e.words,o=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,s=e.loop,n=s===void 0?1:s,i=e.typeSpeed,l=i===void 0?80:i,h=e.deleteSpeed,N=h===void 0?50:h,y=e.delaySpeed,v=y===void 0?1500:y,c=e.cursor,b=c!==void 0&&c,p=e.cursorStyle,g=p===void 0?"|":p,j=e.cursorColor,T=j===void 0?"inherit":j,w=e.cursorBlinking,x=w===void 0||w,k=e.onLoopDone,f=e.onType,S=e.onDelay,m=e.onDelete,u=A({words:o,loop:n,typeSpeed:l,deleteSpeed:N,delaySpeed:v,onLoopDone:k,onType:f,onDelay:S,onDelete:m})[0];return _.jsxs(_.Fragment,{children:[_.jsx("span",{children:u}),b&&_.jsx(O,{cursorStyle:g,cursorColor:T,cursorBlinking:x})]})},Y=L.useTypewriter=A;function X({}){return r.exports.jsxs(q.div,{initial:{opacity:0},animate:{scale:[1,2,2,3,1],opacity:[.1,.2,.3,.4,.8,.1,1]},transition:{duration:2.5},className:"relative flex justify-center items-center",children:[r.exports.jsx("div",{className:"absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52"}),r.exports.jsx("div",{className:"absolute border border-[#333333] rounded-full h-[300px] w-[300px] animate-ping mt-52"}),r.exports.jsx("div",{className:"absolute border border-[#333333] rounded-full h-[425px] w-[425px] animate-ping mt-52"}),r.exports.jsx("div",{className:"absolute border border-[#f43f5e] rounded-full h-[550px] w-[550px] animate-pulse mt-52"}),r.exports.jsx("div",{className:"absolute border border-[#333333] rounded-full h-[625px] w-[625px] animate-ping mt-52"})]})}const H=["Welcome to my portfolio!","I'm Pepe Salcedo","FullStack_Dev"];function M({}){const[e,t]=R.exports.useState(-1),[o,s]=R.exports.useState(!0),[n,i]=Y({words:H,loop:!0,delaySpeed:2e3});return R.exports.useEffect(()=>{o!==i.isDelete&&o&&(e===H.length-1?t(0):t(l=>l+1)),s(l=>!l)},[i.isDelete]),r.exports.jsxs("section",{id:"hero",className:"h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-center",children:[r.exports.jsx(X,{}),r.exports.jsx("img",{src:"/portfolio-front/profile_pic.jpg",alt:"profile picture",className:"relative rounded-full h-32 w-32 mx-auto object-cover"}),r.exports.jsxs("div",{children:[r.exports.jsx("h2",{className:"text-sm uppercase text-gray-500 pb-2 tracking-[10px]",children:"Software Developer"}),r.exports.jsxs("h1",{className:"flex justify-center text-3xl md:text-5xl lg:text-6xl font-semibold px-10",children:[e===2&&r.exports.jsx("span",{children:"<"}),r.exports.jsx("span",{className:`${e===2&&"text-blue-300"}`,children:n}),e===2&&r.exports.jsx("span",{children:"/>"}),r.exports.jsx(W,{cursorColor:"#f43f5e"})]})]}),r.exports.jsxs("div",{className:"z-20",children:[r.exports.jsx("a",{href:"#about",children:r.exports.jsx("button",{className:"px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]",children:"About"})}),r.exports.jsx("a",{href:"#experience",children:r.exports.jsx("button",{className:"px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]",children:"Exerience"})}),r.exports.jsx("a",{href:"#tech",children:r.exports.jsx("button",{className:"px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]",children:"Skills"})}),r.exports.jsx("a",{href:"#projects",children:r.exports.jsx("button",{className:"px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]",children:"Projects"})}),r.exports.jsx("a",{href:"/blog",children:r.exports.jsx("button",{className:"px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]",children:"Blog"})})]})]})}export{M as default};
