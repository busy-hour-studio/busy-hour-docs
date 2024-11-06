"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[7998],{4113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(1527),o=r(6225),s=r(738);const i={sidebar_position:4,sidebar_label:"Deleting a Project"},c="Deleting a Project",a={id:"rest/projects/deleting-a-project",title:"Deleting a Project",description:"Deleting any Busy Hour Project will remove any access to the project including the apps and the users. Keep in mind that this action is irreversible and cannot be undone.",source:"@site/docs/rest/projects/deleting-a-project.mdx",sourceDirName:"rest/projects",slug:"/rest/projects/deleting-a-project",permalink:"/docs/rest/projects/deleting-a-project",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/rest/projects/deleting-a-project.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Deleting a Project"},sidebar:"tutorialSidebar",previous:{title:"Retrieving Projects",permalink:"/docs/rest/projects/retrieve-projects"},next:{title:"App Management",permalink:"/docs/rest/apps"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deleting a Project",id:"deleting-a-project-1",level:2},{value:"Quick Example",id:"quick-example",level:3}];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"deleting-a-project",children:"Deleting a Project"})}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"Deleting any Busy Hour Project will remove any access to the project including the apps and the users. Keep in mind that this action is irreversible and cannot be undone."})}),"\n",(0,n.jsx)(t.p,{children:"In this section, we will show you how to delete a Busy Hour Project."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(s.Z,{}),"\n",(0,n.jsx)(t.h2,{id:"deleting-a-project-1",children:"Deleting a Project"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"You can delete a Busy Hour Project with any Master API Key or a Project API Key that only specificly for the project you want to delete."})}),"\n",(0,n.jsxs)(t.p,{children:["To delete a Busy Hour Project, you will need to use the ",(0,n.jsx)(t.code,{children:"DELETE"})," method pointing to ",(0,n.jsx)(t.code,{children:"/v1/projects/{projectId}"})," with the ",(0,n.jsx)(t.code,{children:"projectId"})," is the ID of the project you want to delete."]}),"\n",(0,n.jsx)(t.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-curl",children:'curl -H "x-busy-key: Bearer {API_KEY}" \\\n  -X DELETE https://api.busyhour.com/v1/projects/{projectId}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},738:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(1030),o=(r(959),r(1527));const s=function(){return(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:["Busy Hour Account (",(0,o.jsx)(n.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,o.jsxs)("li",{children:["Generate a Master/Project API Key from"," ",(0,o.jsx)(n.Z,{to:"https://busyhour.id/dashboard/settings",children:"Dashboard/Settings"})," ","or from"," ",(0,o.jsx)(n.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]})]})}},6225:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var n=r(959);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);