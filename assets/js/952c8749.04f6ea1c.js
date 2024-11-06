"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[9505],{6994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(1527),o=t(6225),i=t(738);const r={sidebar_position:3,sidebar_label:"Deleting an App"},a="Deleting an App",d={id:"nodejs/apps/deleting-an-app",title:"Deleting an App",description:"Deleting any Busy Hour App will remove any access to the apps. Keep in mind that this action is irreversible and cannot be undone.",source:"@site/docs/nodejs/apps/deleting-an-app.mdx",sourceDirName:"nodejs/apps",slug:"/nodejs/apps/deleting-an-app",permalink:"/docs/nodejs/apps/deleting-an-app",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/nodejs/apps/deleting-an-app.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Deleting an App"},sidebar:"tutorialSidebar",previous:{title:"Retrieving Apps",permalink:"/docs/nodejs/apps/retrieve-apps"},next:{title:"User Management",permalink:"/docs/nodejs/users"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deleting an App",id:"deleting-an-app-1",level:2},{value:"Quick Example",id:"quick-example",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deleting-an-app",children:"Deleting an App"})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"Deleting any Busy Hour App will remove any access to the apps. Keep in mind that this action is irreversible and cannot be undone."})}),"\n",(0,s.jsx)(n.p,{children:"In this section, we will show you how to delete a Busy Hour App."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(i.Z,{}),"\n",(0,s.jsx)(n.h2,{id:"deleting-an-app-1",children:"Deleting an App"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"You can delete a Busy Hour App with any Master API Key or a Project API Key that only specificly for the project app you want to delete."})}),"\n",(0,s.jsxs)(n.p,{children:["To delete a Busy Hour App, you can use the ",(0,s.jsx)(n.code,{children:"app.delete"})," function from the ",(0,s.jsx)(n.code,{children:"@busy-hour/node"})," package. The function take a ",(0,s.jsx)(n.code,{children:"appId"})," to delete as the argument."]}),"\n",(0,s.jsx)(n.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/main.ts"',children:"import { BusyHourNode } from '@busy-hour/node';\n\n// Create an instance of BusyHourNode with your API key (Master/Project)\nconst nodeSdk = new BusyHourNode({\n  apiToken: 'your-api-token',\n});\n\n// highlight-start\nnodeSdk.app.delete({\n  projectAppId: 'your-project-app-id',\n});\n// highlight-end\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},738:(e,n,t)=>{t.d(n,{Z:()=>i});var s=t(1030),o=(t(959),t(1527));const i=function(){return(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:["Busy Hour Account (",(0,o.jsx)(s.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,o.jsxs)("li",{children:["Generate a Master/Project API Key from"," ",(0,o.jsx)(s.Z,{to:"https://busyhour.id/dashboard/settings",children:"Dashboard/Settings"})," ","or from"," ",(0,o.jsx)(s.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]})]})}},6225:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(959);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);