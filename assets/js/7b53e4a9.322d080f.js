"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[8706],{5436:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=s(1527),o=s(6225),r=s(1939);const i={sidebar_position:1,sidebar_label:"Listening to Last Comments"},d="Listening to Last Comments",c={id:"react/feeds/comments/last-comment",title:"Listening to Last Comments",description:"In this section, we will show you how to listening to all last feeds.",source:"@site/docs/react/feeds/comments/last-comment.mdx",sourceDirName:"react/feeds/comments",slug:"/react/feeds/comments/last-comment",permalink:"/docs/react/feeds/comments/last-comment",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react/feeds/comments/last-comment.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Listening to Last Comments"},sidebar:"tutorialSidebar",previous:{title:"Comments",permalink:"/docs/react/feed/comments"},next:{title:"Comments Management",permalink:"/docs/react/feeds/comments/commenting"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Listen to Last Comments",id:"listen-to-last-comments",level:2},{value:"Quick Example",id:"quick-example",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"listening-to-last-comments",children:"Listening to Last Comments"})}),"\n","\n",(0,n.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(t.p,{children:"In this section, we will show you how to listening to all last feeds."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(r.Z,{}),"\n",(0,n.jsx)(t.h2,{id:"listen-to-last-comments",children:"Listen to Last Comments"}),"\n",(0,n.jsxs)(t.p,{children:["To start listening to last feeds, you can use the ",(0,n.jsx)(t.code,{children:"useFeedComments"})," hooks from ",(0,n.jsx)(t.code,{children:"@busy-hour/react"})," package. The hook itself take the following properties:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isShouldInit"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:"Determine if you want to start listening or not"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"version"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{children:"The version of the last message to listen to"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"userId"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"string"})," (optional)"]}),(0,n.jsx)(t.td,{children:"The user id of the feed that you want to listen to"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"quick-example",children:"Quick Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import React from 'react';\nimport { useFeedComments } from '@busy-hour/react';\n\nexport default function Main() {\n  // highlight-start\n  const comments = useFeedComments({\n    isShouldInit: true,\n    version: 1,\n  });\n  // highlight-end\n\n  // ...rest of your code\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1939:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(1030),o=(s(959),s(1527));const r=function(){return(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:["Busy Hour Account (",(0,o.jsx)(n.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,o.jsxs)("li",{children:["Create a Busy Hour Project from the"," ",(0,o.jsx)(n.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]}),(0,o.jsxs)("li",{children:["Create a Busy Hour App from from the"," ",(0,o.jsx)(n.Z,{to:"https://busyhour.id/dashboard/apps",children:"Dashboard/Apps"})]}),(0,o.jsxs)("li",{children:["Download Busy Hour App config file from from the"," ",(0,o.jsx)(n.Z,{to:"https://busyhour.id/dashboard/apps",children:"Dashboard/Apps"})]})]})}},6225:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>i});var n=s(959);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);