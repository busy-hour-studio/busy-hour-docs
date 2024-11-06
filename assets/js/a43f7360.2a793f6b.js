"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[3926],{8007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(1527),s=t(6225),o=t(738);const i={sidebar_position:1,sidebar_label:"Creating an App"},d="Creating an App",a={id:"nodejs/apps/creating-an-app",title:"Creating an App",description:"In this section, we will show you how to create a Busy Hour App.",source:"@site/docs/nodejs/apps/creating-an-app.mdx",sourceDirName:"nodejs/apps",slug:"/nodejs/apps/creating-an-app",permalink:"/docs/nodejs/apps/creating-an-app",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/nodejs/apps/creating-an-app.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Creating an App"},sidebar:"tutorialSidebar",previous:{title:"App Management",permalink:"/docs/nodejs/apps"},next:{title:"Retrieving Apps",permalink:"/docs/nodejs/apps/retrieve-apps"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating an App",id:"creating-an-app-1",level:2},{value:"Quick Example",id:"quick-example",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"creating-an-app",children:"Creating an App"})}),"\n",(0,r.jsx)(n.p,{children:"In this section, we will show you how to create a Busy Hour App."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(o.Z,{}),"\n",(0,r.jsx)(n.h2,{id:"creating-an-app-1",children:"Creating an App"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"You can create a Busy Hour App with any Master API Key or a Project API Key that only specificly for the project app you want to create."})}),"\n",(0,r.jsxs)(n.p,{children:["To create a Busy Hour App, you can use the ",(0,r.jsx)(n.code,{children:"app.create"})," function from the ",(0,r.jsx)(n.code,{children:"@busy-hour/node"})," package. The function take an object with the following properties:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"projectId"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The ID of the project that the app will belong to"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"displayName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The name of the app"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"platform"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"web"})," | ",(0,r.jsx)(n.code,{children:"android"})," | ",(0,r.jsx)(n.code,{children:"ios"})]}),(0,r.jsx)(n.td,{children:"The platform of the app will be deployed to"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bundleId"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"string"})," (optional)"]}),(0,r.jsxs)(n.td,{children:["The bundleId of the app will be deployed to, set to ",(0,r.jsx)(n.code,{children:"null"})," if the platform is ",(0,r.jsx)(n.code,{children:"web"})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="src/main.ts"',children:"import { BusyHourNode } from '@busy-hour/node';\n\n// Create an instance of BusyHourNode with your API key (Master/Project)\nconst nodeSdk = new BusyHourNode({\n  apiToken: 'your-api-token',\n});\n\n// highlight-start\nnodeSdk.app.create({\n  payload: {\n    projectId: 'your-project-id',\n    displayName: 'My Project',\n    platform: 'web',\n    bundleId: null,\n  },\n});\n// highlight-end\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},738:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(1030),s=(t(959),t(1527));const o=function(){return(0,s.jsxs)("ol",{children:[(0,s.jsxs)("li",{children:["Busy Hour Account (",(0,s.jsx)(r.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,s.jsxs)("li",{children:["Generate a Master/Project API Key from"," ",(0,s.jsx)(r.Z,{to:"https://busyhour.id/dashboard/settings",children:"Dashboard/Settings"})," ","or from"," ",(0,s.jsx)(r.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]})]})}},6225:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var r=t(959);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);