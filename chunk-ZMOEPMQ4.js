import{a as V,b as D,c as L}from"./chunk-BZA3SFJM.js";import"./chunk-WXI33M2S.js";import{a as R}from"./chunk-OYXM2YTZ.js";import{C as x,D as C,L as g,O as o,P as y,W as m,_ as d,aa as S,ba as T,ca as h,da as i,ea as n,eb as j,fa as w,ga as b,ha as F,ia as P,ib as M,ja as I,ka as l,la as _,qa as a,ra as p,va as k,wa as u,x as v,xa as f,za as E}from"./chunk-XUN4JEZ3.js";import"./chunk-4CLCTAJ7.js";var $=(e,r)=>r.id,z=()=>({items:1}),H=()=>({items:2}),O=()=>({items:3}),U=(e,r,t)=>({0:e,576:r,992:t}),q=e=>({items:3,margin:10,loop:!0,dots:!1,nav:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:e}),A=e=>["/productos",e];function B(e,r){if(e&1&&(i(0,"h2",2),a(1),n()),e&2){let t=l();o(),p(t.title)}}function G(e,r){if(e&1){let t=P();i(0,"div",5)(1,"div",6)(2,"div",7),w(3,"img",8),n(),i(4,"div",9)(5,"h4",10),a(6),n(),i(7,"p",11),a(8),n(),i(9,"a",12),I("click",function(){x(t);let s=l(2);return C(s.scrollToTop())}),a(10,"Ver Producto"),n()()()()}if(e&2){let t=l().$implicit;o(3),_("src",t.image,g),_("alt",t.name),o(3),p(t.name),o(2),p(t.descriptions),o(),d("routerLink",f(5,A,t.nameRoutes))}}function J(e,r){e&1&&(b(0),m(1,G,11,7,"ng-template",4),F())}var Z=(()=>{class e{productosService;title;productos=[];constructor(t){this.productosService=t}ngOnInit(){this.productosService.getProducts().subscribe(t=>{this.productos=t})}scrollToTop(){try{setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},400)}catch{setTimeout(()=>{window.scrollTo(0,0)},400)}}static \u0275fac=function(c){return new(c||e)(y(R))};static \u0275cmp=v({type:e,selectors:[["app-carousel-productos"]],inputs:{title:"title"},standalone:!0,features:[k],decls:6,vars:11,consts:[[1,"container-fluid","my-1"],[1,"container","pt-1","pb-5"],[1,"poppins-bold-brown","text-center"],[3,"options"],["carouselSlide",""],[1,"item"],[1,"card","text-white"],[1,"rounded-0"],[1,"card-img","w-100",2,"filter","brightness(0.5)","object-position","center","object-fit","cover","height","640px",3,"src","alt"],[1,"card-img-overlay","d-flex","flex-column","justify-content-center","align-items-center","text-center"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary","mt-3",3,"click","routerLink"]],template:function(c,s){c&1&&(i(0,"section",0)(1,"div",1),m(2,B,2,1,"h2",2),i(3,"owl-carousel-o",3),T(4,J,2,0,"ng-container",null,$),n()()()),c&2&&(o(2),S(s.title?2:-1),o(),d("options",f(9,q,E(5,U,u(2,z),u(3,H),u(4,O)))),o(),h(s.productos))},dependencies:[L,D,V,M,j]})}return e})();export{Z as CarouselProductosComponent};