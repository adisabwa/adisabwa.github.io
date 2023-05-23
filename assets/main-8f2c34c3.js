import{r as P,o as a,c as m,a as d,w as c,E as O,b as p,F as x,d as E,e as f,t as y,n as I,f as B,J as N,g as R,h as U,i as T,j as F,k as V,l as q,m as z,p as j,I as D,q as W}from"./vendor-2849f329.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const S=(t,e)=>{const n=t.__vccOpts||t;for(const[i,o]of e)n[i]=o;return n},Y={},H={id:"app"};function J(t,e){const n=P("router-view");return a(),m("div",H,[d(n)])}const Q=S(Y,[["render",J]]),G="modulepreload",K=function(t){return"/portofolio/production/"+t},M={},$=function(e,n,i){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=K(s),s in M)return;M[s]=!0;const l=s.endsWith(".css"),_=l?'[rel="stylesheet"]':"";if(!!i)for(let h=o.length-1;h>=0;h--){const g=o[h];if(g.href===s&&(!l||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${_}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":G,l||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),l)return new Promise((h,g)=>{u.addEventListener("load",h),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function A(t){return!t||t.length===0||t===void 0||t===[]||t==="0000-00-00"}function X(t){var e=t.parentNode.getBoundingClientRect(),n=t.getBoundingClientRect(),i={};return i.top=n.top-e.top+t.parentNode.scrollTop,i.right=n.right-e.right,i.bottom=n.bottom-e.bottom,i.left=n.left-e.left,i}function Z(t,e,n){var i=window.pageYOffset,o=t-i,s=performance.now(),l,_,v;function u(){l=performance.now(),_=(l-s)/1e3,v=_/e,window.scrollTo(0,i+o*ee(v)-60),v<1?window.requestAnimationFrame(u):n&&n()}u()}function ee(t){return t<.5?2*t*t:-1+(4-2*t)*t}function _e(t,e=1){if(t){var n=X(t);Z(n.top,e)}}function te(t){var e=window.scrollY;let n=!0;return e<t?n=!0:n=!1,{up:n,currentScrollPosition:e}}const ne={id:"main-layout"},oe={class:"navbar-wrap"},se={class:"flex items-center justify-between h-16"},ie=["src"];var w=N;const re={name:"dashboard-layout",data:function(){return{activeMenu:"",showMenu:!1,showMenu2:!0,menus:[{index:"main#about",icon:"material-symbols:info",title:"About",type:"menu",isActive:!1},{index:"main#experience",icon:"material-symbols:featured-play-list-rounded",title:"Experience",type:"menu",isActive:!1},{index:"main#work",icon:"zondicons:computer-laptop",title:"Work",type:"menu",isActive:!1},{index:"main#contact",icon:"material-symbols:contact-phone-rounded",title:"Contact",type:"menu",isActive:!1}],scrollPosition:0}},watch:{},computed:{},methods:{setActiveMenu:function(){var t=this.$route.name,e=this.$route.hash;A(e)||(t=t+e),this.activeMenu=t},routePush(t,e){console.log(t);let n=t.split("#"),i=A(n[1])?"":"#"+n[1];this.$router.push({name:n[0],hash:i}),this.showMenu=!1},changeMenuActive(t){w(".el-menu-item").removeClass("is-active");let e=w("li.el-menu-item").toArray();this.menus.forEach((n,i)=>{n.index==t&&w(e[i]).addClass("is-active")})},hiddenMenu(){let{up:t,currentScrollPosition:e}=te(this.scrollPosition);this.scrollPosition=e,t?w("header").removeClass("-translate-y-16"):w("header").addClass("-translate-y-16")}},created:function(){this.setActiveMenu(),this.scrollPosition=window.scrollY,window.addEventListener("scroll",this.hiddenMenu)}},le=Object.assign(re,{setup(t){return(e,n)=>{const i=P("icons"),o=R,s=U,l=T,_=F,v=V,u=O,h=P("router-view"),g=q;return a(),m("div",ne,[d(u,null,{default:c(()=>[d(v,{class:"main-navbar bg-white/95 fixed z-50 p-0 h-16 w-full px-9 xl:px-40 lg:px-32 md:px-24 font-mono origin-top transition duration-300"},{default:c(()=>[p("div",oe,[p("div",se,[p("img",{src:e.$baseUrl+"assets/images/logo.png",alt:"Logo",height:"20",class:"m-0 mr-3 h-10 pointer",onClick:n[0]||(n[0]=r=>{e.routePush("main#home"),e.changeMenuActive("main#home")})},null,8,ie),d(l,{"default-active":e.activeMenu,onSelect:e.routePush,ellipsis:!1,class:"el-menu-demo text-emerald-400 h-16 hidden md:block",mode:"horizontal","active-text-color":"#34d399",style:{border:"0px"}},{default:c(()=>[(a(!0),m(x,null,E(e.menus,r=>(a(),m(x,null,[r.type=="sub-menu"?(a(),f(s,{key:0,index:r.index,class:"text-center"},{title:c(()=>[d(i,{class:"text-emerald-400",icon:r.icon},null,8,["icon"]),p("span",null,y(r.title),1)]),default:c(()=>[(a(!0),m(x,null,E(r.children,b=>(a(),f(o,{index:b.index,class:"pl-4 pr-3 py-1 h-auto"},{default:c(()=>[p("span",null,y(b.title),1)]),_:2},1032,["index"]))),256))]),_:2},1032,["index"])):(a(),f(o,{key:1,index:r.index,class:I("pl-4 pr-6 text-center "+(r.isActive?"is-active":""))},{default:c(()=>[d(i,{class:"text-emerald-400",icon:r.icon},null,8,["icon"]),p("span",null,y(r.title),1)]),_:2},1032,["index","class"]))],64))),256))]),_:1},8,["default-active","onSelect"]),d(_,{class:"h-12 w-fit px-2 bg-transparent text-emerald-400 md:hidden",onClick:n[1]||(n[1]=r=>e.showMenu=!e.showMenu)},{default:c(()=>[d(i,{icon:"ep:fold",class:"text-2xl"})]),_:1})])]),e.showMenu?(a(),f(l,{key:0,"default-active":e.activeMenu,class:"el-menu-demo text-emerald-400",onSelect:e.routePush,"active-text-color":"34d399","background-color":"white",style:{border:"0px"}},{default:c(()=>[(a(!0),m(x,null,E(e.menus,r=>(a(),m(x,null,[r.type=="sub-menu"?(a(),f(s,{key:0,index:r.index,class:"ml-3 text-left"},{title:c(()=>[d(i,{class:"text-emerald-400",icon:r.icon},null,8,["icon"]),p("span",null,y(r.title),1)]),default:c(()=>[(a(!0),m(x,null,E(r.children,b=>(a(),f(o,{index:b.index,class:"px-4 pb-1 h-auto"},{default:c(()=>[p("span",null,y(b.title),1)]),_:2},1032,["index"]))),256))]),_:2},1032,["index"])):(a(),f(o,{key:1,index:r.index,class:"ml-3 text-left"},{default:c(()=>[d(i,{class:"text-emerald-400",icon:r.icon},null,8,["icon"]),p("span",null,y(r.title),1)]),_:2},1032,["index"]))],64))),256))]),_:1},8,["default-active","onSelect"])):B("",!0)]),_:1})]),_:1}),d(u,{class:"w-full main-content-wrap ml-0 bg-landmark bg-cover bg-center bg-fixed"},{default:c(()=>[d(g,{class:"bg-white/95 px-9 xl:px-40 lg:px-32 md:px-24 pt-16 min-h-[calc(100vh-310px)]"},{default:c(()=>[d(h,{onScrolling:e.changeMenuActive},null,8,["onScrolling"])]),_:1})]),_:1})])}}}),ae="https://sms.ft.ugm.ac.id",C="/portofolio/production/",ce=ae+C,L={baseUrl:C,baseUrlFull:ce},ue=L.baseUrl,de=new z({history:j(),routes:[{path:ue,component:le,children:[{path:"/",alias:"",name:"main",component:()=>$(()=>import("./Index-4a3b6233.js"),["assets/Index-4a3b6233.js","assets/vendor-2849f329.js","assets/vendor-742bb332.css","assets/works-00ae21f7.js","assets/Index-22de4358.css"])},{path:"work/:type",name:"work",component:()=>$(()=>import("./Index-a5f89a91.js"),["assets/Index-a5f89a91.js","assets/works-00ae21f7.js","assets/vendor-2849f329.js","assets/vendor-742bb332.css","assets/Index-e6247af5.css"]),props:!0}]}],scrollBehavior:function(t,e,n){return n||{top:0}}});const pe={name:"get-icon",components:{Icon:D},props:{iconName:{type:String,default:""}}};function me(t,e,n,i,o,s){const l=P("Icon",!0);return a(),f(l,{icon:n.iconName},null,8,["icon"])}const fe=S(pe,[["render",me],["__scopeId","data-v-e8c7b802"]]);let k=W(Q);k.use(de);k.component("icons",fe);k.config.globalProperties.$baseUrl=L.baseUrl;k.mount("#app");export{S as _,C as b,_e as s};
