"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[2208],{17:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var i=r(1527),o=r(6225),s=r(738);const n={sidebar_position:3,sidebar_label:"Retrieving Projects"},c="Retrieving Projects",d={id:"rest/projects/retrieve-projects",title:"Retrieving Projects",description:"In this section, we will show you how to get a list or one of Busy Hour Project.",source:"@site/docs/rest/projects/retrieve-projects.mdx",sourceDirName:"rest/projects",slug:"/rest/projects/retrieve-projects",permalink:"/docs/rest/projects/retrieve-projects",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/rest/projects/retrieve-projects.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Retrieving Projects"},sidebar:"tutorialSidebar",previous:{title:"Updating a Project",permalink:"/docs/rest/projects/updating-a-project"},next:{title:"Deleting a Project",permalink:"/docs/rest/projects/deleting-a-project"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Retrieving Multiple Projects",id:"retrieving-multiple-projects",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"Retrieving a Project",id:"retrieving-a-project",level:2},{value:"Quick Example",id:"quick-example-1",level:3}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"retrieving-projects",children:"Retrieving Projects"})}),"\n",(0,i.jsx)(t.p,{children:"In this section, we will show you how to get a list or one of Busy Hour Project."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(s.Z,{}),"\n",(0,i.jsx)(t.h2,{id:"retrieving-multiple-projects",children:"Retrieving Multiple Projects"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"You only can retrieve a list of Busy Hour Project only with a Master API Key and not with a Project API Key."})}),"\n",(0,i.jsxs)(t.p,{children:["To retrieve a list of Busy Hour Project, you will need to use the ",(0,i.jsx)(t.code,{children:"GET"})," method pointing to ",(0,i.jsx)(t.code,{children:"/v1/projects"}),". The request itself accepts a query string with the following properties:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"projectName"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"string"})," (optional)"]}),(0,i.jsx)(t.td,{children:"The name of the project"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"number"})," (optional)"]}),(0,i.jsx)(t.td,{children:"Total number of apps to retrieve, (default: 10)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"page"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"number"})," (optional)"]}),(0,i.jsx)(t.td,{children:"The page number of apps to retrieve, (default: 1)"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-curl",children:'curl -H "x-busy-key: Bearer {API_KEY}" \\\n  https://api.busyhour.com/v1/projects?projectName={PROJECT_NAME}&limit={LIMIT}&page={PAGE}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"retrieving-a-project",children:"Retrieving a Project"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"You only can retrieve a Busy Hour Project with any Master API Key or a Project API Key that only specificly for the project you want to retrieve."})}),"\n",(0,i.jsxs)(t.p,{children:["To retrieve a Busy Hour Project, you will need to use the ",(0,i.jsx)(t.code,{children:"GET"})," method pointing to ",(0,i.jsx)(t.code,{children:"/v1/projects/{projectId}"})," with the ",(0,i.jsx)(t.code,{children:"projectId"})," is the ID of the project you want to retrieve."]}),"\n",(0,i.jsx)(t.h3,{id:"quick-example-1",children:"Quick Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-curl",children:'curl -H "x-busy-key: Bearer {API_KEY}" \\\n  https://api.busyhour.com/v1/projects/{projectId}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},738:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(1030),o=(r(959),r(1527));const s=function(){return(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:["Busy Hour Account (",(0,o.jsx)(i.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,o.jsxs)("li",{children:["Generate a Master/Project API Key from"," ",(0,o.jsx)(i.Z,{to:"https://busyhour.id/dashboard/settings",children:"Dashboard/Settings"})," ","or from"," ",(0,o.jsx)(i.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]})]})}},6225:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>n});var i=r(959);const o={},s=i.createContext(o);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);