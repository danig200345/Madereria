import{a as pe}from"./chunk-4XGU6P6O.js";import{$ as K,A as q,Aa as T,B as f,C as _,Ea as ie,G as k,J as W,Ja as ae,Ka as N,La as re,M as o,N as w,Oa as oe,Pa as R,T as x,U as Y,V as X,W as J,X as d,Y as S,Za as se,aa as Q,ab as le,ba as r,ca as l,da as E,ea as Z,fa as ee,ga as b,ha as P,ia as c,na as m,oa as g,pa as v,qa as I,ra as te,t as j,ta as ne,va as A,w as B,x as H,y as U,z as G,za as D}from"./chunk-FYWCDJCD.js";import"./chunk-4CLCTAJ7.js";function xe(t,i){if(t&1){let e=b();r(0,"a",12),P("keyup.enter",function(){f(e),c(3);let a=m(1);return _(a.previous())})("click",function(){f(e),c(3);let a=m(1);return _(a.previous())}),g(1),r(2,"span",13),g(3),l()()}if(t&2){let e=c(3);o(),I(" ",e.previousLabel," "),o(2),v(e.screenReaderPageLabel)}}function ve(t,i){if(t&1&&(r(0,"span",14),g(1),r(2,"span",13),g(3),l()()),t&2){let e=c(3);o(),I(" ",e.previousLabel," "),o(2),v(e.screenReaderPageLabel)}}function Ce(t,i){if(t&1&&(r(0,"li",9),x(1,xe,4,2,"a",10)(2,ve,4,2,"span",11),l()),t&2){c(2);let e=m(1);S("disabled",e.isFirstPage()),o(),d("ngIf",1<e.getCurrent()),o(),d("ngIf",e.isFirstPage())}}function be(t,i){if(t&1){let e=b();r(0,"a",12),P("keyup.enter",function(){f(e);let a=c().$implicit;c(2);let s=m(1);return _(s.setCurrent(a.value))})("click",function(){f(e);let a=c().$implicit;c(2);let s=m(1);return _(s.setCurrent(a.value))}),r(1,"span",13),g(2),l(),r(3,"span"),g(4),D(5,"number"),l()()}if(t&2){let e=c().$implicit,n=c(2);o(2),I("",n.screenReaderPageLabel," "),o(2),v(e.label==="..."?e.label:T(5,2,e.label,""))}}function Pe(t,i){if(t&1&&(Z(0),r(1,"span",16)(2,"span",13),g(3),l(),r(4,"span"),g(5),D(6,"number"),l()(),ee()),t&2){let e=c().$implicit,n=c(2);o(3),I("",n.screenReaderCurrentLabel," "),o(2),v(e.label==="..."?e.label:T(6,2,e.label,""))}}function Ie(t,i){if(t&1&&(r(0,"li"),x(1,be,6,5,"a",10)(2,Pe,7,5,"ng-container",15),l()),t&2){let e=i.$implicit;c(2);let n=m(1);S("current",n.getCurrent()===e.value)("ellipsis",e.label==="..."),o(),d("ngIf",n.getCurrent()!==e.value),o(),d("ngIf",n.getCurrent()===e.value)}}function ye(t,i){if(t&1){let e=b();r(0,"a",12),P("keyup.enter",function(){f(e),c(3);let a=m(1);return _(a.next())})("click",function(){f(e),c(3);let a=m(1);return _(a.next())}),g(1),r(2,"span",13),g(3),l()()}if(t&2){let e=c(3);o(),I(" ",e.nextLabel," "),o(2),v(e.screenReaderPageLabel)}}function Le(t,i){if(t&1&&(r(0,"span",14),g(1),r(2,"span",13),g(3),l()()),t&2){let e=c(3);o(),I(" ",e.nextLabel," "),o(2),v(e.screenReaderPageLabel)}}function ke(t,i){if(t&1&&(r(0,"li",17),x(1,ye,4,2,"a",10)(2,Le,4,2,"span",11),l()),t&2){c(2);let e=m(1);S("disabled",e.isLastPage()),o(),d("ngIf",!e.isLastPage()),o(),d("ngIf",e.isLastPage())}}function we(t,i){if(t&1&&(r(0,"ul",4),x(1,Ce,3,4,"li",5),r(2,"li",6),g(3),l(),x(4,Ie,3,6,"li",7)(5,ke,3,4,"li",8),l()),t&2){let e=c(),n=m(1);S("responsive",e.responsive),o(),d("ngIf",e.directionLinks),o(2),te(" ",n.getCurrent()," / ",n.getLastPage()," "),o(),d("ngForOf",n.pages)("ngForTrackBy",e.trackByIndex),o(),d("ngIf",e.directionLinks)}}var M=class{constructor(){this.change=new k,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(i){return i.id==null&&(i.id=this.DEFAULT_ID),this.instances[i.id]?this.updateInstance(i):(this.instances[i.id]=i,!0)}updateInstance(i){let e=!1;for(let n in this.instances[i.id])i[n]!==this.instances[i.id][n]&&(this.instances[i.id][n]=i[n],e=!0);return e}getCurrentPage(i){return this.instances[i]?this.instances[i].currentPage:1}setCurrentPage(i,e){if(this.instances[i]){let n=this.instances[i],a=Math.ceil(n.totalItems/n.itemsPerPage);e<=a&&1<=e&&(this.instances[i].currentPage=e,this.change.emit(i))}}setTotalItems(i,e){this.instances[i]&&0<=e&&(this.instances[i].totalItems=e,this.change.emit(i))}setItemsPerPage(i,e){this.instances[i]&&(this.instances[i].itemsPerPage=e,this.change.emit(i))}getInstance(i=this.DEFAULT_ID){return this.instances[i]?this.clone(this.instances[i]):{}}clone(i){var e={};for(var n in i)i.hasOwnProperty(n)&&(e[n]=i[n]);return e}},Se=Number.MAX_SAFE_INTEGER,ce=(()=>{class t{constructor(e){this.service=e,this.state={}}transform(e,n){if(!(e instanceof Array)){let y=n.id||this.service.defaultId();return this.state[y]?this.state[y].slice:e}let a=n.totalItems&&n.totalItems!==e.length,s=this.createInstance(e,n),p=s.id,u,h,C=s.itemsPerPage,F=this.service.register(s);if(!a&&e instanceof Array){if(C=+C||Se,u=(s.currentPage-1)*C,h=u+C,this.stateIsIdentical(p,e,u,h))return this.state[p].slice;{let V=e.slice(u,h);return this.saveState(p,e,V,u,h),this.service.change.emit(p),V}}else return F&&this.service.change.emit(p),this.saveState(p,e,e,u,h),e}createInstance(e,n){return this.checkConfig(n),{id:n.id!=null?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||e.length}}checkConfig(e){let a=["itemsPerPage","currentPage"].filter(s=>!(s in e));if(0<a.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${a.join(", ")}`)}saveState(e,n,a,s,p){this.state[e]={collection:n,size:n.length,slice:a,start:s,end:p}}stateIsIdentical(e,n,a,s){let p=this.state[e];return!p||!(p.size===n.length&&p.start===a&&p.end===s)?!1:p.slice.every((h,C)=>h===n[a+C])}}return t.\u0275fac=function(e){return new(e||t)(w(M,16))},t.\u0275pipe=G({name:"paginate",type:t,pure:!1}),t})();var Ee=(()=>{class t{constructor(e,n){this.service=e,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new k,this.pageBoundsCorrection=new k,this.pages=[],this.changeSub=this.service.change.subscribe(a=>{this.id===a&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){this.id===void 0&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(e){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return this.getCurrent()===1}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(e){this.pageChange.emit(e)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let e=this.service.getInstance(this.id);return e.totalItems<1?1:Math.ceil(e.totalItems/e.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){this.service.getInstance(this.id).id==null&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let e=this.service.getInstance(this.id),n=this.outOfBoundCorrection(e);n!==e.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)}):this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)}outOfBoundCorrection(e){let n=Math.ceil(e.totalItems/e.itemsPerPage);return n<e.currentPage&&0<n?n:e.currentPage<1?1:e.currentPage}createPageArray(e,n,a,s){s=+s;let p=[],u=Math.max(Math.ceil(a/n),1),h=Math.ceil(s/2),C=e<=h,F=u-h<e,y=!C&&!F,V=s<u,L=1;for(;L<=u&&L<=s;){let O,$=this.calculatePageNumber(L,e,s,u),me=L===2&&(y||F),fe=L===s-1&&(y||C);V&&(me||fe)?O="...":O=$,p.push({label:O,value:$}),L++}return p}calculatePageNumber(e,n,a,s){let p=Math.ceil(a/2);return e===a?s:e===1?e:a<s?s-p<n?s-a+e:p<n?n-p+e:e:e}}return t.\u0275fac=function(e){return new(e||t)(w(M),w(ie))},t.\u0275dir=U({type:t,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[q]}),t})();function z(t){return!!t&&t!=="false"}var ge=(()=>{class t{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new k,this.pageBoundsCorrection=new k,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(e){this._directionLinks=z(e)}get autoHide(){return this._autoHide}set autoHide(e){this._autoHide=z(e)}get responsive(){return this._responsive}set responsive(e){this._responsive=z(e)}trackByIndex(e){return e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=B({type:t,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[["p","paginationApi"],[3,"pageChange","pageBoundsCorrection","id","maxSize"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(e,n){if(e&1){let a=b();r(0,"pagination-template",1,0),P("pageChange",function(p){return f(a),_(n.pageChange.emit(p))})("pageBoundsCorrection",function(p){return f(a),_(n.pageBoundsCorrection.emit(p))}),r(2,"nav",2),x(3,we,6,8,"ul",3),l()()}if(e&2){let a=m(1);d("id",n.id)("maxSize",n.maxSize),o(2),J("aria-label",n.screenReaderPaginationLabel),o(),d("ngIf",!(n.autoHide&&a.pages.length<=1))}},dependencies:[Ee,re,N,oe],styles:[`.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}
`],encapsulation:2,changeDetection:0}),t})(),de=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=H({type:t}),t.\u0275inj=j({providers:[M],imports:[[R]]}),t})();var Te=(t,i)=>i.id,Me=()=>[se,ce,ge,ae,N],Fe=t=>({itemsPerPage:2,currentPage:t}),ue=t=>["/productos",t];function Ve(t,i){if(t&1&&E(0,"span",23),t&2){let e=i.$implicit;d("ngClass",e)}}function Be(t,i){if(t&1&&(r(0,"div",11)(1,"div",15)(2,"div",16),E(3,"img",17),l(),r(4,"div",18)(5,"a",19),g(6),l(),r(7,"ul",20)(8,"li"),g(9),l(),r(10,"li",21),x(11,Ve,1,1,"span",22),l()()()()()),t&2){let e=i.$implicit;o(),d("routerLink",A(6,ue,e.id)),o(2),d("src",e.image,W),o(2),d("routerLink",A(8,ue,e.id)),o(),v(e.name),o(3),v(e.description),o(2),d("ngForOf",e.colors)}}function Ae(t,i){if(t&1){let e=b();r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),g(4,"Categorias"),l(),r(5,"ul",4)(6,"li",5)(7,"a",6),g(8," Maderas "),E(9,"i",7),l(),r(10,"ul",8)(11,"li")(12,"a",9),g(13,"Men"),l()(),r(14,"li")(15,"a",9),g(16,"Women"),l()()()()()(),r(17,"div",10)(18,"div",1),K(19,Be,12,10,"div",11,Te),D(21,"paginate"),l()()()(),r(22,"div",12)(23,"div",13)(24,"pagination-controls",14),P("pageChange",function(a){f(e);let s=c();return _(s.p=a)}),g(25,">"),l()()()}if(t&2){let e=c();o(19),Q(T(21,0,e.productos,A(3,Fe,e.p)))}}function Ne(t,i){t&1&&(r(0,"div",24)(1,"div",25)(2,"div",26)(3,"div",27)(4,"div",28)(5,"p",29),g(6,"Cargando..."),l(),r(7,"div",30),E(8,"span",31),l()()()()()())}var Ze=(()=>{class t{productosService;p=1;productos=[];constructor(e){this.productosService=e}ngOnInit(){this.productosService.getProducts().subscribe(e=>{this.productos=e})}static \u0275fac=function(n){return new(n||t)(w(pe))};static \u0275cmp=B({type:t,selectors:[["app-productos"]],standalone:!0,features:[ne],decls:4,vars:0,consts:[[1,"container","py-5"],[1,"row"],[1,"col-lg-3"],[1,"pb-4","poppins-regular"],[1,"list-unstyled"],[1,"pb-3"],["data-bs-toggle","collapse","href","#collapseGender","role","button","aria-expanded","false","aria-controls","collapseGender",1,"collapsed","d-flex","justify-content-between","h3","text-decoration-none","poppins-regular"],[1,"fa","fa-fw","fa-chevron-circle-down","mt-1",2,"color","#4c2f00"],["id","collapseGender",1,"collapse","list-unstyled","ps-3"],["href","#",1,"text-decoration-none","poppins-regular"],[1,"col-lg-9","space"],[1,"col-md-4"],[1,"container-fluid"],[1,"d-flex","justify-content-center","mr-5"],["previousLabel","Anterior","nextLabel","Siguiente",1,"paginacion",3,"pageChange"],[1,"card","mb-4","product-wap","rounded-0","hover",2,"cursor","pointer",3,"routerLink"],[1,"card","rounded-0"],[1,"card-img","rounded-0","img-fluid",3,"src"],[1,"card-body"],[1,"h3","text-decoration-none",3,"routerLink"],[1,"w-100","list-unstyled","d-flex","justify-content-between","mb-0"],[1,"pt-2"],["class","product-color-dot float-start rounded-circle ms-1",3,"ngClass",4,"ngFor","ngForOf"],[1,"product-color-dot","float-start","rounded-circle","ms-1",3,"ngClass"],[1,"container-fluid","mt-5"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-8"],[1,"bg-light","p-5","shadow-sm","rounded"],[1,"text-center","text-muted","font-weight-bold"],["role","status",1,"spinner-border","text-primary","d-block","mx-auto"],[1,"visually-hidden"]],template:function(n,a){n&1&&(x(0,Ae,26,5)(1,Ne,9,0),Y(2,0,Me,null,1),X())},dependencies:[le,de,R],styles:[".space[_ngcontent-%COMP%]{margin-top:50px}.active[_ngcontent-%COMP%]{color:#fff;background-color:#4c2f00}.paginacion[_ngcontent-%COMP%]     .ngx-pagination .current{background-color:#4c2f00}.hover[_ngcontent-%COMP%]:active{color:#ccc;transform:scale(.9)}.hover[_ngcontent-%COMP%]:hover{border:3px solid white}"]})}return t})();export{Ze as ProductosComponent};
