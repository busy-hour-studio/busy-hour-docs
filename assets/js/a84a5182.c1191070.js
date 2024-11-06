"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[1706],{1896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var o=r(1527),n=r(6225),s=r(738);const i={sidebar_position:2,sidebar_label:"Updating a Project"},c="Updating a Project",d={id:"rest/projects/updating-a-project",title:"Updating a Project",description:"In this section, we will show you how to update a pre-existing Busy Hour Project.",source:"@site/docs/rest/projects/updating-a-project.mdx",sourceDirName:"rest/projects",slug:"/rest/projects/updating-a-project",permalink:"/docs/rest/projects/updating-a-project",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/rest/projects/updating-a-project.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Updating a Project"},sidebar:"tutorialSidebar",previous:{title:"Creating a Project",permalink:"/docs/rest/projects/creating-a-project"},next:{title:"Retrieving Projects",permalink:"/docs/rest/projects/retrieve-projects"}},a={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Updating a Project",id:"updating-a-project-1",level:2},{value:"Quick Example",id:"quick-example",level:3}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"updating-a-project",children:"Updating a Project"})}),"\n",(0,o.jsx)(t.p,{children:"In this section, we will show you how to update a pre-existing Busy Hour Project."}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(s.Z,{}),"\n",(0,o.jsx)(t.h2,{id:"updating-a-project-1",children:"Updating a Project"}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"You only can update a Busy Hour Project with any Master API Key or a Project API Key that generated specificly for the project you want to update."})}),"\n",(0,o.jsxs)(t.p,{children:["To update a Busy Hour Project, you will need to use the ",(0,o.jsx)(t.code,{children:"PATCH"})," method pointing to ",(0,o.jsx)(t.code,{children:"/v1/projects/{projectId}"})," with the ",(0,o.jsx)(t.code,{children:"projectId"})," is the ID of the project you want to update. The request itself accepts the following properties:"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Property"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"name"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"string"})}),(0,o.jsx)(t.td,{children:"The name of the project"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"description"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:"string"})," (optional)"]}),(0,o.jsx)(t.td,{children:"The description of the project"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-curl",children:'curl -H "x-busy-key: Bearer {API_KEY}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "New Project Name",\n    "description": "New Project Description"\n  }\' \\\n  -X PATCH https://api.busyhour.com/v1/projects/{projectId}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},738:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(1030),n=(r(959),r(1527));const s=function(){return(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Busy Hour Account (",(0,n.jsx)(o.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,n.jsxs)("li",{children:["Generate a Master/Project API Key from"," ",(0,n.jsx)(o.Z,{to:"https://busyhour.id/dashboard/settings",children:"Dashboard/Settings"})," ","or from"," ",(0,n.jsx)(o.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]})]})}},6225:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var o=r(959);const n={},s=o.createContext(n);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);