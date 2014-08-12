angular.module('starter')
        .service('stores', function($resource, $rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {

	

            this.products = "hello";

            this.store = "";


            this.go = function() {

                if ($rootScope.currentCart.length > 0) {
                    $rootScope.modal.hide();
                    $location.path('/buy');
                }
                else {

                    var alertPopup = $ionicPopup.alert({
                        title: '<p class="alert">سلة المشتريات فارغة</p>',
                        template: 'الرجاء اضافة منتج لاتمام عملية الشراء'
                    });

                }

            }

            function update() {
                //loop through the items and update the total?
                if ($rootScope.currentCart != undefined) {
                    $rootScope.total = {discounted: false, value: 0};
                    $rootScope.currentCart.forEach(function(el) {
                        var price = parseInt(el.custom_meta._wpsc_price);
                        $rootScope.total.value = $rootScope.total.value + (price * el.quantity);
                    })
                }

            }

           window.checkStore = this.checkStore = function() {

                var ser;
                if ($stateParams.type == "main") {
                    ser = "store"
                }
                else {

                    ser = "lamsa"
                }

                return ser;

            }

            //store in cart all the values
            $rootScope.cart = {
                "store": [],
                "lamsa": []

            }

            $rootScope.currency = "ريال"

            $rootScope.$watch("store", function(n, d) {
		up = true;                
            })
            $rootScope.$watch("currentCart", function(n, d) {
                update();
            }, true)



            this.get = function(id) {

                var ser = checkStore();
		var up;
		if(ser != this.store){
		 up = true;
		}
		else{
		up = false;
		}
		this.store = ser;
		
		if(!$rootScope.products || up){
                model.get(ser).success(function(a) {
                        $ionicLoading.hide();
                        $rootScope.products = a;
                        $rootScope.currentCart = $rootScope.cart[ser];
                        if (id) {
                            this.getStoreDetail(id);
                        }
                    })
		}

            };
            
            window.getStoreDetail = this.getStoreDetail = function(id) {

                if ($rootScope.products) {
                    $rootScope.product = model.search("ID", id, $rootScope.products);
                }
                else {
                    this.get(id);
                }

            }
            this.addCart = function(item) {

                //this will have both the item and the value
                var ser = checkStore();
                item["quantity"] = 1;
                //check if the item is in the cart already ..
                if (model.search("ID", item.ID, $rootScope.currentCart)) {
                    var alertPopup = $ionicPopup.alert({
                        title: '<p class="alert">تم اضافة المنتج مسبقا  </p>',
                        template: 'المنتج موجود حاليا في سلة المشتريات'
                    });


                }

                else {
                    $rootScope.cart[ser].push(item);
                    var alertPopup = $ionicPopup.alert({
                        title: '<p class="success">تم اضافة المنتج</p>',
                        template: 'المنتج موجود حاليا في سلة المشتريات'
                    });

                }

                return $rootScope.cart[ser]



            }
            this.deleteCart = function(item) {

                //this will have both the item and the value
                var ser = checkStore();

                //delete the item from current cart
                var index = $rootScope.currentCart.indexOf(item);

                $rootScope.currentCart.splice(0, 1);



            }
            this.checkCoupon = function(number) {

                //call the service to check the coupon

                //prepare the coupon param
                var cop = {cc: number}
                if ($rootScope.total.discounted) {
                    //if the total is already discounted
                    var alertPopup = $ionicPopup.alert({
                        title: '<p class="alert">قيمة الخصم مضافة سابقا</p>'
                    });

                }
                else {
                    var temp = '... جاري التحقق من الكوبون';
                    model.get("verify_coupon", cop, temp).success(function(a) {
                        $ionicLoading.hide();
                        if (a == "No code") {
                            var alertPopup = $ionicPopup.alert({
                                title: '<p class="alert">لم يتم العثور علئ الكوبون</p>',
                                template: 'الرجاء التأكد من الرقم '
                            });

                        }
                        else {

                            var tm = "%" + parseInt(a.value) + " " + 'قيمة الخصم ';
                            var alertPopup = $ionicPopup.alert({
                                title: '<p class="success"> تم العثور علئ الكوبون</p>',
                                template: tm
                            });

                            //subtract the percentage of the coupon from the total?
                            $rootScope.total.value = $rootScope.total.value - (parseInt(a.value) / 100) * $rootScope.total.value;
                            $rootScope.total.discounted = true;
                        }

                    });
                }


            }




        });



