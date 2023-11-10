"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[520],{2397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>h});var i=n(1527),r=n(6225),a=n(6198),s=n(3663),o=n(2070);const u={sidebar_position:1,sidebar_label:"Getting Started"},l="Getting Started",c={id:"react-native/getting-started",title:"Getting Started",description:"In this section, we will show you how to initialize the Busy Hour App and Main Service.",source:"@site/docs/react-native/getting-started.mdx",sourceDirName:"react-native",slug:"/react-native/getting-started",permalink:"/docs/react-native/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/react-native/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"@busy-hour/react-native",permalink:"/docs/react-native"},next:{title:"Initializing Services",permalink:"/docs/react-native/initializing-services"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Initializing Busy Hour Project/App",id:"initializing-busy-hour-projectapp",level:2},{value:"Quick Example",id:"quick-example",level:3},{value:"Initializing Busy Hour Main Service",id:"initializing-busy-hour-main-service",level:2},{value:"Quick Example",id:"quick-example-1",level:3}];function p(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.p,{children:"In this section, we will show you how to initialize the Busy Hour App and Main Service."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(o.Z,{}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(s.Z,{value:"npm",label:"NPM",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\nnpm i @busy-hour/react-native\n\n"})})}),(0,i.jsx)(s.Z,{value:"yarn",label:"YARN",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\nyarn add @busy-hour/react-native\n\n"})})}),(0,i.jsx)(s.Z,{value:"pnpm",label:"PNPM",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\npnpm add @busy-hour/react-native\n\n"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"initializing-busy-hour-projectapp",children:"Initializing Busy Hour Project/App"}),"\n",(0,i.jsxs)(t.p,{children:["To initialize Busy Hour Project/App, you can use the ",(0,i.jsx)(t.code,{children:"initializeApp"})," function. The ",(0,i.jsx)(t.code,{children:"initializeApp"})," function is exported from the ",(0,i.jsx)(t.code,{children:"@busy-hour/react-native"})," package and take the following arguments:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"configFile"})," - Config file from Busy Hour Dashboard/Apps"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"projectAppId"})," - Project App ID from Busy Hour Dashboard/Apps"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"projectId"})," - Project ID from Busy Hour Dashboard/Projects"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"quick-example",children:"Quick Example"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"With Hook"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/index.tsx"',children:"import React from 'react'\nimport { Text } from 'react-native'\nimport { useInitBusyApp } from '@busy-hour/react-native/hooks'\n// Config file from Busy Hour Dashboard\nimport busyConfig from './busyConfig.json'\n\nexport default function Index() {\n  // highlight-start\n  const isAppInitialized = useInitBusyApp({\n    // initialize the app based on the config file\n    configFile: busyConfig,\n    projectAppId: 'your-project-app-id',\n    projectId: 'your-project-id',\n    // determine if the app should be initialized or not\n    isShouldInit: true,\n  })\n  // highlight-end\n\n  if (!isAppInitialized) {\n    return <Text>Loading...</Text>\n  }\n\n  return <App />\n}\n"})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Without Hook"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/index.tsx"',children:"import React, { useEffect } from 'react';\nimport { Text } from 'react-native';\nimport { initializeApp } from '@busy-hour/react-native';\n// Config file from Busy Hour Dashboard\nimport busyConfig from './busyConfig.json';\n\nexport default function Index() {\n  const [isServiceInitialized, setServiceIsInitialized] = useState(false);\n\n  useEffect(() => {\n    (async () => {\n      // highlight-start\n      await initializeApp({\n        // initialize the app based on the config file\n        configFile: busyConfig,\n        projectAppId: 'your-project-app-id',\n        projectId: 'your-project-id',\n      });\n      // highlight-end\n\n      setServiceIsInitialized(true);\n    })();\n  }, []);\n\n  if (!isServiceInitialized) {\n    return <Text>Loading...</Text>;\n  }\n\n  return <App />;\n}\n"})})]}),"\n",(0,i.jsx)(t.h2,{id:"initializing-busy-hour-main-service",children:"Initializing Busy Hour Main Service"}),"\n",(0,i.jsxs)(t.p,{children:["After initializing Busy Hour Project/App, now you can initialize Busy Hour main services using ",(0,i.jsx)(t.code,{children:"initializeService"})," function. The ",(0,i.jsx)(t.code,{children:"initializeService"})," function is exported from the ",(0,i.jsx)(t.code,{children:"@busy-hour/react-native"})," package and take the following arguments:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"accessToken"})," - User access token"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"serviceToken"})," - Service token"]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"warning",children:[(0,i.jsxs)(t.p,{children:["To get the user access token and service token, you can use the ",(0,i.jsx)(t.code,{children:"fetch/axios"})," to request user auth data from Busy Hour. Please keep in mind, that the process of requesting user auth data should be done only from your Backend and not from your Frontend."]}),(0,i.jsxs)(t.p,{children:["In this example, the idea is that you request the auth data to your Backend and then requesting it from Backend to our REST API or using the ",(0,i.jsx)(t.code,{children:"@busy-hour/node"})," package, afterwards the response will be passed to the ",(0,i.jsx)(t.code,{children:"initializeService"})," function."]})]}),"\n",(0,i.jsx)(t.h3,{id:"quick-example-1",children:"Quick Example"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"With Hook"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import React from 'react';\nimport { Text } from 'react-native';\nimport { useInitBusyService } from '@busy-hour/react-native/hooks';\n\nexport default function Main() {\n  // highlight-start\n  const isServiceInitialized = useInitBusyService({\n    // get user auth data from busy hour through your BE\n    // read more at https://docs.busyhour.id/docs/category/nodejs\n    // or at https://docs.busyhour.id/docs/category/rest\n    accessToken: 'your-user-access-token',\n    serviceToken: 'your-user-service-token',\n    // determine if the app should be initialized or not\n    isShouldInit: true,\n  });\n  // highlight-end\n\n  if (!isServiceInitialized) {\n    return <Text>Loading...</Text>;\n  }\n\n  return <MainApp />;\n}\n"})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Without Hook"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="src/main.tsx"',children:"import React, { useEffect } from 'react'\nimport { Text } from 'react-native'\nimport { initializeService } from '@busy-hour/react-native'\n\nexport default function Main() {\n  useEffect(() => {\n    (async () => {\n      // get user auth data from busy hour through your BE\n      // read more at https://docs.busyhour.id/docs/category/nodejs\n      // or at https://docs.busyhour.id/docs/category/rest\n      // highlight-start\n      const { data } = await axios.post<{\n        accessToken: string,\n        serviceToken: string\n      }>(...)\n      // highlight-end\n\n      // initialize the service using the auth\n      // highlight-next-line\n      await initializeService(data.accessToken, data.serviceToken)\n    })()\n  }, [])\n\n  return <MainApp />\n}\n"})})]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},3663:(e,t,n)=>{n.d(t,{Z:()=>s});n(959);var i=n(5924);const r={tabItem:"tabItem_mTjK"};var a=n(1527);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,s),hidden:n,children:t})}},6198:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(959),r=n(5924),a=n(8873),s=n(8903),o=n(4831),u=n(7754),l=n(7106),c=n(2615);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[s,u]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[l,d]=f({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=l??m;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{x&&u(x)}),[x]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(6060);const x={tabList:"tabList_Guh8",tabItem:"tabItem_JIbA"};var b=n(1527);function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=o[n].value;r!==i&&(l(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function k(e){const t=(0,g.Z)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},2070:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(6276),r=(n(959),n(1527));const a=function(){return(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["Busy Hour Account (",(0,r.jsx)(i.Z,{to:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),(0,r.jsxs)("li",{children:["Create a Busy Hour Project from the"," ",(0,r.jsx)(i.Z,{to:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]}),(0,r.jsxs)("li",{children:["Create a Busy Hour App from from the"," ",(0,r.jsx)(i.Z,{to:"https://busyhour.id/dashboard/apps",children:"Dashboard/Apps"})]}),(0,r.jsxs)("li",{children:["Download Busy Hour App config file from from the"," ",(0,r.jsx)(i.Z,{to:"https://busyhour.id/dashboard/apps",children:"Dashboard/Apps"})]})]})}},6225:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(959);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);