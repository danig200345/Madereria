import{a as D}from"./chunk-OAYW4UXN.js";import{$ as x,$a as P,K as f,N as n,Na as S,O as p,Ta as b,V as m,W as _,X as C,Z as c,aa as h,ba as g,ca as I,da as i,ea as o,fa as d,fb as E,ka as s,qa as r,ra as u,va as y,w as v}from"./chunk-N5YKOAKE.js";import"./chunk-4CLCTAJ7.js";var M=()=>[S,import("./chunk-PTMLFIIB.js").then(e=>e.CarouselProductosComponent)];function w(e,a){if(e&1&&d(0,"span",15),e&2){let t=a.$implicit;c("ngClass",t)}}function T(e,a){if(e&1&&(i(0,"div",2)(1,"div",5)(2,"div",6),d(3,"img",7),o()(),i(4,"div",8)(5,"div",9)(6,"div",10)(7,"h1",11),r(8),o(),d(9,"p",12),i(10,"h6"),r(11,"Caracteristicas Sobresalientes:"),o(),i(12,"p"),r(13),o(),i(14,"h6"),r(15,"Colores Disponibles:"),o(),i(16,"ul",13)(17,"li",14),g(18,w,1,1,"span",15,h),o()()()()()()),e&2){let t=s(2);n(3),c("src",t.product.image,f),n(5),u(t.product.name),n(5),u(t.product.description),n(5),I(t.product.colors)}}function F(e,a){e&1&&(i(0,"div",3)(1,"div",16)(2,"div",17)(3,"div",18)(4,"p",19),r(5,"Cargando..."),o(),i(6,"div",20),d(7,"span",21),o()()()()())}function j(e,a){if(e&1&&(i(0,"section",0)(1,"div",1),m(2,T,20,3,"div",2)(3,F,8,0,"div",3),o()(),d(4,"app-carousel-productos",4)),e&2){let t=s();n(2),x(t.product?2:3),n(2),c("title","Mas tipos de Maderas")}}function k(e,a){e&1&&(i(0,"div",22)(1,"div",23)(2,"div",16)(3,"div",17)(4,"div",18)(5,"p",19),r(6,"Cargando..."),o(),i(7,"div",20),d(8,"span",21),o()()()()()())}var $=(()=>{class e{route;productosService;productId=null;product;constructor(t,l){this.route=t,this.productosService=l}ngOnInit(){this.productId=Number(this.route.snapshot.paramMap.get("id")),this.loadProduct()}loadProduct(){this.productId!==null&&this.productosService.getProductById(this.productId).subscribe(t=>{this.product=t})}static \u0275fac=function(l){return new(l||e)(p(P),p(D))};static \u0275cmp=v({type:e,selectors:[["app-producto-individual"]],standalone:!0,features:[y],decls:4,vars:0,consts:[[1,"container-fluid","my-5"],[1,"container","pb-5"],[1,"row"],[1,"container","mt-5"],[3,"title"],[1,"col-lg-5","mt-5"],[1,"card","mb-3"],["alt","Card image cap","id","product-detail",1,"card-img","img-fluid",3,"src"],[1,"col-lg-7","mt-5"],[1,"card"],[1,"card-body"],[1,"h2","poppins-bold-brown"],[1,"h3","py-2"],[1,"list-inline"],[1,"list-inline-item"],[1,"product-color-dot","float-start","rounded-circle","ms-1",3,"ngClass"],[1,"row","justify-content-center"],[1,"col-lg-8"],[1,"bg-light","p-5","shadow-sm","rounded"],[1,"text-center","text-muted","font-weight-bold"],["role","status",1,"spinner-border","text-primary","d-block","mx-auto"],[1,"visually-hidden"],[1,"container-fluid","mt-5"],[1,"container"]],template:function(l,O){l&1&&(m(0,j,5,2)(1,k,9,0),_(2,0,M,null,1),C())},dependencies:[b,E],styles:[".product-color-dot[_ngcontent-%COMP%]{width:15px;height:15px;display:inline-block}"]})}return e})();export{$ as ProductoIndividualComponent};
