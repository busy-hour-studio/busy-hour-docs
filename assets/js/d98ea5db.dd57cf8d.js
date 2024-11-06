"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[6581],{1657:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=s(1527),n=s(6225),r=s(1939);const o={sidebar_position:1,sidebar_label:"Listening to Last Activity Feed"},d="Listening to Last Activity Feed",a={id:"react/feeds/last-feed",title:"Listening to Last Activity Feed",description:"In this section, we will show you how to listening to all last feeds.",source:"@site/docs/react/feeds/last-feed.mdx",sourceDirName:"react/feeds",slug:"/react/feeds/last-feed",permalink:"/docs/react/feeds/last-feed",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react/feeds/last-feed.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Listening to Last Activity Feed"},sidebar:"tutorialSidebar",previous:{title:"Activity Feed",permalink:"/docs/react/feed"},next:{title:"Activity Feed Management",permalink:"/docs/react/feeds/feeding"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Listen to Last Activity Feed",id:"listen-to-last-activity-feed",level:2},{value:"Quick Example",id:"quick-example",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"listening-to-last-activity-feed",children:"Listening to Last Activity Feed"})}),"\n","\n",(0,i.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.p,{children:"In this section, we will show you how to listening to all last feeds."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(r.Z,{}),"\n",(0,i.jsx)(t.h2,{id:"listen-to-last-activity-feed",children:"Listen to Last Activity Feed"}),"\n",(0,i.jsxs)(t.p,{children:["To start listening to last feeds, you can use the ",(0,i.jsx)(t.code,{children:"useLastFeed"})," hooks from ",(0,i.jsx)(t.code,{children:"@busy-hour/react"})," package. The hook itself take the following properties:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isShouldInit"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:"Determine if you want to start listening or not"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"version"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"number"})}),(0,i.jsx)(t.td,{children:"The version of the last message to listen to"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"userId"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"string"})," (optional)"]}),(0,i.jsx)(t.td,{children:"The user id of the feed that you want to listen to"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"quick-example",children:"Quick Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import React from 'react';\nimport { useLastFeed } from '@busy-hour/react';\n\nexport default function Main() {\n  // highlight-start\n  const feeds = useLastFeed({\n    isShouldInit: true,\n    version: 1,\n  });\n  // highlight-end\n\n  // ...rest of your code\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1939:(e,t,s)=>{s.d(t,{Z:()=>r});var i=s(1030),n=(s(959),s(1527));const r=function(){return(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Busy Hour Account (",(0,n.jsx)(i.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,n.jsxs)("li",{children:["Create a Busy Hour Project from the"," ",(0,n.jsx)(i.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]}),(0,n.jsxs)("li",{children:["Create a Busy Hour App from from the"," ",(0,n.jsx)(i.Z,{to:"https://busyhour.id/dashboard/apps",children:"Dashboard/Apps"})]}),(0,n.jsxs)("li",{children:["Download Busy Hour App config file from from the"," ",(0,n.jsx)(i.Z,{to:"https://busyhour.id/dashboard/apps",children:"Dashboard/Apps"})]})]})}},6225:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>o});var i=s(959);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);