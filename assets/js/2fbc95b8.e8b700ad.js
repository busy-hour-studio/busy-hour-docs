"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[9793],{8860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(1527),i=n(6225),s=n(4602);const o={sidebar_position:2,sidebar_label:"Retrieving Apps"},a="Retrieving Apps",d={id:"nodejs/apps/retrieve-apps",title:"Retrieving Apps",description:"In this section, we will show you how to get a list or one of Busy Hour App.",source:"@site/docs/nodejs/apps/retrieve-apps.mdx",sourceDirName:"nodejs/apps",slug:"/nodejs/apps/retrieve-apps",permalink:"/docs/nodejs/apps/retrieve-apps",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/nodejs/apps/retrieve-apps.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Retrieving Apps"},sidebar:"tutorialSidebar",previous:{title:"Creating an App",permalink:"/docs/nodejs/apps/creating-an-app"},next:{title:"Deleting an App",permalink:"/docs/nodejs/apps/deleting-an-app"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Retrieving Apps",id:"retrieving-apps-1",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"Retrieving a App",id:"retrieving-a-app",level:2},{value:"Quick Example",id:"quick-example-1",level:3}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"retrieving-apps",children:"Retrieving Apps"}),"\n",(0,r.jsx)(t.p,{children:"In this section, we will show you how to get a list or one of Busy Hour App."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(s.Z,{}),"\n",(0,r.jsx)(t.h2,{id:"retrieving-apps-1",children:"Retrieving Apps"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"You can retrieve a list of Busy Hour App with any Master API Key or a Project API Key that only specificly for the project app you want to retrieve."})}),"\n",(0,r.jsxs)(t.p,{children:["To retrieve a list of Busy Hour App, you can use the ",(0,r.jsx)(t.code,{children:"app.list"})," function from the ",(0,r.jsx)(t.code,{children:"@busy-hour/node"})," package. The function take an object with the following properties:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"projectId"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"string"})," (optional)"]}),(0,r.jsx)(t.td,{children:"The ID of the project that the app belong to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"appName"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"string"})," (optional)"]}),(0,r.jsx)(t.td,{children:"The name of the app"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"limit"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"number"})," (optional)"]}),(0,r.jsx)(t.td,{children:"Total number of apps to retrieve, (default: 15)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"page"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"number"})," (optional)"]}),(0,r.jsx)(t.td,{children:"The page number of apps to retrieve, (default: 1)"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="src/main.ts"',children:"import BusyHourNode from '@busy-hour/node';\n\n// Create an instance of BusyHourNode with your API key (Master/Project)\n// highlight-next-line\nconst nodeSdk = new BusyHourNode({ apiKey: 'your-api-key' });\n\n// highlight-start\nnodeSdk.app.list({\n  projectId: 'your-project-id',\n  appName: 'your-app-name',\n  limit: 5,\n  page: 2,\n});\n// highlight-end\n"})}),"\n",(0,r.jsx)(t.h2,{id:"retrieving-a-app",children:"Retrieving a App"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"You can retrieve a Busy Hour App with any Master API Key or a Project API Key that only specificly for the project app you want to retrieve."})}),"\n",(0,r.jsxs)(t.p,{children:["To retrieve a Busy Hour App, you can use the ",(0,r.jsx)(t.code,{children:"app.find"})," function from the ",(0,r.jsx)(t.code,{children:"@busy-hour/node"})," package. The function take a ",(0,r.jsx)(t.code,{children:"appId"})," to retrieve as the argument."]}),"\n",(0,r.jsx)(t.h3,{id:"quick-example-1",children:"Quick Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="src/main.ts"',children:"import BusyHourNode from '@busy-hour/node';\n\n// Create an instance of BusyHourNode with your API key (Master/Project)\n// highlight-next-line\nconst nodeSdk = new BusyHourNode({ apiKey: 'your-api-key' });\n\n// highlight-start\nnodeSdk.app.find('your-app-id');\n// highlight-end\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4602:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(6276),i=(n(959),n(1527));const s=function(){return(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Busy Hour Account (",(0,i.jsx)(r.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,i.jsxs)("li",{children:["Generate a Master/Project API Key from"," ",(0,i.jsx)(r.Z,{to:"https://busyhour.id/dashboard/settings",children:"Dashboard/Settings"})," ","or from"," ",(0,i.jsx)(r.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]})]})}},6225:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(959);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);