"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[8771],{6986:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var t=n(1527),i=n(6225);const a={sidebar_position:3,sidebar_label:"Messaging Worker"},r="Messaging Worker",o={id:"react/messaging/messaging-worker",title:"Messaging Worker",description:"To setup messaging service, you need to add a messaging worker on your site at your public directory. You can do that by creating a messaging-init-sw.js file in the public directory and add the following code.",source:"@site/docs/react/messaging/messaging-worker.mdx",sourceDirName:"react/messaging",slug:"/react/messaging/messaging-worker",permalink:"/docs/react/messaging/messaging-worker",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react/messaging/messaging-worker.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Messaging Worker"},sidebar:"tutorialSidebar",previous:{title:"Sending Messages",permalink:"/docs/react/messaging/sending-messages"},next:{title:"Activity Feed",permalink:"/docs/react/feed"}},c={},g=[];function d(e){const s={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"messaging-worker",children:"Messaging Worker"}),"\n",(0,t.jsxs)(s.p,{children:["To setup messaging service, you need to add a messaging worker on your site at your ",(0,t.jsx)(s.code,{children:"public"})," directory. You can do that by creating a ",(0,t.jsx)(s.code,{children:"messaging-init-sw.js"})," file in the ",(0,t.jsx)(s.code,{children:"public"})," directory and add the following code."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="public/messaging-init-sw.js"',children:"\n/* eslint-disable no-undef */\n// Give the service worker access to Firebase Messaging.\n// Note that you can only use Firebase Messaging here. Other Firebase libraries\n// are not available in the service worker.\nimportScripts(\n  'https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js'\n);\nimportScripts(\n  'https://www.gstatic.com/firebasejs/10.5.2/firebase-messaging-compat.js'\n);\n\n/** @typedef {{\n * uri: string;\n * name: string;\n * type: string;\n * }} Attachment */\n\n/** @typedef {{\n * message: string;\n * attachments: Attachment[];\n * custom: string;\n * type: string;\n * }} MessageBody */\n\ntry {\n  const url = new URL(location);\n  /** @type {import('firebase/app').FirebaseOptions} */\n  const config = JSON.parse(url.searchParams.get('config'));\n\n  /** @type {import('firebase/app').FirebaseApp} */\n  const app = firebase.initializeApp(config, config.appId);\n  /** @type {import('firebase/messaging').Messaging} */\n  const messaging = firebase.messaging(app);\n\n  // Modify in here to handle the notification on background\n  messaging.onBackgroundMessage(\n    /** @type {import('firebase/messaging').MessagePayload} */\n    async (message) => {\n      if (!message.data || !message.data['busy-hour']) return;\n\n      /** @type {MessageBody} */\n      const payload = JSON.parse(message.data['busy-hour'] || '{}');\n\n      // Show the notification using the payload with the showNotification functions\n      // self.registration.showNotification\n    }\n  );\n} catch (err) {\n  console.warn('No config found.');\n}\n\n"})})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6225:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var t=n(959);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);