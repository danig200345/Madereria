import{a as D,b as L,c as j}from"./chunk-G5AXG2QA.js";import"./chunk-WXI33M2S.js";import{a as R}from"./chunk-OAYW4UXN.js";import{$ as S,B as C,C as x,K as g,N as o,O as y,V as m,Z as d,ba as T,ca as w,cb as M,da as i,ea as r,fa as h,fb as V,ga as F,ha as P,ia as b,ja as I,ka as l,la as _,qa as a,ra as p,va as k,w as v,wa as u,xa as f,za as E}from"./chunk-N5YKOAKE.js";import"./chunk-4CLCTAJ7.js";var $=(e,n)=>n.id,z=()=>({items:1}),H=()=>({items:2}),O=()=>({items:3}),U=(e,n,t)=>({0:e,576:n,992:t}),q=e=>({items:3,margin:10,loop:!0,dots:!1,nav:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:e}),A=e=>["/productos",e];function B(e,n){if(e&1&&(i(0,"h2",2),a(1),r()),e&2){let t=l();o(),p(t.title)}}function G(e,n){if(e&1){let t=b();i(0,"div",5)(1,"div",6),h(2,"img",7),i(3,"div",8)(4,"h4",9),a(5),r(),i(6,"p",10),a(7),r(),i(8,"a",11),I("click",function(){C(t);let s=l(2);return x(s.scrollToTop())}),a(9,"Ver Producto"),r()()()()}if(e&2){let t=l().$implicit;o(2),_("src",t.image,g),_("alt",t.name),o(3),p(t.name),o(2),p(t.descriptions),o(),d("routerLink",f(5,A,t.id))}}function J(e,n){e&1&&(F(0),m(1,G,10,7,"ng-template",4),P())}var Z=(()=>{class e{productosService;title;productos=[];constructor(t){this.productosService=t}ngOnInit(){this.productosService.getProducts().subscribe(t=>{this.productos=t})}scrollToTop(){try{setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},400)}catch{setTimeout(()=>{window.scrollTo(0,0)},400)}}static \u0275fac=function(c){return new(c||e)(y(R))};static \u0275cmp=v({type:e,selectors:[["app-carousel-productos"]],inputs:{title:"title"},standalone:!0,features:[k],decls:6,vars:11,consts:[[1,"container-fluid","my-1"],[1,"container","pt-1","pb-5"],[1,"poppins-bold-brown","text-center"],[3,"options"],["carouselSlide",""],[1,"item"],[1,"card","text-white"],[1,"card-img","w-100",2,"filter","brightness(0.5)",3,"src","alt"],[1,"card-img-overlay","d-flex","flex-column","justify-content-center","align-items-center","text-center"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary","mt-3",3,"click","routerLink"]],template:function(c,s){c&1&&(i(0,"section",0)(1,"div",1),m(2,B,2,1,"h2",2),i(3,"owl-carousel-o",3),T(4,J,2,0,"ng-container",null,$),r()()()),c&2&&(o(2),S(s.title?2:-1),o(),d("options",f(9,q,E(5,U,u(2,z),u(3,H),u(4,O)))),o(),w(s.productos))},dependencies:[j,L,D,V,M]})}return e})();export{Z as CarouselProductosComponent};