import{u as d,r as p,j as e,P as f,a as h,L as u,O as m}from"./index-C1CvJJuV.js";import{S as y,a as w,d as j}from"./sidebarList-B3lIWXBX.js";import{M as C}from"./menu-DQvNlIu7.js";const b=({open:a,setOpen:r})=>{const{rtcConnection:s,rtcOffer:t,socketServer:n,setLocalStream:i}=d();p.useEffect(()=>{console.log("hit man!",s),(async()=>{if(s)try{if(s.onicecandidate=o=>{o.candidate&&(n==null||n.send(JSON.stringify({type:"ice-candidate",candidate:o.candidate,receiver:t==null?void 0:t.sender})),console.log("ICE candidate sent"))},s.signalingState=="have-remote-offer"){const o=await s.createAnswer();await s.setLocalDescription(new RTCSessionDescription(o)),n==null||n.send(JSON.stringify({type:"rtcAnswer",sdp:o,receiver:t==null?void 0:t.sender})),console.log("answer is sent")}}catch(o){console.error("Error creating RTC answer:",o)}})(),console.log("render")},[s]);const c=()=>{window.open("http://localhost:5173/seller_video_call","popupWindow","width="+screen.width+",height="+screen.height+",scrollbars=yes")};return e.jsx(f,{open:a,onClose:()=>r(!1),children:e.jsxs("div",{style:{textAlign:"center",padding:"20px"},children:[e.jsx("h1",{style:{color:"#4CAF50"},children:"Incoming Call..."}),e.jsx("p",{style:{fontSize:"18px",color:"#555"},children:"John Doe is calling you"}),e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("button",{style:{backgroundColor:"#4CAF50",color:"white",border:"none",padding:"10px 20px",fontSize:"16px",cursor:"pointer",marginRight:"10px"},onClick:c,children:"Accept"}),e.jsx("button",{style:{backgroundColor:"#f44336",color:"white",border:"none",padding:"10px 20px",fontSize:"16px",cursor:"pointer"},onClick:()=>r(!1),children:"Decline"})]})]})})},L=()=>{const{setSidebar:a,open:r,setOpen:s,rtcOffer:t,socketServer:n,rtcConnection:i,setRtcOffer:c}=d();return h().state=="loading"?e.jsx(u,{}):(p.useEffect(()=>{const o=async g=>{const l=JSON.parse(g.data);l.type=="rtcOffer"&&(await(i==null?void 0:i.setRemoteDescription(new RTCSessionDescription(l.sdp))),s(!0),console.log("offer is send",i==null?void 0:i.remoteDescription))};n==null||n.addEventListener("message",o)},[]),e.jsxs("div",{className:"flex max-h-fit",children:[e.jsx(y,{accountList:w,dashboardList:j}),e.jsxs("div",{className:"sm:px-7 px-3 py-3 w-full bg-gray-50",children:[e.jsx(C,{onClick:()=>a(!0),className:"cursor-pointer md:hidden"}),e.jsx(m,{}),e.jsx(b,{open:r,setOpen:s})]})]}))};export{L as default};
