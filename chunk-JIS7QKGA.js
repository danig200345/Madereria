import{a as I,b as w,c as T}from"./chunk-G5AXG2QA.js";import"./chunk-WXI33M2S.js";import{a as k}from"./chunk-OAYW4UXN.js";import{K as f,N as o,O as v,V as x,Z as p,ba as C,ca as _,cb as h,da as i,ea as n,fa as g,fb as E,ga as y,ha as S,ka as F,la as l,qa as a,ra as u,va as P,w as d,wa as s,xa as m,za as b}from"./chunk-N5YKOAKE.js";import"./chunk-4CLCTAJ7.js";var D=(e,r)=>r.id,L=()=>({items:1}),j=()=>({items:2}),R=()=>({items:3}),$=(e,r,t)=>({0:e,576:r,992:t}),z=e=>({items:3,margin:10,loop:!0,dots:!1,nav:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:e}),H=e=>["/productos",e];function N(e,r){if(e&1&&(i(0,"div",5)(1,"div",6),g(2,"img",7),i(3,"div",8)(4,"h4",9),a(5),n(),i(6,"p",10),a(7),n(),i(8,"a",11),a(9,"Ver Producto"),n()()()()),e&2){let t=F().$implicit;o(2),l("src",t.image,f),l("alt",t.name),o(3),u(t.name),o(2),u(t.description),o(),p("routerLink",m(5,H,t.id))}}function O(e,r){e&1&&(y(0),x(1,N,10,7,"ng-template",4),S())}var J=(()=>{class e{productosService;productos=[];constructor(t){this.productosService=t}ngOnInit(){this.productosService.getProducts().subscribe(t=>{this.productos=t})}static \u0275fac=function(c){return new(c||e)(v(k))};static \u0275cmp=d({type:e,selectors:[["app-carousel-productos"]],standalone:!0,features:[P],decls:7,vars:10,consts:[[1,"container-fluid","my-5","p-5"],[1,"container","pt-5","pb-5"],[1,"poppins-bold-brown","text-center"],[1,"row",3,"options"],["carouselSlide",""],[1,"col","service-item","position-relative"],[1,"card","text-white"],[1,"card-img",2,"filter","brightness(0.6)",3,"src","alt"],[1,"card-img-overlay","d-flex","flex-column","justify-content-center","align-items-center","text-center"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary",3,"routerLink"]],template:function(c,M){c&1&&(i(0,"section",0)(1,"div",1)(2,"h2",2),a(3,"Nuestros Productos"),n(),i(4,"owl-carousel-o",3),C(5,O,2,0,"ng-container",null,D),n()()()),c&2&&(o(4),p("options",m(8,z,b(4,$,s(1,L),s(2,j),s(3,R)))),o(),_(M.productos))},dependencies:[T,w,I,E,h]})}return e})();export{J as CarouselProductosComponent};
