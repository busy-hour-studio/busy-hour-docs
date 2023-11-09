"use strict";(self.webpackChunk_busy_hour_docs=self.webpackChunk_busy_hour_docs||[]).push([[60],{2e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var n=r(1527),a=r(6225),s=r(6198),o=r(3663);const u={sidebar_position:1,sidebar_label:"Getting Started"},l="Getting Started",i={id:"nodejs/getting-started",title:"Getting Started",description:"In this section, we will show you how to start using Busy Hour API through our Node Js SDK.",source:"@site/docs/nodejs/getting-started.mdx",sourceDirName:"nodejs",slug:"/nodejs/getting-started",permalink:"/busy-hour-docs/docs/nodejs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/docs/nodejs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"@busy-hour/node",permalink:"/busy-hour-docs/docs/nodejs"},next:{title:"Rest API",permalink:"/busy-hour-docs/docs/rest"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(t.p,{children:"In this section, we will show you how to start using Busy Hour API through our Node Js SDK."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Busy Hour Account (",(0,n.jsx)(t.a,{href:"https://busyhour.id/auth/sign-up",children:"Sign Up"})," if you don't have one yet)"]}),"\n",(0,n.jsxs)(t.li,{children:["Create a Busy Hour Project from the ",(0,n.jsx)(t.a,{href:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]}),"\n",(0,n.jsxs)(t.li,{children:["Generate an API Key from the ",(0,n.jsx)(t.a,{href:"https://busyhour.id/dashboard/projects",children:"Dashboard/Projects"})]}),"\n",(0,n.jsxs)(t.li,{children:["Create a Busy Hour App from from the ",(0,n.jsx)(t.a,{href:"https://busyhour.id/dashboard/apps",children:"Dashboard/Apps"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(o.Z,{value:"npm",label:"NPM",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\nnpm i @busy-hour/node\n\n"})})}),(0,n.jsx)(o.Z,{value:"yarn",label:"YARN",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\nyarn add @busy-hour/node\n\n"})})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"PNPM",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\npnpm add @busy-hour/node\n\n"})})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3663:(e,t,r)=>{r.d(t,{Z:()=>o});r(959);var n=r(5924);const a={tabItem:"tabItem_mTjK"};var s=r(1527);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,o),hidden:r,children:t})}},6198:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(959),a=r(5924),s=r(8873),o=r(8903),u=r(4831),l=r(7754),i=r(7106),c=r(2615);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,d]=p({queryString:r,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=i??f;return b({value:e,tabValues:s})?e:null})();(0,u.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(6060);const g={tabList:"tabList_Guh8",tabItem:"tabItem_JIbA"};var v=r(1527);function y(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=u[r].value;a!==n&&(i(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:u.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},6225:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>o});var n=r(959);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);