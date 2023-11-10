"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[846],{894:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var i=t(1527),n=t(6225),r=t(6743);const c={sidebar_position:1,sidebar_label:"Listening to Messages"},d="Listening to Messages",l={id:"react/messaging/listening-to-messages",title:"Listening to Messages",description:"In this section, we will show you how to listen to messages from the messaging service.",source:"@site/docs/react/messaging/listening-to-messages.mdx",sourceDirName:"react/messaging",slug:"/react/messaging/listening-to-messages",permalink:"/docs/react/messaging/listening-to-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react/messaging/listening-to-messages.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Listening to Messages"},sidebar:"tutorialSidebar",previous:{title:"Messaging",permalink:"/docs/react/messaging"},next:{title:"Sending Messages",permalink:"/docs/react/messaging/sending-messages"}},o={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Listen to Latest Messages",id:"listen-to-latest-messages",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"Listen to Specific Incoming Messages",id:"listen-to-specific-incoming-messages",level:2},{value:"Quick Example",id:"quick-example-1",level:3}];function h(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"listening-to-messages",children:"Listening to Messages"}),"\n",(0,i.jsx)(s.p,{children:"In this section, we will show you how to listen to messages from the messaging service."}),"\n",(0,i.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(r.Z,{}),"\n",(0,i.jsx)(s.h2,{id:"listen-to-latest-messages",children:"Listen to Latest Messages"}),"\n",(0,i.jsxs)(s.p,{children:["To listen to all latest messages (e.g. ",(0,i.jsx)(s.code,{children:"group only"}),", ",(0,i.jsx)(s.code,{children:"private only"}),", or ",(0,i.jsx)(s.code,{children:"both"}),"), you can use the ",(0,i.jsx)(s.code,{children:"useLastMessageListener"})," hook which is exported from the ",(0,i.jsx)(s.code,{children:"@busy-hour/react/hooks"})," package. The hook will return an object that contains ",(0,i.jsx)(s.code,{children:"privates"}),", ",(0,i.jsx)(s.code,{children:"groups"}),", ",(0,i.jsx)(s.code,{children:"messages"}),", ",(0,i.jsx)(s.code,{children:"listenLastMessages"}),", and ",(0,i.jsx)(s.code,{children:"removeLastMessageListener"}),". For more detail about the properties see the detail from this table:"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"privates"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"message[]"})}),(0,i.jsxs)(s.td,{children:["The last messages in ",(0,i.jsx)(s.code,{children:"private"})," chat"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"groups"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"message[]"})}),(0,i.jsxs)(s.td,{children:["The last messages in ",(0,i.jsx)(s.code,{children:"group"})," chat"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"messages"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"message[]"})}),(0,i.jsxs)(s.td,{children:["The last messages in ",(0,i.jsx)(s.code,{children:"both"})," chat"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"listenLastMessages"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"function"})}),(0,i.jsx)(s.td,{children:"Listen to latest messages"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"removeLastMessageListener"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"function"})}),(0,i.jsx)(s.td,{children:"Remove the listener"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"\nimport React, { useEffect } from 'react'\nimport { useLastMessageListener } from '@busy-hour/react/hooks'\n\nexport default Main() {\n  // highlight-next-line\n  const { listenLastMessages, removeLastMessageListener } = useLastMessageListener()\n\n  useEffect(() => {\n    // highlight-start\n    // Start listening to all incoming last messages\n    listenLastMessages()\n\n    return () => {\n      // Stop listening to all incoming last messages\n      removeLastMessageListener()\n    }\n    // highlight-end\n  }, [])\n\n  return <MainApp />\n}\n\n"})}),"\n",(0,i.jsx)(s.h2,{id:"listen-to-specific-incoming-messages",children:"Listen to Specific Incoming Messages"}),"\n",(0,i.jsxs)(s.p,{children:["To listen to specific messages (e.g ",(0,i.jsx)(s.code,{children:"group with specific id"})," or ",(0,i.jsx)(s.code,{children:"private with specific id"}),"), your can use the ",(0,i.jsx)(s.code,{children:"useChatMessages"})," hook which is exported from the ",(0,i.jsx)(s.code,{children:"@busy-hour/react/hooks"})," package. The hook accept an object as the argument, for more detail about the argument properties see the detail from this table:"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"type"})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"private"})," | ",(0,i.jsx)(s.code,{children:"group"})]}),(0,i.jsx)(s.td,{children:"Type of the messages to listen into"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"chatId"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The chat id to listen into"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"limit"})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"number"})," (optional)"]}),(0,i.jsx)(s.td,{children:"Total message to retrieve (default: 15)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"order"})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"asc"})," | ",(0,i.jsx)(s.code,{children:"desc"})," (optional)"]}),(0,i.jsxs)(s.td,{children:["Order of the messages to retrieve (default: ",(0,i.jsx)(s.code,{children:"asc"}),")"]})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:["The hook itself will return an object that contains ",(0,i.jsx)(s.code,{children:"messages"})," and ",(0,i.jsx)(s.code,{children:"sendMessage"}),". For more detail about the properties see the detail from this table:"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"messages"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"message[]"})}),(0,i.jsx)(s.td,{children:"The messages in the chat"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"sendMessage"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"function"})}),(0,i.jsx)(s.td,{children:"Send a message to the chat"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"quick-example-1",children:"Quick Example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"\nimport React, { useEffect } from 'react'\nimport { useChatMessages } from '@busy-hour/react/hooks'\n\nexport default Main() {\n  // highlight-start\n  const { mesages, sendMessage } = useChatMessages({\n    type: 'private',\n    chatId: 'the-chat-id-to-listen-to',\n  })\n  // highlight-end\n\n  return <MainApp />\n}\n\n"})})]})}function x(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6743:(e,s,t)=>{t.d(s,{Z:()=>r});var i=t(6276),n=(t(959),t(1527));const r=function(){return(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["App Initialized (see"," ",(0,n.jsx)(i.Z,{to:"../getting-started#initializing-busy-hour-projectapp)",children:"Initializing Busy Hour Project/App"}),")"]}),(0,n.jsxs)("li",{children:["Main Service Initialized (see",(0,n.jsx)(i.Z,{to:"../getting-started#initializing-busy-hour-main-service",children:"Initializing Busy Hour Main Service"}),")"]}),(0,n.jsxs)("li",{children:["Messaging Service Initialized (see"," ",(0,n.jsx)(i.Z,{to:"../initializing-services#initializing-messaging",children:"Initializing Messaging"}),")"]})]})}},6225:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>c});var i=t(959);const n={},r=i.createContext(n);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);