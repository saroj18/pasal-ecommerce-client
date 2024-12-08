import{c as r,r as d,u as m,j as e,X as p,l as u,e as t,d as k,f as b,g as j,U as g,h as w}from"./index-C1CvJJuV.js";/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=r("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=r("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=r("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=r("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=r("PersonStanding",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=r("ShoppingBasket",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]),H=({accountList:i,dashboardList:c})=>{const[s,x]=d.useState(!0),{setSidebar:n,sidebar:y}=m(),[h,l]=d.useState("Dashboard");return e.jsxs("aside",{onClick:()=>n(!1),className:`grow  ${s?"min-w-[250px]":" min-w-[80px]"} h-screen md:w-[80px] fixed border-b-0 bg-white z-10  md:sticky top-0  ${y?"left-0":"-left-[100%]"} transition-all overflow-y-scroll overflow-x-hidden border-2 border-gray-500  shadow-md font-poppins scrollbar p-3`,children:[e.jsx(p,{onClick:()=>n(!1),className:"cursor-pointer absolute left-[88%] top-4 md:hidden"}),e.jsxs("div",{className:"flex justify-between  items-center",children:[s&&e.jsx("img",{className:"h-[40px]",src:u,alt:""}),e.jsx(f,{className:"cursor-pointer hidden md:block",onClick:()=>x(!s)})]}),e.jsx(t,{className:`${s?"opacity-50":"opacity-0"}  my-5 text-[15px]`,children:"General"}),c.map((a,o)=>e.jsxs(k,{onClick:()=>l(a.name),to:a.url,title:a.name,className:`flex items-center gap-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-md ${a.name==h?"text-green-500":""}`,children:[e.jsx("span",{children:a.icon}),e.jsx(t,{className:`text-[15px] ${s?"":"md:hidden"}`,children:a.name})]},o)),e.jsx(t,{className:`${s?"opacity-50":"opacity-0"}  my-5 text-[15px]`,children:"Account"}),i.map((a,o)=>e.jsxs("div",{title:a.name,className:"flex items-center gap-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-md",children:[e.jsx("span",{children:a.icon}),e.jsx(t,{className:"text-[15px]",children:a.name})]},o))]})},P=[{name:"Dashboard",url:"/dashboard",icon:e.jsx(N,{})},{name:"Product",url:"/dashboard/product",icon:e.jsx(M,{})},{name:"Inventory",url:"/dashboard/inventory",icon:e.jsx(b,{})},{name:"Order",url:"/dashboard/order",icon:e.jsx(S,{})},{name:"Review",url:"/dashboard/review",icon:e.jsx(j,{})},{name:"Delevery Person",url:"/dashboard/delevery-person",icon:e.jsx(L,{})},{name:"Customer",url:"/dashboard/customer",icon:e.jsx(g,{})},{name:"Message",url:"/dashboard/message",icon:e.jsx(w,{})},{name:"Go to Home",url:"/",icon:e.jsx(v,{})}],$=[];export{v as H,N as L,H as S,$ as a,P as d};
