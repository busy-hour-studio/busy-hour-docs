"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[5818],{7096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var n=r(1527),o=r(6225),s=r(4602);const i={sidebar_position:1,sidebar_label:"Creating a Project"},c="Creating a Project",a={id:"nodejs/projects/creating-a-project",title:"Creating a Project",description:"Project creation is only available with a Master API Key or through the Dashboard/Projects.",source:"@site/docs/nodejs/projects/creating-a-project.mdx",sourceDirName:"nodejs/projects",slug:"/nodejs/projects/creating-a-project",permalink:"/docs/nodejs/projects/creating-a-project",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/nodejs/projects/creating-a-project.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Creating a Project"},sidebar:"tutorialSidebar",previous:{title:"Project Management",permalink:"/docs/nodejs/projects"},next:{title:"Updating a Project",permalink:"/docs/nodejs/projects/updating-a-project"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Project",id:"creating-a-project-1",level:2},{value:"Quick Example",id:"quick-example",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"creating-a-project",children:"Creating a Project"}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:["Project creation is only available with a Master API Key or through the ",(0,n.jsx)(t.a,{href:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"}),".\nSince a Master API Key is the API Key with the highest permission level, please hide it securely so no one can access it directly."]})}),"\n",(0,n.jsx)(t.p,{children:"In this section, we will show you how to create a Busy Hour Project."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(s.Z,{}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-project-1",children:"Creating a Project"}),"\n",(0,n.jsxs)(t.p,{children:["To create a Busy Hour Project, you can use the ",(0,n.jsx)(t.code,{children:"project.create"})," function from the ",(0,n.jsx)(t.code,{children:"@busy-hour/node"})," package. The function take an object with the following properties:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{children:"The name of the project"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"description"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{children:"The description of the project"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="src/main.ts"',children:"import BusyHourNode from '@busy-hour/node';\n\n// Create an instance of BusyHourNode with your API key (Master/Project)\n// highlight-next-line\nconst nodeSdk = new BusyHourNode({ apiKey: 'your-api-key' });\n\n// highlight-start\nnodeSdk.project.create({\n  name: 'My Project',\n  description: 'This is my project',\n});\n// highlight-end\n"})})]})}function j(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4602:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(6276),o=(r(959),r(1527));const s=function(){return(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:["Busy Hour Account (",(0,o.jsx)(n.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,o.jsxs)("li",{children:["Generate a Master/Project API Key from"," ",(0,o.jsx)(n.Z,{to:"https://busyhour.id/dashboard/settings",children:"Dashboard/Settings"})," ","or from"," ",(0,o.jsx)(n.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]})]})}},6225:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var n=r(959);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);