"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[93],{3739:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=s(1527),n=s(6225),i=s(4602);const o={sidebar_position:4,sidebar_label:"Retrieving Users"},d="Retrieving Users",c={id:"nodejs/users/retrieve-users",title:"Retrieving Users",description:"In this section, we will show you how to get a list or one of Busy Hour User.",source:"@site/docs/nodejs/users/retrieve-users.mdx",sourceDirName:"nodejs/users",slug:"/nodejs/users/retrieve-users",permalink:"/docs/nodejs/users/retrieve-users",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/nodejs/users/retrieve-users.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Retrieving Users"},sidebar:"tutorialSidebar",previous:{title:"Authenticate User",permalink:"/docs/nodejs/users/authenticate-user"},next:{title:"Deleting a User",permalink:"/docs/nodejs/users/deleting-a-user"}},u={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Retrieving Users",id:"retrieving-users-1",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"Retrieving a User",id:"retrieving-a-user",level:2},{value:"Quick Example",id:"quick-example-1",level:3}];function h(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"retrieving-users",children:"Retrieving Users"}),"\n",(0,t.jsx)(r.p,{children:"In this section, we will show you how to get a list or one of Busy Hour User."}),"\n",(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(i.Z,{}),"\n",(0,t.jsx)(r.h2,{id:"retrieving-users-1",children:"Retrieving Users"}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"You can retrieve a list of Busy Hour User with any Master API Key or a Project API Key that only specificly for the project user you want to retrieve."})}),"\n",(0,t.jsxs)(r.p,{children:["To retrieve a list of Busy Hour App, you can use the ",(0,t.jsx)(r.code,{children:"app.list"})," function from the ",(0,t.jsx)(r.code,{children:"@busy-hour/node"})," package. The function take an object with the following properties:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"projectId"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"string"})," (optional)"]}),(0,t.jsx)(r.td,{children:"The ID of the project that the user belong to"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"nickname"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"string"})," (optional)"]}),(0,t.jsx)(r.td,{children:"The nickname of the user"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"limit"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"number"})," (optional)"]}),(0,t.jsx)(r.td,{children:"Total number of users to retrieve, (default: 15)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"page"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"number"})," (optional)"]}),(0,t.jsx)(r.td,{children:"The page number of users to retrieve, (default: 1)"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="src/main.ts"',children:"import BusyHourNode from '@busy-hour/node';\n\n// Create an instance of BusyHourNode with your API key (Master/Project)\n// highlight-next-line\nconst nodeSdk = new BusyHourNode({ apiKey: 'your-api-key' });\n\n// highlight-start\nnodeSdk.user.list({\n  projectId: 'your-project-id',\n  nickname: 'your-user-nickname',\n  limit: 5,\n  page: 2,\n});\n// highlight-end\n"})}),"\n",(0,t.jsx)(r.h2,{id:"retrieving-a-user",children:"Retrieving a User"}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"You can retrieve a Busy Hour User with any Master API Key or a Project API Key that only specificly for the project user you want to retrieve."})}),"\n",(0,t.jsxs)(r.p,{children:["To retrieve a Busy Hour User, you can use the ",(0,t.jsx)(r.code,{children:"user.find"})," function from the ",(0,t.jsx)(r.code,{children:"@busy-hour/node"})," package. The function take a ",(0,t.jsx)(r.code,{children:"userId"})," to retrieve as the argument."]}),"\n",(0,t.jsx)(r.h3,{id:"quick-example-1",children:"Quick Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="src/main.ts"',children:"import BusyHourNode from '@busy-hour/node';\n\n// Create an instance of BusyHourNode with your API key (Master/Project)\n// highlight-next-line\nconst nodeSdk = new BusyHourNode({ apiKey: 'your-api-key' });\n\n// highlight-start\nnodeSdk.user.find('your-user-id');\n// highlight-end\n"})})]})}function l(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4602:(e,r,s)=>{s.d(r,{Z:()=>i});var t=s(6276),n=(s(959),s(1527));const i=function(){return(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Busy Hour Account (",(0,n.jsx)(t.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,n.jsxs)("li",{children:["Generate a Master/Project API Key from"," ",(0,n.jsx)(t.Z,{to:"https://busyhour.id/dashboard/settings",children:"Dashboard/Settings"})," ","or from"," ",(0,n.jsx)(t.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]})]})}},6225:(e,r,s)=>{s.d(r,{Z:()=>d,a:()=>o});var t=s(959);const n={},i=t.createContext(n);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);