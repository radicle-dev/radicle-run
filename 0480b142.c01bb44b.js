(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{119:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var o=r(0),i=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=o,p=u["".concat(a,".").concat(b)]||u[b]||h[b]||n;return r?i.a.createElement(p,s({ref:t},c,{components:r})):i.a.createElement(p,s({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var o=r(1),i=r(6),n=(r(0),r(119)),a={id:"faq",title:"FAQ",sidebar_label:"FAQ"},s={id:"faq",title:"FAQ",description:'### What is the "registry"?',source:"@site/docs/faq.md",permalink:"/faq",editUrl:"https://github.com/radicle-dev/radicle-run/edit/master/website/docs/faq.md",sidebar_label:"FAQ",sidebar:"someSidebar",previous:{title:"Glossary",permalink:"/glossary"}},l=[{value:"What is the &quot;registry&quot;?",id:"what-is-the-registry",children:[]},{value:"What problem does the registry solve?",id:"what-problem-does-the-registry-solve",children:[]},{value:"Why is canonical name registry for open source projects important?",id:"why-is-canonical-name-registry-for-open-source-projects-important",children:[]},{value:"How does the registry work?",id:"how-does-the-registry-work",children:[]},{value:"What does it look like for the user?",id:"what-does-it-look-like-for-the-user",children:[]},{value:"What does the registry do for sustainability in FOSS?",id:"what-does-the-registry-do-for-sustainability-in-foss",children:[]},{value:"Doesn&#39;t proof-of-work promote carbon emissions?",id:"doesnt-proof-of-work-promote-carbon-emissions",children:[]},{value:"Code Collaboration",id:"code-collaboration",children:[{value:"How does code collaboration currently work?",id:"how-does-code-collaboration-currently-work",children:[]},{value:"Does Radicle Registry replace Github?",id:"does-radicle-registry-replace-github",children:[]},{value:"What can you do with Radicle Registry today?",id:"what-can-you-do-with-radicle-registry-today",children:[]}]}],c={rightToc:l};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"what-is-the-registry"},'What is the "registry"?'),Object(n.b)("p",null,"The Registry is the canonical source for all project and user metadata, including identity. It is a decentralized service which provides trustless read and write access to this data."),Object(n.b)("h3",{id:"what-problem-does-the-registry-solve"},"What problem does the registry solve?"),Object(n.b)("p",null,"The problem is that of maintaining a global, immutable and always available identity service for organizations and users. The registry offers such service in a decentralized manner."),Object(n.b)("h3",{id:"why-is-canonical-name-registry-for-open-source-projects-important"},"Why is canonical name registry for open source projects important?"),Object(n.b)("p",null,"The registry enables all users to have a wallet that is linked to their code collaboration identity. It enables orgs to have a wallet and manage funds linked to projects, and it allows users and orgs to benefit from a sovereign identity."),Object(n.b)("h3",{id:"how-does-the-registry-work"},"How does the registry work?"),Object(n.b)("p",null,"We designed the registry as a permissionless blockchain using Nakamoto consensus and proof-of-work. We chose Nakamoto consensus for its operational simplicity, and proof-of-work for its best-in-class support for light clients."),Object(n.b)("h3",{id:"what-does-it-look-like-for-the-user"},"What does it look like for the user?"),Object(n.b)("p",null,"The user is not directly exposed to the registry, but uses the registry's services through end-user applications. The user is able to register orgs and user handles, as well as manage funds held by the registry."),Object(n.b)("h3",{id:"what-does-the-registry-do-for-sustainability-in-foss"},"What does the registry do for sustainability in FOSS?"),Object(n.b)("p",null,"The registry enables native value transfer, ie. transfer of money and native assets between users. This allows developers to monetize their work or services offered on the network, with little to no friction."),Object(n.b)("h3",{id:"doesnt-proof-of-work-promote-carbon-emissions"},"Doesn't proof-of-work promote carbon emissions?"),Object(n.b)("p",null,"Proof-of-work is computionally intesive, which unfortunately requires a lot of electricity. This decision didn't come light and we've done thorough research with all existing alternatives."),Object(n.b)("p",null,"While each alternative comes with different trade-offs, proof-of-work is currently the most reliable way to develop compact light client and build-up an immutable history ledger."),Object(n.b)("h2",{id:"code-collaboration"},"Code Collaboration"),Object(n.b)("h3",{id:"how-does-code-collaboration-currently-work"},"How does code collaboration currently work?"),Object(n.b)("h3",{id:"does-radicle-registry-replace-github"},"Does Radicle Registry replace Github?"),Object(n.b)("p",null,"Radicle is indeed a secure alternative to platforms such as Github."),Object(n.b)("h3",{id:"what-can-you-do-with-radicle-registry-today"},"What can you do with Radicle Registry today?"))}d.isMDXComponent=!0}}]);