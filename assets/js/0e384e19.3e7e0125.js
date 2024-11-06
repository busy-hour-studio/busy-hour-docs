"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[9671],{1225:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(1527),r=t(6225);const o={sidebar_position:1,sidebar_label:"Introduction",title:"Introduction"},s="Busy Hour",a={id:"intro",title:"Introduction",description:"Busy Hour is a chat, voice & video call, and activity feeds solutions. Any messages that stored in Busy Hour is fully encrypted, including the activity feeds of the users. The encryption can be enabled through the dashboard when creating the project and cannot be changed afterwards.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"@busy-hour/react",permalink:"/docs/react"}},d={},c=[];function u(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"busy-hour",children:"Busy Hour"})}),"\n",(0,i.jsxs)(n.p,{children:["Busy Hour is a chat, voice & video call, and activity feeds solutions. Any messages that stored in Busy Hour is fully encrypted, including the activity feeds of the users. The encryption can be enabled through the ",(0,i.jsx)(n.a,{href:"https://busyhour.id/dashboard",children:"dashboard"})," when creating the project and cannot be changed afterwards."]}),"\n",(0,i.jsx)(n.h1,{id:"quick-example",children:"Quick Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="src/index.ts"',children:"import React, { useEffect } from 'react';\nimport { useInitBusyApp } from '@busy-hour/react';\n// Config file from Busy Hour Dashboard\nimport busyConfig from './busyConfig.json';\n\nexport default function Index() {\n  // highlight-start\n  const [isAppInitialized, isAppInitializedError] = useInitBusyApp({\n    // determine if the app should be initialized or not\n    isShouldInit: true,\n    clientId: 'your-client-id',\n    userId: 'your-user-id',\n    projectAppId: 'your-project-app-id',\n    projectId: 'your-project-id',\n    accessToken: 'your-user-access-token',\n    serviceToken: 'your-user-service-token',\n    // initialize the app based on the config file, downloaded from the dashboard\n    config: busyConfig,\n    onError(reinitialize) {\n      // Handle the initialization error\n      // For example, refetch the user access and service token\n      // ...\n      // Reinitialize the app\n      reinitialize();\n    },\n  });\n  // highlight-end\n\n  if (!isAppInitialized) {\n    return <div>Loading...</div>;\n  }\n\n  if (isAppInitializedError) {\n    return <div>Error: {isAppInitializedError}</div>;\n  }\n\n  return <App />;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},6225:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(959);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);