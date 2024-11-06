"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[3130],{6204:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var s=i(1527),n=i(6225),r=i(1939),o=i(9283);const a={sidebar_position:1,sidebar_label:"Getting Started"},d="Getting Started",c={id:"react/messaging/getting-started",title:"Getting Started",description:"In this section, we will show you how to start using Busy Hour Messaging features.",source:"@site/docs/react/messaging/getting-started.mdx",sourceDirName:"react/messaging",slug:"/react/messaging/getting-started",permalink:"/docs/react/messaging/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react/messaging/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Messaging",permalink:"/docs/react/messaging"},next:{title:"Listening to Last Message",permalink:"/docs/react/messaging/last-message"}},l={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enabling Push Notifications",id:"enabling-push-notifications",level:2},{value:"Storing Firebase Device Token",id:"storing-firebase-device-token",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,s.jsx)(t.p,{children:"In this section, we will show you how to start using Busy Hour Messaging features."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(r.Z,{}),"\n",(0,s.jsx)(t.h2,{id:"enabling-push-notifications",children:"Enabling Push Notifications"}),"\n",(0,s.jsx)(t.p,{children:"To enable Push Notifications in your app, you need to do the following:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a Firebase Project through ",(0,s.jsx)(t.a,{href:"https://firebase.google.com/",children:"Firebase Console"})]}),"\n",(0,s.jsxs)(t.li,{children:["Enable Firebase Cloud Messaging through ",(0,s.jsx)(t.a,{href:"https://firebase.google.com/",children:"Firebase Console"})]}),"\n",(0,s.jsxs)(t.li,{children:["Download Firebase Admin SDK Private Key from ",(0,s.jsx)(t.a,{href:"https://firebase.google.com/",children:"Firebase Console"}),' by clicking "',(0,s.jsx)(t.strong,{children:"Generate new private key"}),'"']}),"\n"]}),"\n",(0,s.jsx)(o.S,{}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Copy your Firebase Project Id, Client Email, and Private Key into your Busy Hour Project FCM Config."}),"\n"]}),"\n",(0,s.jsx)(o.B,{}),"\n",(0,s.jsx)(t.p,{children:"For more detail which field need to be filled with your Firebase Project Id, Client Email, and Private Key, please refer to the following table:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Project Id"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"The ID of the Firebase Project"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Firebase Email"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"The Client Email of the Firebase Project"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Private Key"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"The Private Key of the Firebase Project"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"storing-firebase-device-token",children:"Storing Firebase Device Token"}),"\n",(0,s.jsxs)(t.p,{children:["Once you have your Firebase Project Id, Client Email, and Private Key, are stored in your Busy Hour Project FCM Config. You can start by initializing your firebase app in your react project and get your device token. Once you have your device token, you can store it in our Busy Hour Server by using ",(0,s.jsx)(t.code,{children:"useSaveDeviceToken"})," hook."]}),"\n",(0,s.jsx)(t.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import React from 'react';\nimport { useSaveDeviceToken } from '@busy-hour/react';\n\nexport default Main() {\n  const [isAppInitialized] = useInitBusyHour({\n    // Initialize the app\n  });\n\n  // highlight-start\n  useSaveDeviceToken({\n    // Notify the hooks to save the device token\n    isShouldSave: isAppInitialized,\n    token: 'your-device-token',\n    platform: 'web', // or 'android' or 'ios'\n  });\n  // highlight-end\n\n  // ...rest of your code\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,s.jsx)(t.p,{children:"After you have completed the above steps, you are ready to start using Busy Hour Messaging features."})]})}function g(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9283:(e,t,i)=>{i.d(t,{B:()=>r,S:()=>n});var s=i(1527);const n=()=>(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%",padding:"1rem"},children:(0,s.jsx)("img",{src:"/img/firebase-admin-sdk.webp"})}),r=()=>(0,s.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"1rem"},children:(0,s.jsx)("img",{src:"/img/fcm-config.webp"})})},1939:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(1030),n=(i(959),i(1527));const r=function(){return(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Busy Hour Account (",(0,n.jsx)(s.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,n.jsxs)("li",{children:["Create a Busy Hour Project from the"," ",(0,n.jsx)(s.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]}),(0,n.jsxs)("li",{children:["Create a Busy Hour App from from the"," ",(0,n.jsx)(s.Z,{to:"https://busyhour.id/dashboard/apps",children:"Dashboard/Apps"})]}),(0,n.jsxs)("li",{children:["Download Busy Hour App config file from from the"," ",(0,n.jsx)(s.Z,{to:"https://busyhour.id/dashboard/apps",children:"Dashboard/Apps"})]})]})}},6225:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var s=i(959);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);