/*! For license information please see 707fe659.73588617.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89818],{32678:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api/puppeteer.page.goforward","title":"Page.goForward() method","description":"This method navigate to the next page in history.","source":"@site/versioned_docs/version-24.2.0/api/puppeteer.page.goforward.md","sourceDirName":"api","slug":"/api/puppeteer.page.goforward","permalink":"/api/puppeteer.page.goforward","draft":false,"unlisted":false,"tags":[],"version":"24.2.0","frontMatter":{"sidebar_label":"Page.goForward"},"sidebar":"api","previous":{"title":"Page.goBack","permalink":"/api/puppeteer.page.goback"},"next":{"title":"Page.goto","permalink":"/api/puppeteer.page.goto"}}');var o=t(74848),s=t(28453);const a={sidebar_label:"Page.goForward"},i="Page.goForward() method",p={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"pagegoforward-method",children:"Page.goForward() method"})}),"\n",(0,o.jsx)(r.p,{children:"This method navigate to the next page in history."}),"\n",(0,o.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  abstract goForward(options?: WaitForOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(r.p,{children:"Parameter"})}),(0,o.jsx)("th",{children:(0,o.jsx)(r.p,{children:"Type"})}),(0,o.jsx)("th",{children:(0,o.jsx)(r.p,{children:"Description"})})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(r.p,{children:"options"})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/api/puppeteer.waitforoptions",children:"WaitForOptions"})})}),(0,o.jsx)("td",{children:(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.em,{children:"(Optional)"})," Navigation Parameter"]})})]})})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,o.jsxs)(r.p,{children:["Promise<",(0,o.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,o.jsxs)(r.p,{children:["Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If can not go forward, resolves to ",(0,o.jsx)(r.code,{children:"null"}),"."]})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},21020:(e,r,t)=>{var n=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,s={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!p.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:d,ref:l,props:s,_owner:i.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);