"use strict";(self.webpackChunkmerchandise_shop=self.webpackChunkmerchandise_shop||[]).push([[523],{523:(ar,Ot,c)=>{c.r(Ot),c.d(Ot,{StoreModule:()=>nt});var l=c(6895),wt=c(3799),Et=c(4466);class rt{constructor(...e){e[0]instanceof rt?(this.id=e[0].id,this.name=e[0].name,this.imageLink=e[0].imageLink,this.price=e[0].price,this.category=e[0].category):(this.id=e[0],this.name=e[1],this.imageLink=e[2],this.price=e[3],this.category=e[4])}}var F=c(4850),xt=c(591),A=c(9316),r=c(5062),ot=c(529);class p{constructor(e){this.httpClient=e,this._storeProducts$=new xt.X([]),e.get(A._+"/api/products").pipe((0,F.U)(t=>t.map(o=>new rt(o.id,o.name,o.imageLink,o.price,o.category)))).subscribe(t=>this._storeProducts$.next(t))}getStoreProducts(){return this._storeProducts$}findProduct(e){return this._storeProducts$.value.find(o=>o.id==e)}static#t=this.\u0275fac=function(t){return new(t||p)(r.LFG(ot.eN))};static#e=this.\u0275prov=r.Yz7({token:p,factory:p.\u0275fac})}class P{constructor(e,t){this.productId=e,this.productQuantity=t}}class m{constructor(e,t){this.storeService=e,this.httpClient=t,this._cartItems$=new xt.X([]),t.get(A._+"/api/shoppingcart").pipe((0,F.U)(o=>o.map(i=>new P(i.productId,i.productQuantity)))).subscribe(o=>this._cartItems$.next(o))}addItem(e){if(this.storeService.findProduct(e)){if(this._cartItems$.value.find(i=>i.productId==e))throw new Error("Item already exists in cart");this.httpClient.post(A._+"/api/shoppingcart",new P(e,1)).subscribe(i=>{i&&this._cartItems$.next([...this._cartItems$.value,new P(e,1)])},i=>{throw new Error(`Request error (${i.message})`)})}}removeItem(e){this.httpClient.delete(A._+"/api/shoppingcart/remove/"+e).subscribe(t=>{t&&this._cartItems$.next(this._cartItems$.value.filter(o=>o.productId!=e))},t=>{throw new Error(`Request error (${t.message})`)})}modifyItem(e,t){const o=this._cartItems$.value.find(i=>i.productId==e);if(!o)throw new Error("Item doesn't exist in cart");this.httpClient.put(A._+"/api/shoppingcart",new P(e,t)).subscribe(i=>{i&&(o.productQuantity=t)},i=>{throw new Error(`Request error (${i.message})`)})}clearCart(){this.httpClient.get(A._+"/api/shoppingcart/clearcart").subscribe(e=>{this._cartItems$.next([])},e=>{throw new Error(`Request error (${e.message})`)})}getCartItems(){return this._cartItems$}get cartPriceTotal(){return+this._cartItems$.value.reduce((e,t)=>{let o=this.storeService.findProduct(t.productId);return o?e+o.price*t.productQuantity:e},0).toFixed(2)}static#t=this.\u0275fac=function(t){return new(t||m)(r.LFG(p),r.LFG(ot.eN))};static#e=this.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac})}class O{static#t=this.\u0275fac=function(t){return new(t||O)};static#e=this.\u0275mod=r.oAB({type:O});static#n=this.\u0275inj=r.cJS({imports:[l.ez]})}class G{static#t=this.\u0275fac=function(t){return new(t||G)};static#e=this.\u0275mod=r.oAB({type:G});static#n=this.\u0275inj=r.cJS({providers:[p,m],imports:[l.ez,O,Et.m]})}c(5254),c(6498),c(6688),c(7830);const x=new r.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>mt}),mt="always";let Ve=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})(),Hn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[Ve]}),n})(),jn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:x,useValue:t.callSetDisabledState??mt}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[Hn]}),n})();class ${static#t=this.\u0275fac=function(t){return new(t||$)};static#e=this.\u0275mod=r.oAB({type:$});static#n=this.\u0275inj=r.cJS({imports:[l.ez,jn]})}class Z{static#t=this.\u0275fac=function(t){return new(t||Z)};static#e=this.\u0275mod=r.oAB({type:Z});static#n=this.\u0275inj=r.cJS({imports:[l.ez]})}var qn=c(3372),z=(()=>{return(n=z||(z={}))[n.MUSIC=0]="MUSIC",n[n.MERCH=1]="MERCH",z;var n})();function Yn(n,e){if(1&n){const t=r.EpF();r.TgZ(0,"div",1)(1,"span",2),r._uU(2),r.qZA(),r._UZ(3,"img",3),r.TgZ(4,"div",4)(5,"span",5),r._uU(6),r.qZA(),r.TgZ(7,"button",6),r.NdJ("click",function(){r.CHM(t);const i=r.oxw();return r.KtG(i.addItemToCart())}),r._uU(8,"ADD TO CART"),r.qZA()()()}if(2&n){const t=r.oxw();r.xp6(2),r.Oqu(t.product.name),r.xp6(1),r.Q6J("src",t.product.imageLink,r.LSH),r.xp6(3),r.hij("$",t.product.price,"")}}class W{constructor(e,t){this.storeService=e,this.cartService=t}ngOnInit(){void 0!==this.itemId&&(this.product=this.storeService.findProduct(this.itemId))}addItemToCart(){if(void 0!==this.product)try{this.cartService.addItem(this.product.id)}catch(e){alert(e)}}static#t=this.\u0275fac=function(t){return new(t||W)(r.Y36(p),r.Y36(m))};static#e=this.\u0275cmp=r.Xpm({type:W,selectors:[["app-item-card"]],inputs:{itemId:"itemId"},decls:1,vars:1,consts:[["class","shop-item",4,"ngIf"],[1,"shop-item"],[1,"shop-item-title"],[1,"shop-item-image",3,"src"],[1,"shop-item-details"],[1,"shop-item-price"],["type","button",1,"btn","btn-primary","shop-item-button",3,"click"]],template:function(t,o){1&t&&r.YNc(0,Yn,9,3,"div",0),2&t&&r.Q6J("ngIf",o.product)},dependencies:[l.O5],styles:[".shop-item[_ngcontent-%COMP%]{margin:50px}.shop-item-title[_ngcontent-%COMP%]{display:block;width:100%;text-align:center;font-weight:700;font-size:1.5em;color:#333;margin-bottom:15px}.shop-item-image[_ngcontent-%COMP%]{height:250px;width:250px}.shop-item-details[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px}.shop-item-price[_ngcontent-%COMP%]{flex-grow:1;color:#333}.btn[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;padding:.67em;cursor:pointer}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#56ccf2;border:none;border-radius:.3em;font-weight:700}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#4cbde2}"]})}class I{transform(e,t){return e.filter(o=>o.category==t)}static#t=this.\u0275fac=function(t){return new(t||I)};static#e=this.\u0275pipe=r.Yjl({name:"extractItemsFromProductCategory",type:I,pure:!0})}function $n(n,e){1&n&&r._UZ(0,"app-item-card",5),2&n&&r.Q6J("itemId",e.$implicit.id)}function Zn(n,e){if(1&n&&(r.TgZ(0,"section",1),r._UZ(1,"h2",2),r.TgZ(2,"div",3),r.YNc(3,$n,1,1,"app-item-card",4),r.ALo(4,"extractItemsFromProductCategory"),r.qZA()()),2&n){const t=r.oxw();r.xp6(1),r.Q6J("innerText",t.productsCategoryName),r.xp6(2),r.Q6J("ngForOf",r.xi3(4,2,t.products,t.productsCategory))}}class J{constructor(e){this.storeService=e}ngOnInit(){void 0!==this.productsCategory&&(this.productsCategoryName=z[this.productsCategory])}static#t=this.\u0275fac=function(t){return new(t||J)(r.Y36(p))};static#e=this.\u0275cmp=r.Xpm({type:J,selectors:[["app-items-card-collection"]],inputs:{products:"products",productsCategory:"productsCategory"},decls:1,vars:1,consts:[["class","container-wrapper",4,"ngIf"],[1,"container-wrapper"],[1,"section-header",3,"innerText"],[1,"shop-items"],[3,"itemId",4,"ngFor","ngForOf"],[3,"itemId"]],template:function(t,o){1&t&&r.YNc(0,Zn,5,5,"section",0),2&t&&r.Q6J("ngIf",void 0!==o.productsCategory)},dependencies:[l.sg,l.O5,W,I],styles:[".container-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column}.content-section[_ngcontent-%COMP%]{margin:1em}.section-header[_ngcontent-%COMP%]{font-family:Metal Mania;font-weight:400;color:#333;text-align:center;font-size:2.5em}.shop-items[_ngcontent-%COMP%]{max-width:900px;display:flex;flex-wrap:wrap;justify-content:center}"]})}class Q{transform(e){return[...new Set(e.map(t=>t.category))]}static#t=this.\u0275fac=function(t){return new(t||Q)};static#e=this.\u0275pipe=r.Yjl({name:"extractCategoriesFromProductList",type:Q,pure:!0})}function zn(n,e){if(1&n&&(r._UZ(0,"app-items-card-collection",3),r.ALo(1,"extractItemsFromProductCategory")),2&n){const t=e.$implicit,o=r.oxw().ngIf;r.Q6J("products",r.xi3(1,2,o,t))("productsCategory",t)}}function Wn(n,e){if(1&n&&(r.ynx(0),r.YNc(1,zn,2,5,"app-items-card-collection",2),r.ALo(2,"extractCategoriesFromProductList"),r.BQk()),2&n){const t=e.ngIf;r.xp6(1),r.Q6J("ngForOf",r.lcZ(2,1,t))}}function Jn(n,e){1&n&&r._UZ(0,"app-loading-spinner")}class X{constructor(e){this.storeService=e,this.storeProducts$=e.getStoreProducts()}ngOnInit(){}static#t=this.\u0275fac=function(t){return new(t||X)(r.Y36(p))};static#e=this.\u0275cmp=r.Xpm({type:X,selectors:[["app-store-items"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loadingTemplate",""],[3,"products","productsCategory",4,"ngFor","ngForOf"],[3,"products","productsCategory"]],template:function(t,o){if(1&t&&(r.YNc(0,Wn,3,3,"ng-container",0),r.ALo(1,"async"),r.YNc(2,Jn,1,0,"ng-template",null,1,r.W1O)),2&t){const i=r.MAs(3);r.Q6J("ngIf",r.lcZ(1,2,o.storeProducts$))("ngIfElse",i)}},dependencies:[l.sg,l.O5,qn.g,J,l.Ov,Q,I]})}function Qn(n,e){if(1&n){const t=r.EpF();r.TgZ(0,"div",1)(1,"div",2),r._UZ(2,"img",3),r.TgZ(3,"span",4),r._uU(4),r.qZA()(),r.TgZ(5,"span",5),r._uU(6),r.qZA(),r.TgZ(7,"div",6)(8,"input",7,8),r.NdJ("change",function(){r.CHM(t);const i=r.MAs(9),s=r.oxw();return r.KtG(s.onUpdateCartQuantity(i))}),r.qZA(),r.TgZ(10,"button",9),r.NdJ("click",function(){r.CHM(t);const i=r.oxw();return r.KtG(i.onRemoveItemFromCart())}),r._uU(11,"REMOVE"),r.qZA()()()}if(2&n){const t=e.ngIf,o=r.oxw();r.xp6(2),r.Q6J("src",t.imageLink,r.LSH),r.xp6(2),r.Oqu(t.name),r.xp6(2),r.hij("$",t.price,""),r.xp6(2),r.Q6J("value",o.cartProduct.productQuantity)}}class K{constructor(e,t){this.cartService=e,this.storeService=t,this.product$=t.getStoreProducts().pipe((0,F.U)(o=>o.find(i=>i.id==this.cartProduct.productId)))}ngOnInit(){}onUpdateCartQuantity(e){+e.value>0?this.cartService.modifyItem(this.cartProduct.productId,+e.value):(this.cartService.modifyItem(this.cartProduct.productId,1),e.value=1..toString())}onRemoveItemFromCart(){this.cartService.removeItem(this.cartProduct.productId)}static#t=this.\u0275fac=function(t){return new(t||K)(r.Y36(m),r.Y36(p))};static#e=this.\u0275cmp=r.Xpm({type:K,selectors:[["app-item-cart"]],inputs:{cartProduct:"cartProduct"},decls:2,vars:3,consts:[["class","cart-row",4,"ngIf"],[1,"cart-row"],[1,"cart-item","cart-column"],["width","100","height","100",1,"cart-item-image",3,"src"],[1,"cart-item-title"],[1,"cart-price","cart-column"],[1,"cart-quantity","cart-column"],["type","number",1,"cart-quantity-input",3,"value","change"],["prodQuantityInput",""],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,o){1&t&&(r.YNc(0,Qn,12,4,"div",0),r.ALo(1,"async")),2&t&&r.Q6J("ngIf",r.lcZ(1,1,o.product$))},dependencies:[l.O5,l.Ov],styles:[".cart-row[_ngcontent-%COMP%]{display:flex}.cart-row[_ngcontent-%COMP%]:last-child   .cart-column[_ngcontent-%COMP%]{border:none}.cart-item[_ngcontent-%COMP%]{width:45%}.cart-quantity-input[_ngcontent-%COMP%]{height:34px;width:50px;border-radius:5px;border:1px solid #56CCF2;background-color:#eee;color:#333;padding:0;text-align:center;font-size:1.2em;margin-right:25px}.btn-danger[_ngcontent-%COMP%]{color:#fff;background-color:#eb5757;border:none;border-radius:.3em;font-weight:700}.btn[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;padding:.67em;cursor:pointer}.cart-column[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid black;margin-right:1.5em;padding-bottom:10px;margin-top:10px}.cart-item-image[_ngcontent-%COMP%]{width:75px;height:auto;border-radius:10px}.cart-item-title[_ngcontent-%COMP%]{color:#333;margin-left:.5em;font-size:1.2em}.cart-price[_ngcontent-%COMP%]{width:20%;font-size:1.2em;color:#333}.cart-quantity[_ngcontent-%COMP%]{width:35%}"]})}function Xn(n,e){1&n&&r._UZ(0,"app-item-cart",16),2&n&&r.Q6J("cartProduct",e.$implicit)}function Kn(n,e){if(1&n&&(r.TgZ(0,"div",14),r.YNc(1,Xn,1,1,"app-item-cart",15),r.qZA()),2&n){const t=r.oxw().ngIf;r.xp6(1),r.Q6J("ngForOf",t)}}function tr(n,e){1&n&&(r.TgZ(0,"div",14)(1,"h2",17),r._uU(2,"Empty cart"),r.qZA()())}function er(n,e){if(1&n){const t=r.EpF();r.ynx(0),r.YNc(1,Kn,2,1,"div",8),r.TgZ(2,"div",9)(3,"strong",10),r._uU(4,"Total"),r.qZA(),r.TgZ(5,"span",11),r._uU(6),r.qZA()(),r.TgZ(7,"button",12),r.NdJ("click",function(){const s=r.CHM(t).ngIf,a=r.oxw();return r.KtG(a.onPurchase(s))}),r._uU(8,"PURCHASE"),r.qZA(),r.YNc(9,tr,3,0,"ng-template",null,13,r.W1O),r.BQk()}if(2&n){const t=e.ngIf,o=r.MAs(10),i=r.oxw();r.xp6(1),r.Q6J("ngIf",t.length>0)("ngIfElse",o),r.xp6(5),r.hij("$",i.cartService.cartPriceTotal,"")}}class tt{constructor(e,t){this.cartService=e,this.storeService=t,this.cart$=e.getCartItems(),this.store$=t.getStoreProducts()}ngOnInit(){}onPurchase(e){e.length?(alert(`Thank you for your purchase ($${this.cartService.cartPriceTotal})`),this.cartService.clearCart()):alert("Cart empty")}static#t=this.\u0275fac=function(t){return new(t||tt)(r.Y36(m),r.Y36(p))};static#e=this.\u0275cmp=r.Xpm({type:tt,selectors:[["app-store-cart"]],decls:13,vars:3,consts:[[1,"wrapper"],[1,"content-section"],[1,"section-header"],[1,"cart-row"],[1,"cart-item","cart-header","cart-column"],[1,"cart-price","cart-header","cart-column"],[1,"cart-quantity","cart-header","cart-column"],[4,"ngIf"],["class","cart-items m-3",4,"ngIf","ngIfElse"],[1,"cart-total"],[1,"cart-total-title"],[1,"cart-total-price"],["type","button",1,"btn","btn-primary","btn-purchase",3,"click"],["emptyCartTemplate",""],[1,"cart-items","m-3"],[3,"cartProduct",4,"ngFor","ngForOf"],[3,"cartProduct"],[1,"text-center"]],template:function(t,o){1&t&&(r.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),r._uU(3,"CART"),r.qZA(),r.TgZ(4,"div",3)(5,"span",4),r._uU(6,"ITEM"),r.qZA(),r.TgZ(7,"span",5),r._uU(8,"PRICE"),r.qZA(),r.TgZ(9,"span",6),r._uU(10,"QUANTITY"),r.qZA()(),r.YNc(11,er,11,3,"ng-container",7),r.ALo(12,"async"),r.qZA()()),2&t&&(r.xp6(11),r.Q6J("ngIf",r.lcZ(12,1,o.cart$)))},dependencies:[l.sg,l.O5,K,l.Ov],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}.content-section[_ngcontent-%COMP%]{width:900px;padding:0 1.5em;margin:1em}.section-header[_ngcontent-%COMP%]{font-family:Metal Mania;font-weight:400;color:#333;text-align:center;font-size:2.5em}.cart-header[_ngcontent-%COMP%]{font-weight:700;font-size:1.25em;color:#333}.cart-column[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid black;margin-right:1.5em;padding-bottom:10px;margin-top:10px}.cart-row[_ngcontent-%COMP%]{display:flex}.cart-item[_ngcontent-%COMP%]{width:45%}.cart-price[_ngcontent-%COMP%]{width:20%;font-size:1.2em;color:#333}.cart-quantity[_ngcontent-%COMP%]{width:35%}.cart-item-title[_ngcontent-%COMP%]{color:#333;margin-left:.5em;font-size:1.2em}.cart-item-image[_ngcontent-%COMP%]{width:75px;height:auto;border-radius:10px}.cart-total[_ngcontent-%COMP%]{max-width:900px;border-top:1px solid #212121;padding-top:15px;text-align:end;margin-top:10px;margin-right:10px}.cart-total-title[_ngcontent-%COMP%]{font-weight:700;font-size:1.5em;color:#000;margin-right:20px}.btn-purchase[_ngcontent-%COMP%]{display:block;margin:40px auto 80px;font-size:1.75em}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#56ccf2;border:none;border-radius:.3em;font-weight:700}.btn[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;padding:.67em;cursor:pointer}"]})}var nr=c(6526),rr=c(5145);class et{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(t){return new(t||et)};static#e=this.\u0275cmp=r.Xpm({type:et,selectors:[["app-store"]],decls:4,vars:0,template:function(t,o){1&t&&r._UZ(0,"shared-navigation")(1,"app-store-items")(2,"app-store-cart")(3,"shared-footer")},dependencies:[X,tt,nr.c,rr.J]})}const or=[{path:"",component:et}];class nt{static#t=this.\u0275fac=function(t){return new(t||nt)};static#e=this.\u0275mod=r.oAB({type:nt});static#n=this.\u0275inj=r.cJS({providers:[p,m],imports:[wt.Bz.forChild(or),l.ez,Z,G,O,ot.JF,$,Et.m,wt.Bz]})}}}]);