import{a as w,b as k,c as M}from"./chunk-G5AXG2QA.js";import"./chunk-WXI33M2S.js";import{a as D}from"./chunk-OAYW4UXN.js";import{$ as S,K as C,N as i,O as _,V as p,Z as u,ba as g,ca as y,cb as E,da as o,ea as r,fa as F,fb as T,ga as P,ha as b,ka as m,la as d,qa as a,ra as s,va as h,w as x,wa as l,xa as f,za as I}from"./chunk-N5YKOAKE.js";import"./chunk-4CLCTAJ7.js";var L=(e,n)=>n.id,j=()=>({items:1}),R=()=>({items:2}),$=()=>({items:3}),z=(e,n,t)=>({0:e,576:n,992:t}),H=e=>({items:3,margin:10,loop:!0,dots:!1,nav:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:e}),O=e=>["/productos",e];function U(e,n){if(e&1&&(o(0,"h2",2),a(1),r()),e&2){let t=m();i(),s(t.title)}}function V(e,n){if(e&1&&(o(0,"div",5)(1,"div",6),F(2,"img",7),o(3,"div",8)(4,"h4",9),a(5),r(),o(6,"p",10),a(7),r(),o(8,"a",11),a(9,"Ver Producto"),r()()()()),e&2){let t=m().$implicit;i(2),d("src",t.image,C),d("alt",t.name),i(3),s(t.name),i(2),s(t.descriptions),i(),u("routerLink",f(5,O,t.id))}}function q(e,n){e&1&&(P(0),p(1,V,10,7,"ng-template",4),b())}var Q=(()=>{class e{productosService;title;productos=[];constructor(t){this.productosService=t}ngOnInit(){this.productosService.getProducts().subscribe(t=>{this.productos=t})}static \u0275fac=function(c){return new(c||e)(_(D))};static \u0275cmp=x({type:e,selectors:[["app-carousel-productos"]],inputs:{title:"title"},standalone:!0,features:[h],decls:6,vars:11,consts:[[1,"container-fluid","my-1"],[1,"container","pt-1","pb-5"],[1,"poppins-bold-brown","text-center"],[3,"options"],["carouselSlide",""],[1,"item"],[1,"card","text-white"],[1,"card-img","w-100",2,"filter","brightness(0.5)",3,"src","alt"],[1,"card-img-overlay","d-flex","flex-column","justify-content-center","align-items-center","text-center"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary","mt-3",3,"routerLink"]],template:function(c,v){c&1&&(o(0,"section",0)(1,"div",1),p(2,U,2,1,"h2",2),o(3,"owl-carousel-o",3),g(4,q,2,0,"ng-container",null,L),r()()()),c&2&&(i(2),S(v.title?2:-1),i(),u("options",f(9,H,I(5,z,l(2,j),l(3,R),l(4,$)))),i(),y(v.productos))},dependencies:[M,k,w,T,E]})}return e})();export{Q as CarouselProductosComponent};
