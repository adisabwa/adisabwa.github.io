import{s as v}from"./main-f2018276.js";import{w as l}from"./works-549a7100.js";import{r as g,o as i,c as n,b as t,a as d,t as p,F as m,d as c,y as x}from"./vendor-2849f329.js";const f={id:"work-detail",class:"mt-6 md:mt-16"},w={class:"flex items-center align-middle rounded-full w-10 h-10 transition ease-in-out duration-200 bg-white group-hover:bg-white/[0.2]"},_=t("span",{class:"ml-2 text-emerald-600 transition ease-in-out duration-200 origin-left md:scale-x-0 group-hover:scale-x-100"}," Back ",-1),b={class:"font-mono text-sm"},y={class:"mt-1 text-5xl text-emerald-700 font-semibold leading-[1.3]"},k={class:"origin-left scale-x-[1.1]"},D={class:"mt-6"},$=["innerHTML"],j=t("span",{class:"font-bold"},"Technologies",-1),T={class:"mt-2 mb-4 font-mono text-xs text-white flex flex-wrap gap-x-1 gap-y-2"},B={class:"bg-emerald-600 rounded-xl px-3 py-1"},M=["href"],N={class:"mt-6"},P=["src","alt"],C={class:"flex transition ease-in-out duration-300 border border-orange-100 border-[10px] fixed bottom-2 right-2 w-[350px] -translate-y-[40px] opacity-100 scale-y-0 origin-bottom group-hover/image:opacity-100 group-hover/image:scale-y-100 rounded-xl bg-white px-1 py-1 pb-4"},E=["src"],I={class:"ml-4 font-medium text-lg w-28 py-1"},L={class:"flex rounded-xl bg-white fixed bottom-2 right-2 w-[350px]"},O=t("div",{class:"transition ease-in-out duration-200"}," Previous Project ",-1),V={class:"flex items-center rounded-full w-10 h-10 transition ease-in-out duration-200 group-hover/prev:bg-emerald-200"},F={class:"flex items-center align-middle rounded-full w-10 h-10 transition ease-in-out duration-200 group-hover/next:bg-emerald-200"},H=t("div",null,"Next Project",-1),S={name:"work-list",data:function(){return{type:"",data:{},next:{},prev:{},showData:{},hover:""}},methods:{resetData(){let a=this;setTimeout(function(){a.showData={}},500)},getData(a=!1){a?(this.type=a,this.$router.replace({params:{type:a}})):this.type=this.$route.params.type,this.data=l[this.type];let e=Object.keys(l),s=e.findIndex(u=>u==this.type),r=e.length-1,o=s!=0?e[s-1]:e[r],h=s!=r?e[s+1]:e[0];this.prev=l[o],this.prev.type=o,this.next=l[h],this.next.type=h,this.hover=="next"&&(this.showData=this.next),this.hover=="prev"&&(this.showData=this.prev),v(document.getElementById("work-detail"),.6)}},watch:{showData(a){}},created(){this.getData()}},G=Object.assign(S,{setup(a){return(e,s)=>{const r=g("icons");return i(),n("div",f,[t("div",{class:"group flex items-center md:fixed md:left-[30px] mb-4 pointer",onClick:s[0]||(s[0]=o=>e.$router.push({name:"main",hash:"#work"}))},[t("span",w,[d(r,{icon:"icon-park-solid:back",class:"m-0 m-auto text-emerald-600"})]),_]),t("div",b,p(e.data.subtitle),1),t("div",y,[t("span",k,p(e.data.title),1)]),t("div",D,[t("div",{innerHTML:e.data.content},null,8,$),t("div",null,[j,t("div",T,[(i(!0),n(m,null,c(e.data.tech,o=>(i(),n("span",B,p(o),1))),256))]),t("a",{href:e.data.link,target:"_blank",class:"text-emerald-500"},[x(" Open Project "),d(r,{class:"ml-2",icon:"solar:arrow-right-outline"})],8,M)])]),t("div",N,[(i(!0),n(m,null,c(e.data.images,o=>(i(),n("img",{src:o.link,alt:o.alt,class:"border border-green-100 border-[5px] mb-7 w-full"},null,8,P))),256))]),t("div",{class:"group/image pointer text-emerald-800",onClick:s[3]||(s[3]=o=>e.getData(e.showData.type)),onMouseleave:s[4]||(s[4]=(...o)=>e.resetData&&e.resetData(...o))},[t("div",C,[t("img",{src:e.showData.image,class:"h-24 aspect-video object-cover px-2 pt-1"},null,8,E),t("div",I,p(e.showData.title),1)]),t("div",L,[t("div",{class:"group/prev w-fit flex gap-x-4 items-center pointer py-2 pl-4 pr-1 hover:bg-emerald-100 hover:rounded-l-xl",onMouseover:s[1]||(s[1]=o=>{e.showData=e.next,e.hover="next"})},[O,t("span",V,[d(r,{icon:"ph:arrow-left-bold",class:"m-0 m-auto text-emerald-600"})])],32),t("div",{class:"group/next w-fit flex gap-x-4 items-center pointer py-2 pr-4 pl-1 hover:bg-emerald-100 hover:rounded-l-xl",onMouseover:s[2]||(s[2]=o=>{e.showData=e.prev,e.hover="prev"})},[t("span",F,[d(r,{icon:"ph:arrow-right-bold",class:"m-0 m-auto text-emerald-600"})]),H],32)])],32)])}}});export{G as default};