"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,title:"Basic"},i=void 0,p={unversionedId:"documentation/Examples/basic",id:"documentation/Examples/basic",title:"Basic",description:"To preview app with this example, clone github repo and run yarn example ios or yarn example android.",source:"@site/docs/documentation/Examples/basic.md",sourceDirName:"documentation/Examples",slug:"/documentation/Examples/basic",permalink:"/rn-emoji-keyboard/docs/documentation/Examples/basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/Examples/basic.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Basic"},sidebar:"documentation",previous:{title:"Internationalization",permalink:"/rn-emoji-keyboard/docs/documentation/internationalization"},next:{title:"\ud83d\udea7 Dark Mode",permalink:"/rn-emoji-keyboard/docs/documentation/Examples/dark"}},c={},s=[{value:"Usage",id:"usage",level:3}],l={toc:s};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To preview app with this example, clone ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TheWidlarzGroup/rn-emoji-keyboard.git"},(0,a.kt)("strong",{parentName:"a"},"github repo"))," and run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn example ios")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn example android"),".")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Basic usage of the emoji picker is very simple. Just import ",(0,a.kt)("inlineCode",{parentName:"p"},"EmojiPicker"),", pass ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TheWidlarzGroup/rn-emoji-keyboard/docs/api/modal"},(0,a.kt)("strong",{parentName:"a"},"required props"))," and its ready to go."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import EmojiPicker from 'rn-emoji-keyboard'\n\nconst ExampleComponent = () => {\n  // ...\n\n  return (\n    <EmojiPicker open={isOpen} onClose={handleOnClose} onEmojiSelected={handleOnEmojiSelected} />\n  )\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Preview",src:n(5960).Z,width:"432",height:"400"})))}m.isMDXComponent=!0},5960:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/light-preview-d7ecc61ab7548ce311bf9aae5c8effa5.jpg"}}]);