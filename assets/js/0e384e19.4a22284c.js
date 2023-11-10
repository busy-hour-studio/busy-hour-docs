"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[9671],{664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(1527),o=n(6225);const r={sidebar_position:1,sidebar_label:"Introduction",title:"Introduction"},s="Busy Hour",a={id:"intro",title:"Introduction",description:"Busy Hour is a chat, voice & video call, and activity feeds solutions. Any messages that stored in Busy Hour is fully encrypted, including the activity feeds of the users. The encryption can be enabled through the dashboard when creating the project and cannot be changed afterwards.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"@busy-hour/react",permalink:"/docs/react"}},c={},d=[];function u(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"busy-hour",children:"Busy Hour"}),"\n",(0,i.jsxs)(t.p,{children:["Busy Hour is a chat, voice & video call, and activity feeds solutions. Any messages that stored in Busy Hour is fully encrypted, including the activity feeds of the users. The encryption can be enabled through the ",(0,i.jsx)(t.a,{href:"https://busyhour.id/dashboard",children:"dashboard"})," when creating the project and cannot be changed afterwards."]}),"\n",(0,i.jsx)(t.h1,{id:"quick-example",children:"Quick Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/index.ts"',children:"import React, { useEffect } from 'react'\nimport { useInitBusyApp } from '@busy-hour/react/hooks';\n// Config file from Busy Hour Dashboard\nimport busyConfig from './busyConfig.json'\n\nexport default function Index() {\n  // highlight-start\n  const isAppInitialized = useInitBusyApp({\n    // initialize the app based on the config file\n    configFile: busyConfig,\n    projectAppId: 'your-project-app-id',\n    projectId: 'your-project-id',\n    // determine if the app should be initialized or not\n    isShouldInit: true,\n  });\n  // highlight-end\n\n  // highlight-start\n  const isServiceInitialized = useInitBusyService({\n    // get user auth data from busy hour through your BE\n    // read more at https://docs.busyhour.id/docs/category/nodejs\n    // or at https://docs.busyhour.id/docs/category/rest\n    accessToken: 'your-user-access-token',\n    serviceToken: 'your-user-service-token',\n    // determine if the app should be initialized or not\n    isShouldInit: isAppInitialized,\n  });\n  // highlight-end\n\n  if (!isAppInitialized || !isServiceInitialized) {\n    return <div>Loading...</div>\n  }\n\n  return <App />\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},6225:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(959);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);