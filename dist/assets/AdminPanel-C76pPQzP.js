import{u as d,r as c,j as e,F as i}from"./index-BDJjFUMD.js";import{M as x}from"./index-qGd7PNty.js";const o=()=>{const{userAdminpanel:a}=d();c.useEffect(()=>{a()},[]);const{fetchUser:t,deleteUser:r}=d(),n=s=>{r(s)};return e.jsx(e.Fragment,{children:t.map((s,l)=>e.jsxs("tr",{className:"border  ",children:[e.jsx("td",{className:"tbd",children:l+1}),e.jsx("td",{className:"tbd",children:s.name}),e.jsx("td",{className:"tbd",children:s.email}),e.jsx("td",{className:"tbd",children:e.jsxs("div",{className:"flex mx-5 gap-5",children:[e.jsx("button",{className:"px-2",children:e.jsx(i,{size:25})}),e.jsx("button",{className:"px-2",onClick:()=>n(s._id),children:e.jsx(x,{size:25})})]})})]},l))})},m=()=>{const{contscAdminpanel:a}=d(),{fetchContact:t,deleteContact:r}=d();c.useEffect(()=>{a()},[]);const n=s=>{r(s),a()};return e.jsx(e.Fragment,{children:t.map((s,l)=>e.jsxs("tr",{className:"border ",children:[e.jsx("td",{className:" tbd",children:l+1}),e.jsx("td",{className:"tbd",children:s.username}),e.jsx("td",{className:"tbd ",children:s.email}),e.jsx("td",{className:"tbd",children:s.message}),e.jsx("td",{className:"tbd",children:e.jsxs("div",{className:"flex mx-5 gap-5",children:[e.jsx("button",{className:"px-2",children:e.jsx(i,{size:25})}),e.jsx("button",{className:"px-2",onClick:()=>n(s._id),children:e.jsx(x,{size:25})})]})})]},l))})},p=()=>{const[a,t]=c.useState();return e.jsxs("div",{className:`h-${a?"full":"screen"}`,children:[e.jsxs("h1",{className:"text-5xl text-center my-5 font-mono text-gray-200",children:["Admin Panel"," "]}),e.jsx("hr",{className:"md:w-[15%] w-[59%] m-auto border-2 rounded  border-purple-600 my-1"}),e.jsxs("div",{className:"text-center m-auto justify-center flex gap-5 mt-[80px]",children:[e.jsx("li",{children:e.jsx("label",{htmlFor:"admin",className:"md:text-2xl",children:"Choose a Data :"})}),e.jsxs("select",{name:"admin",id:"",onChange:r=>t(r.target.value),className:"w-[190px] bg-gray-600 rounded-md h-11 ",defaultValue:"choose",children:[e.jsx("option",{value:"choose",className:"h-[250px] overflow-auto",children:"choose the value ... "}),e.jsx("option",{value:"Users",children:"Users data"}),e.jsx("option",{value:"Contacts",children:"Contacts info"})]})]}),a=="Users"&&e.jsx("div",{className:" my-4 h-screen",children:e.jsxs("table",{className:"justify-center m-auto rounded-lg overflow-hidden border-transparent bg-white text-black",children:[e.jsx("thead",{className:"bg-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2 px-2",children:"no."}),e.jsx("th",{className:"border p-2 px-3 w-[290px] ",children:"name"}),e.jsx("th",{className:"border p-2 px-3 w-[340px]",children:"email"}),e.jsx("th",{className:"border p-2 px-3 w-[250px]",children:"oprations"})]})}),e.jsx("tbody",{children:e.jsx(o,{})})]})}),a=="Contacts"&&e.jsx("div",{className:" my-4 h-full ",children:e.jsxs("table",{className:"justify-center m-auto rounded-lg overflow-hidden border-transparent bg-white text-black",children:[e.jsx("thead",{className:"bg-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border ",children:"no."}),e.jsx("th",{className:"border p-2 px-3 md:w-[290px] ",children:"name"}),e.jsx("th",{className:"border p-2 px-3 md:w-[340px]",children:"email"}),e.jsx("th",{className:"border p-2 px-3 md:w-[340px]",children:"message"}),e.jsx("th",{className:"border p-2 px-3 md:w-[250px]",children:"oprations"})]})}),e.jsx("tbody",{children:e.jsx(m,{})})]})})]})};export{p as default};
