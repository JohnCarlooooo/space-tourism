(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1938:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d}),s(4182),s(8979),s(2523);var r=s(3191),a=s(8716),n=s(7922),i=s.n(n),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4182)),"C:\\Practice Projects\\Front End Mentor\\space-tourism\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,8979)),"C:\\Practice Projects\\Front End Mentor\\space-tourism\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,2523)),"C:\\Practice Projects\\Front End Mentor\\space-tourism\\src\\app\\not-found.tsx"]}],c=["C:\\Practice Projects\\Front End Mentor\\space-tourism\\src\\app\\page.tsx"],p="/page",x={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9652:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},7611:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,9404,23))},1954:(e,t,s)=>{Promise.resolve().then(s.bind(s,7236))},5303:()=>{},7236:(e,t,s)=>{"use strict";s.d(t,{default:()=>P});var r=s(326),a=s(112),n=s(5047),i=s(7577),o=s.n(i),l=s(6226);let d={src:"/_next/static/media/icon-hamburger.04a0cf6b.svg",height:21,width:24,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/logo.bc447a32.svg",height:48,width:48,blurWidth:0,blurHeight:0};var p=s(434);let x=[{name:"HOME",to:"/",id:1},{name:"DESTINATION",to:"/destination",id:2},{name:"CREW",to:"/crew",id:3},{name:"TECHNOLOGY",to:"/technology",id:4}],h=({sidebarCycleOpen:e,setPreloader:t})=>{let s=(0,n.usePathname)();return(0,r.jsxs)("div",{className:"z-10 w-full fixed flex flex-row items-center tablet:items-start justify-between",children:[r.jsx("div",{className:"py-6 px-6 tablet:px-10 desktop:px-[55px] desktop:py-16 ",children:r.jsx(p.default,{href:"/",children:r.jsx(l.default,{className:"h-[40px] w-[40px]",src:c,alt:"logo"})})}),r.jsx("button",{onClick:()=>e(),className:"tablet:hidden py-6 px-6 tablet:px-10",children:r.jsx(l.default,{className:"h-[21px] w-[24px]",src:d,alt:"hamburger"})}),r.jsx("div",{className:"h-24 px-12 w-[450px] hidden bg-white/[0.04] backdrop-blur-[40.774227142333984px] tablet:flex flex-row justify-between items-center desktop:mt-[40px] desktop:w-[830px] desktop:px-[123px]",children:x.map((e,a)=>r.jsx("div",{className:`h-full flex items-center border-b-[3px] transition-all duration-300 ${s===e.to?"border-b-white":"border-b-transparent hover:border-b-white/50"}`,children:(0,r.jsxs)(p.default,{className:"font-barlowCondensed text-[14px] tracking-[2.362px] desktop:text-base desktop:tracking-[2.7px] h-full flex justify-center items-center",href:e.to,onClick:()=>t(e.to),children:[(0,r.jsxs)("span",{className:"mr-3 hidden desktop:inline-block font-barlowCondensed text-base font-bold tracking-[2.7px]",children:["0",a]}),e.name]})},e.id))})]})};var b=s(6462),u=s(2580);let m={src:"/_next/static/media/icon-close.f5ec4485.svg",height:21,width:20,blurWidth:0,blurHeight:0},g={closed:{opacity:0},open:{opacity:1,transition:{duration:2}}},f={closed:{transition:{staggerChildren:.1,staggerDirection:-1}},open:{transition:{staggerChildren:.1,staggerDirection:1}}},j=({sidebarOpen:e,sidebarCycleOpen:t,setPreloader:s})=>r.jsx(b.M,{children:e&&r.jsx(u.E.aside,{className:"z-10 fixed right-0 h-screen backdrop-blur-2xl",initial:{width:0},animate:{width:250,transition:{type:"spring",stiffness:150,damping:15}},exit:{width:0},children:(0,r.jsxs)(u.E.div,{className:"px-6 pt-8",initial:"closed",animate:"open",variants:f,children:[r.jsx("div",{className:"flex flex-row justify-end items-center",children:r.jsx("button",{onClick:()=>t(),children:r.jsx(l.default,{className:"h-[20px] w-[20px]",src:m,alt:"logo"})})}),r.jsx("div",{className:"flex flex-col gap-8 mt-16",children:x.map(({name:e,to:a,id:n},i)=>r.jsx(p.default,{href:a,onClick:()=>{t(),s(a)},children:(0,r.jsxs)(u.E.p,{className:"font-barlowCondensed text-base tracking-[2.7px] flex flex-row gap-2",variants:g,whileHover:{x:15},children:[r.jsx("span",{className:"font-bold",children:"0"+i}),r.jsx("span",{className:"font-normal",children:e})]})},n))})]})})});var w=s(3495);let k=({pathname:e,preloaders:t})=>(o().useEffect(()=>{let e=w.p8.timeline();1===t.length?e.to(".preloader",{y:0,opacity:1,duration:0}):e.fromTo(".preloader",{y:"100%",opacity:1},{y:0,duration:.3,opacity:1}),e.to(".preloader",{y:"-100%",delay:1,opacity:1,duration:.3});let s=w.p8.timeline({repeat:-1});s.to(".loading_bar",{width:150,opacity:1,ease:"expo.inOut",duration:.25}),s.to(".loading_bar",{width:0,opacity:.5,x:150,ease:"expo.inOut",duration:.5})},[]),(0,r.jsxs)("div",{className:"preloader z-20 w-screen h-screen fixed top-0 bg-black flex flex-col justify-center gap-2 items-center opacity-1",children:[r.jsx("div",{className:"font-barlow tracking-widest text-2xl text-center",children:"/"===e?"Loading Space":"/destination"===e?"Loading Destinations":"/crew"===e?"Loading Crew":"/technology"===e?"Loading Technology":""}),r.jsx("div",{className:"w-[150px]  rounded-full",children:r.jsx("div",{className:"loading_bar h-1 w-0 opacity-0 bg-white rounded-full"})})]})),y={"/":{mobile:"bg-home-mobile",tablet:"bg-home-tablet",desktop:"bg-home-desktop"},"/destination":{mobile:"bg-destination-mobile",tablet:"bg-destination-tablet",desktop:"bg-destination-desktop"},"/crew":{mobile:"bg-crew-mobile",tablet:"bg-crew-tablet",desktop:"bg-crew-desktop"},"/technology":{mobile:"bg-technology-mobile",tablet:"bg-technology-tablet",desktop:"bg-technology-desktop"},default:{mobile:"bg-home-mobile",tablet:"bg-home-tablet",desktop:"bg-home-desktop"}},v=e=>y[e]?y[e]:y.default,P=({children:e})=>{let[t,s]=(0,a.n)(!1,!0),[o,l]=(0,i.useState)([]),d=(0,n.usePathname)(),c=v(d),p=`${c.mobile} tablet:${c.tablet} desktop:${c.desktop}`;(0,i.useEffect)(()=>{0===o.length&&l(e=>[...e,d])},[d]);let x=e=>{o.includes(e)||l(t=>[...t,e])};return(0,r.jsxs)(r.Fragment,{children:[0!==o.length&&(0,r.jsxs)(r.Fragment,{children:[r.jsx(h,{sidebarCycleOpen:s,setPreloader:x}),r.jsx(j,{sidebarOpen:t,sidebarCycleOpen:s,setPreloader:x}),r.jsx("div",{className:`${p} bg-cover bg-no-repeat bg-center h-screen w-screen right-20 overflow-y-auto`,children:e},d)]}),o.map(e=>r.jsx(k,{pathname:e,preloaders:o},e))]})}},1812:(e,t,s)=>{"use strict";let{createProxy:r}=s(8570);e.exports=r("C:\\Practice Projects\\Front End Mentor\\space-tourism\\node_modules\\next\\dist\\client\\link.js")},8979:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(9510),a=s(9974),n=s.n(a),i=s(5655),o=s.n(i),l=s(4808),d=s.n(l);s(5023);var c=s(8570);let p=(0,c.createProxy)(String.raw`C:\Practice Projects\Front End Mentor\space-tourism\src\components\wrappers\PageWrapper.tsx`),{__esModule:x,$$typeof:h}=p;p.default;let b=(0,c.createProxy)(String.raw`C:\Practice Projects\Front End Mentor\space-tourism\src\components\wrappers\PageWrapper.tsx#default`);function u({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{children:r.jsx("link",{rel:"icon",href:"/rocket-icon.png",sizes:"any"})}),r.jsx("body",{className:`bg-black  ${n().variable} ${o().variable} ${d().variable} font-barlow body text-white leading-none`,suppressHydrationWarning:!0,children:r.jsx(b,{children:e})})]})}},2523:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(9510);s(1159);let a=()=>r.jsx("div",{children:"NotFound"})},4182:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>i});var r=s(9510),a=s(1812),n=s.n(a);let i={title:"Space Tourism",description:"This endeavor presents an adept resolution to a challenge from Frontend Mentor, showcasing mastery in addressing real-world design hurdles."};function o(){return(0,r.jsxs)("article",{className:"flex flex-col justify-center items-center pt-[112px] tablet:pt-[200px] px-6 desktop:flex-row desktop:justify-around desktop:items-end",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center desktop:mt-[250px] desktop:items-start",children:[r.jsx("p",{className:"font-barlowCondensed text-[16px] tracking-[2.7px] text-center text-[#D0D6F9] tablet:tracking-[3.375px] tablet:text-[20px] desktop:text-[28px] desktop:tracking-[4.725px]",children:"SO, YOU WANT TO TRAVEL TO"}),r.jsx("h1",{className:"font-bellefair leading-[100px] text-white text-center text-[80px] py-4 tablet:text-[150px] tablet:leading-[150px] tablet:py-6 desktop:py-6 desktop:text-left",children:"SPACE"}),r.jsx("p",{className:"font-barlow text-[15px] leading-[25px] text-[#D0D6F9] text-center mb-20 tablet:w-[444px] tablet:[16px] tablet:leading-[28px] tablet:mb-40 desktop:mb-0 desktop:text-[18px] desktop:leading-[32px] desktop:text-left",children:"Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"})]}),r.jsx(n(),{href:"/destination",children:(0,r.jsxs)("div",{className:"h-[150px] w-[150px] rounded-full bg-white flex justify-center items-center tablet:h-[242px] tablet:w-[242px] desktop:h-[274px] desktop:w-[274px] relative group",children:[r.jsx("span",{className:"text-DarkBlue font-bellefair font-normal tracking-[1.25px] text-xl tablet:text-[32px] tablet-tracking-[2px]",children:"EXPLORE"}),r.jsx("div",{className:"absolute bg-white scale-0 h-[450px] w-[450px] opacity-[0.1036] rounded-full group-hover:scale-100 transition-all duration-300"})]})})]})}},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,70],()=>s(1938));module.exports=r})();