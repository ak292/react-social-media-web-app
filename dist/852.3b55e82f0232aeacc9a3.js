"use strict";(self.webpackChunkcomplex_react_app=self.webpackChunkcomplex_react_app||[]).push([[852],{1852:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var o=a(6540),l=a(7767),n=a(569),r=a(2505),s=a.n(r),c=a(6306),m=a(343);const p=function(e){const[t,a]=(0,o.useState)(),[r,p]=(0,o.useState)(),u=(0,l.Zp)(),d=(0,o.useContext)(c.A),i=(0,o.useContext)(m.A);return o.createElement(n.A,{title:"Create New Post"},o.createElement("form",{onSubmit:async function(e){e.preventDefault();try{const e=await s().post("/create-post",{title:t,body:r,token:i.user.token});d({type:"flashMessage",value:"Congrats, you created a new post."}),u(`/post/${e.data}`),console.log("New post was created.")}catch(e){console.log("There was a problem.")}}},o.createElement("div",{className:"form-group"},o.createElement("label",{htmlFor:"post-title",className:"text-muted mb-1"},o.createElement("small",null,"Title")),o.createElement("input",{onChange:e=>a(e.target.value),autoFocus:!0,name:"title",id:"post-title",className:"form-control form-control-lg form-control-title",type:"text",placeholder:"",autoComplete:"off"})),o.createElement("div",{className:"form-group"},o.createElement("label",{htmlFor:"post-body",className:"text-muted mb-1 d-block"},o.createElement("small",null,"Body Content")),o.createElement("textarea",{onChange:e=>p(e.target.value),name:"body",id:"post-body",className:"body-content tall-textarea form-control",type:"text"})),o.createElement("button",{className:"btn btn-primary"},"Save New Post")))}}}]);