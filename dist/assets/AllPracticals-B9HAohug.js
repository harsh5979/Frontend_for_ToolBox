const __vite__fileDeps=["assets/javaPracticalCard-DpphsWf6.js","assets/index-DUzik6mg.js","assets/index-DM2awNME.css","assets/index-BexpTTv8.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as s,_ as y,u as N,j as e,N as b,L as d}from"./index-DUzik6mg.js";const g=s.lazy(()=>y(()=>import("./javaPracticalCard-DpphsWf6.js"),__vite__mapDeps([0,1,2,3]))),w=()=>{const[o,m]=s.useState(1),[x,a]=s.useState(!1),{d:i,pdata:n}=N();s.useEffect(()=>{let t=1;a(!0),i(t).finally(()=>{a(!1)})},[]);const u=t=>{a(!0),m(t),i(t).finally(()=>{a(!1)})},h=()=>x?e.jsx(d,{}):n!==null?e.jsx(g,{pdata:n}):e.jsx(d,{});s.useEffect(()=>{const t=r=>{const c=document.getElementById(r);c&&c.scrollIntoView({behavior:"smooth",block:"start"})};document.querySelectorAll("#navbar-example3 .nav-link").forEach(r=>{r.addEventListener("click",c=>{c.preventDefault();const p=r.getAttribute("href").substring(1);t(p)})})},[]);const f=[1,2,3,4,5,6,7,8,9,10,11,12],[v,j]=s.useState(1);return e.jsx("div",{className:"mt-1 justify-center content-center sticky",children:e.jsxs("div",{className:"text-center my-1",children:[e.jsx("div",{className:"  ",children:e.jsx("ul",{className:"  md:h-fit h-[85px] overflow-y-auto  text-[13px] md:text-[16px] w-[100vw]  flex   bg-gray-900  rounded-md    ",children:f.map(t=>e.jsx("li",{className:"  md:mx-6 mx-2  ",children:e.jsx(b,{className:v===t?"text-white after:w-[100%] after:bg-[#73a6e1]":"text-gray-600","aria-current":"true",to:`#${t}`,onClick:()=>{u(t),j(t)},children:e.jsxs("h1",{className:" ",children:["Practical-",t]})})},t))})}),e.jsxs("div",{className:" flex justify-center  ",children:[e.jsx("div",{className:" w-[500px]  justify-center   hidden md:flex my-4 ",children:e.jsx("div",{className:"m-auto",children:n.map((t,l)=>e.jsx("a",{className:" ",href:`#item-${l+1}`,children:e.jsxs("li",{className:"que ",children:["Que-",l+1]})},l))})}),e.jsx("div",{className:" overflow-y-auto h-[90vh] w-[3000px]   rounded-lg bd md:p-8",children:e.jsxs("div",{"data-bs-spy":"scroll","data-bs-target":"#navbar-example3","data-bs-smooth-scroll":"true",className:"scrollspy-example-2",tabIndex:"0",children:[e.jsxs("h1",{className:"my-5 text-4xl",children:["Practical-",o]}),e.jsx("div",{className:"justify-center   ",children:h()})]})})]})]})})};export{w as default};