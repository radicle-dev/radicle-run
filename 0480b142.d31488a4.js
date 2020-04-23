(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(i.forwardRef)((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),h=i,b=u["".concat(o,".").concat(h)]||u[h]||p[h]||n;return r?a.a.createElement(b,s({ref:t},l,{components:r})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var i=r(1),a=r(6),n=(r(0),r(116)),o={id:"faq",title:"FAQ",sidebar_label:"FAQ"},s={id:"faq",title:"FAQ",description:'### What is the "Radicle Registry"?',source:"@site/docs/faq.md",permalink:"/docs/faq",editUrl:"https://github.com/radicle-dev/registry.radicle.xyz/docs/faq.md",sidebar_label:"FAQ",sidebar:"someSidebar",previous:{title:"Submit transactions",permalink:"/docs/submit-transactions"}},c=[{value:"What is the &quot;Radicle Registry&quot;?",id:"what-is-the-radicle-registry",children:[]},{value:"What problem does the Registry solve?",id:"what-problem-does-the-registry-solve",children:[]},{value:"How does the Registry work?",id:"how-does-the-registry-work",children:[]},{value:"What does it look like for the user?",id:"what-does-it-look-like-for-the-user",children:[]},{value:"What is RAD?",id:"what-is-rad",children:[]},{value:"Why not use a federated architecture instead?",id:"why-not-use-a-federated-architecture-instead",children:[]}],l={rightToc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"what-is-the-radicle-registry"},'What is the "Radicle Registry"?'),Object(n.b)("p",null,"The Radicle Registry is a decentralized identity and governance service for free and open source software communities. It provides a trustless layer for reading, writing and coordinating around software project metadata."),Object(n.b)("h3",{id:"what-problem-does-the-registry-solve"},"What problem does the Registry solve?"),Object(n.b)("p",null,'In essence, the Registry provides users with the trusted, auditable and shared view of the network that is typically lacking in peer-to-peer solutions, delivering the same connected "social" layer that attracted developers to centralized code collaboration platforms like GitHub or Gitlab.'),Object(n.b)("h3",{id:"how-does-the-registry-work"},"How does the Registry work?"),Object(n.b)("p",null,"We designed the Registry as a domain-specific, permissionless blockchain using Nakamoto consensus and licensed under GPL. We chose a domain-specific chain over a generalized one to optimize for a user experience that is on par with hosted platforms: fast, low-fee transactions, scalable, and customizable."),Object(n.b)("p",null,"In addition, keeping in mind the principle of trust minimization, we chose Nakamoto consensus for its operational simplicity and best-in-class support for light clients."),Object(n.b)("h3",{id:"what-does-it-look-like-for-the-user"},"What does it look like for the user?"),Object(n.b)("p",null,"From a user point of view, the Registry allows any developer to issue a persistent self-sovereign identity. Unlike centralized platforms, identities on Radicle are owned and managed by their creators. Paired with the public key infrastructure present in ",Object(n.b)("a",{href:"https://radicle.xyz/radicle-link.html",target:"_blank",rel:"noopener noreferrer"},"Radicle Link, the peer-to-peer replication layer"),", Radicle identities are human readable, always available, and far more secure than their hosted equivalents."),Object(n.b)("p",null,"In addition to identities, the Registry gives maintainers the ability to anchor important project information (i.e. states and histories) in an immutable and auditable way. This yields a persistent & probable history of contributions and alleviates any weakness at the replication layer by providing users with the latest available information."),Object(n.b)("p",null,"Finally, the Registry allows developers to collectively manage projects without an intermediary with Radicle \u2018Orgs\u2019. A Radicle Org is a sovereign collective of developers that govern a set of projects. They are similar to GitHub or Gitlab orgs but are platform independent and can be managed among multiple users \u2014 not just admins. In practice, a Radicle ",Object(n.b)("inlineCode",{parentName:"p"},"Org")," shares a set of members and projects, a unique name, and a set of contracts or rulesets determining what permissions the members have over the projects."),Object(n.b)("p",null,"With Radicle ",Object(n.b)("inlineCode",{parentName:"p"},"Orgs"),", organizational functionality like access control, permissions, roles, and community governance, is built upon trustless foundations and public keys. This approach provides a more flexible and secure way to transfer ownership, add or remove members, manage contributions, change licenses or more generally decide upon the meta-governance of the project."),Object(n.b)("h3",{id:"what-is-rad"},"What is RAD?"),Object(n.b)("p",null,"RAD is the native asset of the Radicle Registry. RAD can be transferred between participants in the network and is used verify the records and transactions performed on the Registry."),Object(n.b)("h3",{id:"why-not-use-a-federated-architecture-instead"},"Why not use a federated architecture instead?"),Object(n.b)("p",null,"The decision to use a consensus protocol instead of a federated architecture lies in the fact that federated services cannot be offline-first and don\u2019t offer sovereign identity, as users are tied to specific instances and thus subject to some of the same drawbacks as centralized services."))}d.isMDXComponent=!0}}]);