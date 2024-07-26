import{j as t,r as P,u as M,N as L}from"./index-BDJjFUMD.js";var R={},A;Object.defineProperty(R,"__esModule",{value:!0});var k=t,l=P,a=function(){return a=Object.assign||function(e){for(var r,s=1,n=arguments.length;s<n;s++)for(var o in r=arguments[s])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},a.apply(this,arguments)};function U(e,r){var s,n;switch(r.type){case"TYPE":return a(a({},e),{speed:r.speed,text:(s=r.payload)===null||s===void 0?void 0:s.substring(0,e.text.length+1)});case"DELAY":return a(a({},e),{speed:r.payload});case"DELETE":return a(a({},e),{speed:r.speed,text:(n=r.payload)===null||n===void 0?void 0:n.substring(0,e.text.length-1)});case"COUNT":return a(a({},e),{count:e.count+1});default:return e}}var O=function(e){var r=e.words,s=r===void 0?["Hello World!","This is","a simple Typewriter"]:r,n=e.loop,o=n===void 0?1:n,i=e.typeSpeed,c=i===void 0?80:i,h=e.deleteSpeed,_=h===void 0?50:h,f=e.delaySpeed,v=f===void 0?1500:f,u=e.onLoopDone,g=e.onType,p=e.onDelete,b=e.onDelay,j=l.useReducer(U,{speed:c,text:"",count:0}),N=j[0],T=N.speed,m=N.text,C=N.count,x=j[1],w=l.useRef(0),y=l.useRef(!1),d=l.useRef(!1),D=l.useRef(!1),S=l.useRef(!1),W=l.useCallback(function(){var E=C%s.length,H=s[E];d.current?(x({type:"DELETE",payload:H,speed:_}),m===""&&(d.current=!1,x({type:"COUNT"}))):(x({type:"TYPE",payload:H,speed:c}),D.current=!0,m===H&&(x({type:"DELAY",payload:v}),D.current=!1,S.current=!0,setTimeout(function(){S.current=!1,d.current=!0},v),o>0&&(w.current+=1,w.current/s.length===o&&(S.current=!1,y.current=!0)))),D.current&&g&&g(w.current),d.current&&p&&p(),S.current&&b&&b()},[C,v,_,o,c,s,m,g,p,b]);return l.useEffect(function(){var E=setTimeout(W,T);return y.current&&clearTimeout(E),function(){return clearTimeout(E)}},[W,T]),l.useEffect(function(){u&&y.current&&u()},[u]),[m,{isType:D.current,isDelay:S.current,isDelete:d.current,isDone:y.current}]},Y="styles-module_blinkingCursor__yugAC",q="styles-module_blinking__9VXRT";(function(e,r){r===void 0&&(r={});var s=r.insertAt;if(e&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",s==="top"&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var B=l.memo(function(e){var r=e.cursorBlinking,s=r===void 0||r,n=e.cursorStyle,o=n===void 0?"|":n,i=e.cursorColor,c=i===void 0?"inherit":i;return k.jsx("span",a({style:{color:c},className:"".concat(Y," ").concat(s?q:"")},{children:o}))});R.Cursor=B,A=R.Typewriter=function(e){var r=e.words,s=r===void 0?["Hello World!","This is","a simple Typewriter"]:r,n=e.loop,o=n===void 0?1:n,i=e.typeSpeed,c=i===void 0?80:i,h=e.deleteSpeed,_=h===void 0?50:h,f=e.delaySpeed,v=f===void 0?1500:f,u=e.cursor,g=u!==void 0&&u,p=e.cursorStyle,b=p===void 0?"|":p,j=e.cursorColor,N=j===void 0?"inherit":j,T=e.cursorBlinking,m=T===void 0||T,C=e.onLoopDone,x=e.onType,w=e.onDelay,y=e.onDelete,d=O({words:s,loop:o,typeSpeed:c,deleteSpeed:_,delaySpeed:v,onLoopDone:C,onType:x,onDelay:w,onDelete:y})[0];return k.jsxs(k.Fragment,{children:[k.jsx("span",{children:d}),g&&k.jsx(B,{cursorStyle:b,cursorColor:N,cursorBlinking:m})]})},R.useTypewriter=O;const I=()=>{const{user:e}=M(),s=(e&&e.name?e.name:"").substring(0,5);return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"snap-x snap-mandatory ",children:[t.jsx("main",{children:t.jsx("section",{className:"{bg-gray-900} text-white py-20 snap-center ",children:t.jsxs("div",{className:"container grid md:grid-cols-2    gap-8  m-auto my-1 justify-center content-center ",children:[t.jsxs("div",{className:"flex flex-col justify-center mx-7 ",children:[t.jsxs("p",{className:"text-sm select-none",children:["We are the World ",t.jsx("span",{className:"text-yellow-500",children:"Best PassWord Manager"})," "]}),t.jsxs("h1",{className:"md:text-4xl font-bold text-4xl",children:[" ",t.jsx(A,{words:["Welcome to Our Website "],loop:1,cursor:!0,cursorStyle:"_",typeSpeed:70,deleteSpeed:50,delaySpeed:1e3}),s&&t.jsx("span",{className:"text-purple-600",children:t.jsx(A,{words:[`${s}...`],loop:5,cursor:!0,cursorStyle:"|",typeSpeed:70,deleteSpeed:50,delaySpeed:3e3})})]}),t.jsx("p",{className:"mt-4  md:text-lg text-lg snap-center select-none",children:"Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At Harsh Technical, we specialize in providing innovative Password Manager services and solutions tailored to meet your unique needs."}),t.jsxs("div",{className:"mt-7 space-x-4   ",children:[t.jsx(L,{to:"/contact",className:"btn removeLinkHover bg-blue-500 py-2 px-2 text-black rounded font-bold",children:"ConnectUs"}),t.jsx(L,{to:"/services",className:"btn secondary-btn removeLinkHover py-2 px-2 bg-blue-500 text-black rounded font-bold",children:"Learn More"})]})]}),t.jsx("div",{className:" flex  justify-center    md:order-1     md:m-1  cursor-none select-none ",children:t.jsx("img",{src:"/img/home.png",alt:"coding together",className:"md:w-[400px] md:h-[480px] w-[290px] h-[300px] "})})]})})}),t.jsx("section",{className:"{bg-gray-950} text-white md:py-40 py-20 snap-center",children:t.jsxs("div",{className:"container md:grid md:grid-cols-2 gap-8",children:[t.jsx("div",{className:"flex justify-center mb-6 md:mb-0 select-none cursor-none",children:t.jsx("img",{src:"/img/design.png",alt:"coding together",className:"md:w-[380px] md:h-[420px] w-[300px]  "})}),t.jsxs("div",{className:"flex flex-col justify-center mx-5",children:[t.jsx("p",{className:"text-sm",children:"We are here to help you"}),t.jsxs("h1",{className:"text-4xl font-bold",children:["Get Started ",t.jsx("span",{className:"text-yellow-500",children:"Today"})]}),t.jsx("p",{className:"mt-4 text-lg mx-6 select-none",children:"Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how Harsh Technical can help your business thrive in the digital age."}),t.jsxs("div",{className:"mt-7 space-x-4 mx-6 ",children:[t.jsx(L,{to:"/contact",className:"btn removeLinkHover bg-blue-500 py-2 px-2 text-black rounded font-bold",children:"ConnectUs"}),t.jsx(L,{to:"/services",className:"btn secondary-btn removeLinkHover bg-blue-500 py-2 px-2 text-black rounded font-bold",children:"Learn More"})]})]})]})})]})})};export{I as default};
