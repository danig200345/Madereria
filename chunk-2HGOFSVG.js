import{a as T}from"./chunk-OAYW4UXN.js";import{$ as P,$a as D,B as d,C as m,J as x,K as C,N as u,Na as E,O as _,Ta as y,V as f,W as I,X as w,Z as g,aa as h,ba as S,ca as b,da as t,ea as i,fa as n,fb as V,ia as k,ja as c,ka as l,qa as s,ra as M,va as j,w as v}from"./chunk-N5YKOAKE.js";import"./chunk-4CLCTAJ7.js";var O=()=>[E,import("./chunk-PTMLFIIB.js").then(r=>r.CarouselProductosComponent)];function F(r,p){if(r&1&&n(0,"span",37),r&2){let e=p.$implicit;g("ngClass",e)}}function H(r,p){if(r&1){let e=k();t(0,"div",2)(1,"div",5)(2,"div",6),n(3,"img",7),i(),t(4,"div",2)(5,"div",8)(6,"a",9),n(7,"i",10),t(8,"span",11),s(9,"Previous"),i()()(),t(10,"div",12)(11,"div",13)(12,"div",14)(13,"div",2)(14,"div",15)(15,"a",16),c("click",function(){d(e);let o=l(2);return m(o.updateMainImage("imgs/image8.jpg"))}),n(16,"img",17),i()(),t(17,"div",15)(18,"a",16),c("click",function(){d(e);let o=l(2);return m(o.updateMainImage("imgs/image8.jpg"))}),n(19,"img",18),i()(),t(20,"div",15)(21,"a",16),c("click",function(){d(e);let o=l(2);return m(o.updateMainImage("imgs/image8.jpg"))}),n(22,"img",19),i()()()(),t(23,"div",20)(24,"div",2)(25,"div",15)(26,"a",16),c("click",function(){d(e);let o=l(2);return m(o.updateMainImage("imgs/image8.jpg"))}),n(27,"img",21),i()(),t(28,"div",15)(29,"a",16),c("click",function(){d(e);let o=l(2);return m(o.updateMainImage("imgs/image8.jpg"))}),n(30,"img",22),i()(),t(31,"div",15)(32,"a",16),c("click",function(){d(e);let o=l(2);return m(o.updateMainImage("imgs/image8.jpg"))}),n(33,"img",23),i()()()(),t(34,"div",20)(35,"div",2)(36,"div",15)(37,"a",16),c("click",function(){d(e);let o=l(2);return m(o.updateMainImage("imgs/image8.jpg"))}),n(38,"img",24),i()(),t(39,"div",15)(40,"a",16),c("click",function(){d(e);let o=l(2);return m(o.updateMainImage("imgs/image8.jpg"))}),n(41,"img",25),i()(),t(42,"div",15)(43,"a",16),c("click",function(){d(e);let o=l(2);return m(o.updateMainImage("imgs/image8.jpg"))}),n(44,"img",26),i()()()()()(),t(45,"div",8)(46,"a",27),n(47,"i",28),t(48,"span",11),s(49,"Next"),i()()()()(),t(50,"div",29)(51,"div",30)(52,"div",31)(53,"h1",32),s(54),i(),n(55,"p",33),t(56,"h6"),s(57,"Caracteristicas Sobresalientes:"),i(),n(58,"p",34),t(59,"h6"),s(60,"Colores Disponibles:"),i(),t(61,"ul",35)(62,"li",36),S(63,F,1,1,"span",37,h),i()(),t(65,"button",38),n(66,"i",39),s(67," WhastApp"),i()()()()()}if(r&2){let e=l(2);u(3),g("src",e.mainImage,C),u(51),M(e.product.name),u(4),g("innerHTML",e.product.description,x),u(5),b(e.product.colors)}}function N(r,p){r&1&&(t(0,"div",3)(1,"div",40)(2,"div",41)(3,"div",42)(4,"p",43),s(5,"Cargando..."),i(),t(6,"div",44),n(7,"span",11),i()()()()())}function z(r,p){if(r&1&&(t(0,"section",0)(1,"div",1),f(2,H,68,3,"div",2)(3,N,8,0,"div",3),i()(),n(4,"app-carousel-productos",4)),r&2){let e=l();u(2),P(e.product?2:3),u(2),g("title","Mas tipos de Maderas")}}function A(r,p){r&1&&(t(0,"div",45)(1,"div",46)(2,"div",40)(3,"div",41)(4,"div",42)(5,"p",43),s(6,"Cargando..."),i(),t(7,"div",44),n(8,"span",11),i()()()()()())}var $=(()=>{class r{route;productosService;productId=null;product;mainImage="";constructor(e,a){this.route=e,this.productosService=a}ngOnInit(){this.productId=Number(this.route.snapshot.paramMap.get("id")),this.loadProduct()}loadProduct(){this.productId!==null&&this.productosService.getProductById(this.productId).subscribe(e=>{this.product=e,e&&(this.mainImage=e.image)})}updateMainImage(e){this.mainImage=e}static \u0275fac=function(a){return new(a||r)(_(D),_(T))};static \u0275cmp=v({type:r,selectors:[["app-producto-individual"]],standalone:!0,features:[j],decls:4,vars:0,consts:[[1,"container-fluid","my-5"],[1,"container","pb-5"],[1,"row"],[1,"container","mt-5"],[3,"title"],[1,"col-lg-5","mt-5"],[1,"card","mb-3"],["alt","Card image cap","id","product-detail",1,"card-img","img-fluid","w-100",3,"src"],[1,"col-1","d-flex","align-items-center"],["href","#multi-item-example","role","button","data-bs-slide","prev"],[1,"text-dark","fas","fa-chevron-left"],[1,"visually-hidden"],["id","multi-item-example","data-bs-ride","carousel",1,"col-10","carousel","slide","carousel-multi-item"],["role","listbox",1,"carousel-inner"],[1,"carousel-item","active"],[1,"col-4"],[2,"cursor","pointer",3,"click"],["src","imgs/image8.jpg","alt","Product Image 1",1,"card-img","img-fluid","w-100"],["src","imgs/image8.jpg","alt","Product Image 2",1,"card-img","img-fluid","w-100"],["src","imgs/image8.jpg","alt","Product Image 3",1,"card-img","img-fluid","w-100"],[1,"carousel-item"],["src","imgs/image8.jpg","alt","Product Image 4",1,"card-img","img-fluid","w-100"],["src","imgs/image8.jpg","alt","Product Image 5",1,"card-img","img-fluid","w-100"],["src","imgs/image8.jpg","alt","Product Image 6",1,"card-img","img-fluid","w-100"],["src","imgs/image8.jpg","alt","Product Image 7",1,"card-img","img-fluid","w-100"],["src","imgs/image8.jpg","alt","Product Image 8",1,"card-img","img-fluid","w-100"],["src","imgs/image8.jpg","alt","Product Image 9",1,"card-img","img-fluid","w-100"],["href","#multi-item-example","role","button","data-bs-slide","next"],[1,"text-dark","fas","fa-chevron-right"],[1,"col-lg-7","mt-5"],[1,"card"],[1,"card-body"],[1,"h2","poppins-bold-brown"],[1,"h3","py-2"],[1,"text-f",3,"innerHTML"],[1,"list-inline"],[1,"list-inline-item"],[1,"product-color-dot","float-start","rounded-circle","ms-1",3,"ngClass"],[1,"btn","btn-green","rounded"],[1,"fa-brands","fa-whatsapp"],[1,"row","justify-content-center"],[1,"col-lg-8"],[1,"bg-light","p-5","shadow-sm","rounded"],[1,"text-center","text-muted","font-weight-bold"],["role","status",1,"spinner-border","text-primary","d-block","mx-auto"],[1,"container-fluid","mt-5"],[1,"container"]],template:function(a,o){a&1&&(f(0,z,5,2)(1,A,9,0),I(2,0,O,null,1),w())},dependencies:[y,V],styles:[".product-color-dot[_ngcontent-%COMP%]{width:15px;height:15px;display:inline-block}.carousel-control-prevs[_ngcontent-%COMP%], .carousel-control-nexts[_ngcontent-%COMP%]{position:absolute;top:50%;width:5%;height:50px;background-color:#ffffff80;display:flex;align-items:center;justify-content:center;cursor:pointer;transform:translateY(-50%)}.carousel-control-prevs[_ngcontent-%COMP%]{left:0}.carousel-control-nexts[_ngcontent-%COMP%]{right:0}"]})}return r})();export{$ as ProductoIndividualComponent};
