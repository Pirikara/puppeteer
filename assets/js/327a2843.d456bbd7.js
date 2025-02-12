/*! For license information please see 327a2843.d456bbd7.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29757],{45604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"api/puppeteer.framewaitforfunctionoptions","title":"FrameWaitForFunctionOptions interface","description":"Signature","source":"@site/versioned_docs/version-24.2.0/api/puppeteer.framewaitforfunctionoptions.md","sourceDirName":"api","slug":"/api/puppeteer.framewaitforfunctionoptions","permalink":"/api/puppeteer.framewaitforfunctionoptions","draft":false,"unlisted":false,"tags":[],"version":"24.2.0","frontMatter":{"sidebar_label":"FrameWaitForFunctionOptions"},"sidebar":"api","previous":{"title":"FrameEvents","permalink":"/api/puppeteer.frameevents"},"next":{"title":"GeolocationOptions","permalink":"/api/puppeteer.geolocationoptions"}}');var r=t(74848),s=t(28453);const o={sidebar_label:"FrameWaitForFunctionOptions"},c="FrameWaitForFunctionOptions interface",l={},a=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"framewaitforfunctionoptions-interface",children:"FrameWaitForFunctionOptions interface"})}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export interface FrameWaitForFunctionOptions\n"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Property"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Default"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"polling",children:"polling"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"'raf' | 'mutation' | number"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["An interval at which the ",(0,r.jsx)(n.code,{children:"pageFunction"})," is executed, defaults to ",(0,r.jsx)(n.code,{children:"raf"}),". If ",(0,r.jsx)(n.code,{children:"polling"})," is a number, then it is treated as an interval in milliseconds at which the function would be executed. If ",(0,r.jsx)(n.code,{children:"polling"})," is a string, then it can be one of the following values:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"raf"})," - to constantly execute ",(0,r.jsx)(n.code,{children:"pageFunction"})," in ",(0,r.jsx)(n.code,{children:"requestAnimationFrame"})," callback. This is the tightest polling mode which is suitable to observe styling changes."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"mutation"})," - to execute ",(0,r.jsx)(n.code,{children:"pageFunction"})," on every DOM mutation."]}),"\n"]}),"\n"]})]}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"signal",children:"signal"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"AbortSignal"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"A signal object that allows you to cancel a waitForFunction call."})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"timeout",children:"timeout"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"number"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Maximum time to wait in milliseconds. Defaults to ",(0,r.jsx)(n.code,{children:"30000"})," (30 seconds). Pass ",(0,r.jsx)(n.code,{children:"0"})," to disable the timeout. Puppeteer's default timeout can be changed using ",(0,r.jsx)(n.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"}),"."]})}),(0,r.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var i=t(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var i,s={},a=null,d=null;for(i in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!l.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:a,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);