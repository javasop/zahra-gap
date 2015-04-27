"use strict";angular.module("store.product",[]).config(["$stateProvider",function(t){t.state("productDetail",{url:"/store/:type/:id",templateUrl:"app/store/productDetail/productDetail.html",controller:"productDetailController"})}]).controller("productDetailController",["$scope","storeData","$rootScope","$stateParams","$location","$ionicModal","$ionicPopup","$state",function(t,e,o,s,a,i){var l="assets/images/sections/stores/";t.desc=l+"description_text.png",t.pricelb=l+"price_text.png",t.button_add=l+"button_add.png",t.button_tweet=l+"button_tweet.png",t.images=["assets/images/about.png","assets/images/ionic.png"],t.cardflowSnapKinetic={},t.coverflow={},e.getProductDetail(s.id),t.addCart=function(){o.currentCart=e.addCart(o.product)},o.deleteCart=function(t){e.deleteCart(t)},o.go=e.go,i.fromTemplateUrl("cart.html",{scope:o,animation:"slide-in-up"}).then(function(t){o.modal=t}),t.openModal=function(){o.modal.show()},o.closeModal=function(){o.modal.hide()},o.submit=function(){o.closeModal()},o.$on("$destroy",function(){o.modal.remove()}),o.$on("modal.hidden",function(){}),o.$on("modal.removed",function(){})}]),angular.module("store.checkout",["forms"]).config(["$stateProvider",function(t){t.state("checkout",{url:"/checkout",templateUrl:"app/store/checkout/checkout.html",controller:"CheckoutCtrl"})}]).controller("CheckoutCtrl",["$scope","$rootScope","$stateParams","$location","storeData","formsData",function(t,e,o,s,a,i){i.get("store"),t.submit=function(){i.post("store")}}]),angular.module("store.buy",[]).config(["$stateProvider",function(t){t.state("buy",{url:"/buy",templateUrl:"app/store/buy/buy.html",controller:"BuyCtrl"})}]).controller("BuyCtrl",["$scope","$rootScope","$stateParams","$location","storeData",function(t,e,o,s,a){t.co={cc:""},e.data={products:e.currentCart},t.go=function(){s.path("/checkout")},t.checkCoupon=function(){a.checkCoupon(t.co.cc)}}]),angular.module("zahra",["ionic","ngCordova","home","store","angularSpinner","angular-cardflow"]).constant("host","http://galamr.com/zahrahControl/wp-json/zahra/").config(["$urlRouterProvider",function(t){t.otherwise("/home")}]),angular.module("zahra").controller("NavbarCtrl",["$scope",function(t){t.date=new Date}]),angular.module("forms",[]).service("formsData",["$rootScope","$http","Model","$stateParams","$ionicPopup","$location","usSpinnerService",function(t,e,o,s,a,i,l){this.get=function(e){o.get("forms",{type:e}).success(function(e){l.stop("spinner-1"),t.forms=e})},this.post=function(e){var s=t.data;for(f in t.forms)s[t.forms[f].element_name]=t.forms[f].value;if(this.validate(s)){var a="... الطلب قيد التنفيذ";o.post(e,s,a).success(function(t){l.stop("spinner-1"),console.log(t)})}},this.validate=function(t){var e='<p class="alert">الرجاء تعبئة جميع البيانات</p>',s='<p class="alert">البريد الالكتروني غير صحيح</p>',i=o.formEmpty(t);if(!i){if(void 0==t.email){a.alert({title:e+s})}else{a.alert({title:e})}return!1}return!0}}]),angular.module("store.service",[]).service("storeData",["$rootScope","$http","Model","$stateParams","usSpinnerService","$ionicPopup","$location","$state",function(t,e,o,s,a,i,l){function n(){void 0!=t.currentCart&&(t.total={discounted:!1,value:0},t.currentCart.forEach(function(e){var o=parseInt(e.custom_meta._wpsc_price);t.total.value=t.total.value+o*e.quantity}))}this.products="",this.store="";var r=this;this.go=function(){if(t.currentCart.length>0)t.modal.hide(),l.path("/buy");else{i.alert({title:'<p class="alert">سلة المشتريات فارغة</p>',template:"الرجاء اضافة منتج لاتمام عملية الشراء"})}},this.checkStore=function(){var t;return t="main"==s.type?"store":"lamsa"},t.cart={store:[],lamsa:[]},t.currency="ريال",t.$watch("store",function(){}),t.$watch("currentCart",function(){n()},!0),this.get=function(e){var s,i=r.checkStore();s=i!=this.store?!0:!1,this.store=i,(!t.products||s)&&o.get(i).success(function(o){a.stop("spinner-1"),t.products=o,t.currentCart=t.cart[i],e&&r.getProductDetail(e)})},this.getProductDetail=function(e){t.products?t.product=o.search("ID",e,t.products):this.get(e)},this.addCart=function(e){var s=r.checkStore();if(e.quantity=1,o.search("ID",e.ID,t.currentCart)){i.alert({title:'<p class="alert">تم اضافة المنتج مسبقا  </p>',template:"المنتج موجود حاليا في سلة المشتريات"})}else{t.cart[s].push(e);{i.alert({title:'<p class="success">تم اضافة المنتج</p>',template:"المنتج موجود حاليا في سلة المشتريات"})}}return t.cart[s]},this.deleteCart=function(e){r.checkStore(),t.currentCart.indexOf(e);t.currentCart.splice(0,1)},this.checkCoupon=function(e){var s={cc:e};if(t.total.discounted){i.alert({title:'<p class="alert">قيمة الخصم مضافة سابقا</p>'})}else{var a="... جاري التحقق من الكوبون";o.get("verify_coupon",s,a).success(function(e){if("No code"==e){i.alert({title:'<p class="alert">لم يتم العثور علئ الكوبون</p>',template:"الرجاء التأكد من الرقم "})}else{{var o="%"+parseInt(e.value)+" قيمة الخصم ";i.alert({title:'<p class="success"> تم العثور علئ الكوبون</p>',template:o})}t.total.value=t.total.value-parseInt(e.value)/100*t.total.value,t.total.discounted=!0}})}}}]),angular.module("store",["store.service","store.product","store.buy","store.checkout"]).config(["$stateProvider",function(t){t.state("products",{url:"/store/:type",templateUrl:"app/store/store.html",controller:"storeController"})}]).controller("storeController",["$scope","$rootScope","storeData","$stateParams","$location","$ionicPopup",function(t,e,o,s,a){t.go=function(t){console.log("store/"+s.type+"/"+t),a.path("store/"+s.type+"/"+t)},o.get()}]).filter("range",function(){return function(t,e,o){e=parseInt(e),o=parseInt(o);for(var s=e;o>s;s++)t.push(s);return t}}),angular.module("home",[]).config(["$stateProvider",function(t){t.state("home",{url:"/home",templateUrl:"app/home/home.html",controller:"homeController"})}]).controller("homeController",function(){}),angular.module("zahra").service("Model",["$rootScope","$http","$stateParams","$ionicPopup","$location","host","usSpinnerService",function(t,e,o,s,a,i,l){var n=this;this.getUrl=function(t){var e="";this.services.forEach(function(o){void 0!=o[t]&&(e=o[t])}),console.log(i);var o=i+e;return o},this.services=[{store:"products?tax[wpsc_product_category]=main"},{lamsa:"products?tax[wpsc_product_category]=lamsa"},{order:"products"},{verify_coupon:"products/coupons"},{events:"events"},{questions:"questions"},{articles:"posts"},{stories:"stories"},{booklets:"booklets"},{brochures:"brochures"},{hospitals:"hospitals"},{members:"members"},{forms:"forms"}],this.get=function(t,o){l.spin("spinner-1");var s=n.getUrl(t);return e.get(s,{params:o})},this.search=function(t,e,o){var s;return o.forEach(function(o){o[t]==e&&(s=o)}),s},this.formEmpty=function(t){for(var e in t)if(null==t[e])return!1;return!0},this.post=function(t,o){var s=n.getUrl(t);return e.post(s,o)}}]),angular.module("zahra").run(["$templateCache",function(t){t.put("app/home/home.html",'<ion-view style="background-color:transparent;overflow: visible"><ion-content><img class="col col-80 col-offset-20" src="assets/images/sections/zahra_logo.png"><ion-slide-box on-slide-changed="slideHasChanged($index)"><ion-slide><a href="#/intro/education"><img class="col col-offset-20 col-66" src="assets/images/main_screen/s1/education.png"></a><div style="clear: both"></div><img style="float:left" class="col col-offset-20 col-33" src="assets/images/main_screen/s1/gap1.png"> <a href="#/store/main"><img style="float:left" class="col col-33" src="assets/images/main_screen/s1/store1.png"></a><div style="clear: both"></div><a href="#/intro/donations"><img style="float:left" class="col col-offset-20 col-33" src="assets/images/main_screen/s1/donations.png"></a> <a href="#/intro/hospitals"><img style="float:left" class="col col-33" src="assets/images/main_screen/s1/hospitals.png"></a><div style="clear: both"></div><a href="#/members"><img style="float:left" class="col col-offset-20 col-33" src="assets/images/main_screen/s1/members.png"></a> <a href="#/intro/about"><img style="float:left" class="col col-33" src="assets/images/main_screen/s1/about.png"></a></ion-slide><ion-slide><img style="float:left" class="col col-offset-20 col-33" src="assets/images/main_screen/s2/gap2.png"> <a href="#/intro/lamsa"><img style="float:left" class="col col-33" src="assets/images/main_screen/s2/lamsa.png"></a> <a href="#/events"><img class="col col-66 col-offset-20" src="assets/images/main_screen/s2/events.png"></a><div style="clear: both"></div><a href="#/intro/amal"><img class="col col-66 col-offset-20" src="assets/images/main_screen/s2/amal.png"></a><div style="clear: both"></div><img style="float:left" class="col col-offset-20 col-33" src="assets/images/main_screen/s2/app.png"> <a href="#/contact"><img style="float:left" class="col col-33" src="assets/images/main_screen/s2/contact.png"></a></ion-slide></ion-slide-box></ion-content></ion-view>'),t.put("app/store/store.html",'<ion-view title="" style="background-color:transparent;overflow: visible;"><ion-content><div ng-repeat="p in products"><a ng-click="go(p.ID)"><img class="photos item" height="250px" width="100%" ng-src="{{p.featured}}"></a><p style="color:white;text-align:center">{{p.title}}</p></div></ion-content></ion-view>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>'),t.put("app/store/buy/buy.html",'<ion-view style="background-color:transparent;overflow: visible"><ion-nav-buttons side="right"><button style="color:white" class="button button-icon" ng-click="data.showDelete = !data.showDelete; data.showReorder = false">تعديل</button></ion-nav-buttons><div class="modal"><ion-content><ion-list show-delete="data.showDelete" canswipeitems="true"><ion-item class="item-icon-left item-icon-right" ng-repeat="item in currentCart" item="item"><select style="margin-left: 2px" ng-model="item.quantity" ng-options="n for n in [] | range:1:{{item.stock}}"></select><img width="50" height="50" style="float:right" ng-src="{{item.featured}}"><p style="float:right">{{item.title}}</p><p style="float:left;margin-right:5px">{{currency}}</p><p style="float:left">{{item.price}}</p><ion-delete-button class="ion-minus-circled" ng-click="onItemDelete(item)"></ion-delete-button></ion-item><ion-item class="" item="item"><p style="float:right;font-size:18px">الاجمالي</p><p style="float:left;margin-right:5px">{{currency}}</p><p style="float:left">{{total.value}}</p></ion-item><ion-item class="item-icon-left item-icon-right" item="item"><a ng-click="go()" class="button button-positive" style="float:left">شراء</a></ion-item><ion-item class="item-icon-left item-icon-right" item="item"></ion-item></ion-list></ion-content></div></ion-view>'),t.put("app/store/checkout/checkout.html",'<ion-view style="background-color:transparent;overflow: visible"><ion-content><form><div style="margin-bottom:40px;color:white" class="col col-90 col-offset-20" ng-repeat="f in forms"><label style="float:right" class="col col-50">{{f.ar}}</label> <input style="float:right;border-radius:10px" class="col col-50" type="{{f.type}}" required="" placeholder="{{f.placeholder}}" ng-model="f.value"></div><button ng-click="submit()"></button></form></ion-content></ion-view>'),t.put("app/store/productDetail/productDetail.html",'<ion-view title="" style="background-color:transparent;overflow: visible;"><ion-nav-buttons side="right"><button class="button button-positive" ng-click="openModal()">سلة المشتريات</button></ion-nav-buttons><ion-content class="col col-90" style="margin-left:5%" scroll="true" scrollbar-y="false"><cardflow model="cardflowSnapKinetic" mode="swipeSnapKinetic"><div class="cardflow-card" ng-repeat="image in product.media" style="background-image: url( {{image}} )"></div></cardflow><div style="background-color: transparent;margin-bottom: 20px"><div><img class="col col-25" width="90" height="70" style="float:right" src="{{pricelb}}"><p style="float:right" class="col col-75"></p><p style="font-size:16px;color:white;text-align:right" class="icon col col-offset-50"><span style="text-align:right">{{currency}}</span><span style="float:right;margin-left:5px">{{product.custom_meta._wpsc_price}}</span></p><p></p></div><div style="clear:both"></div><div><img class="col col-25" width="90" height="70" style="float:right" src="{{desc}}"><p style="float:right;text-align:right" class="col col-75"><i style="font-size:16px;color:white;text-align:right" class="icon">{{product.description}}</i></p></div></div><div style="clear:both"></div><img style="float:left" class="col col-33" width="90" height="70" alt="hello" src="{{button_tweet}}"> <img style="float:right" class="col col-33" ng-click="addCart()" width="90" height="70" alt="hello" src="{{button_add}}"></ion-content></ion-view><script id="cart.html" type="text/ng-template"><div class="modal"> <ion-header-bar class="bar-positive"> <div class="buttons"> <button class="button button-icon icon ion-close-round" ng-click="closeModal()"></button> <!--go back one month --> <h1 class="title header-text"> سلة المشتريات</h1> <button class="button button-icon" ng-click="data.showDelete = !data.showDelete; data.showReorder = false">تعديل </button> </div> </ion-header-bar> <ion-content> <ion-list show-delete="data.showDelete" canSwipeItems="true"> <ion-item class="item-icon-left item-icon-right" ng-repeat="item in currentCart" item="item"> <p style="float:right"> {{item.title}} </p> <p style="float:left;margin-right:5px">{{currency}}</p> <p style="float:left"> {{item.custom_meta._wpsc_price}} </p> <ion-delete-button class="ion-minus-circled" ng-click="deleteCart(item)"> </ion-delete-button> </ion-item> <ion-item class="item-icon-left item-icon-right" item="item"> <p style="float:left;margin-right:5px">{{currency}}</p> <p style="float:right;font-size:18px">الاجمالي</p> <p style="float:left"> {{total.value}} </p> <i class="icon ion-cash"></i> </ion-item> <ion-item class="item-icon-left item-icon-right" item="item"> <button class="button button-positive" ng-click="go()" style="float:right">شراء</button> </ion-item> </ion-list> </ion-content> </div></script>')}]);