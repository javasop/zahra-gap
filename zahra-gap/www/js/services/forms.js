angular.module('starter')
        .service('forms', function($resource, $rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {


            this.products = "hello";


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
                    $rootScope.total = 0;
                    $rootScope.currentCart.forEach(function(el) {

                        $rootScope.total = $rootScope.total + parseInt(el.product_price);
                    })
                }

            }

            function checkStore() {

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

            $rootScope.$watchCollection("currentCart", function(n, d) {
                update();
            })

            this.get = function(id) {

                var ser = checkStore();
                model.get(ser).success(function(a) {
                    $ionicLoading.hide();
                    $rootScope.products = a;
                    if (id) {
                        var product_id = $stateParams.product_id;
                        $rootScope.product = model.search("product_id", product_id, $rootScope.products);
                        $rootScope.currentCart = $rootScope.cart[ser];
                    }

                })

            };
            this.addCart = function(item) {

                //this will have both the item and the value
                var ser = checkStore();

                //check if the item is in the cart already ..
                if (model.search("product_id", item.product_id, $rootScope.currentCart)) {

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
                    alertPopup.then(function(res) {
                        console.log('Thank you for not eating my delicious ice cream cone');
                    });

                }

                return $rootScope.cart[ser]



            }
            this.deleteCart = function(item) {

                //this will have both the item and the value
                var ser = checkStore();
                
                //delete the item from current cart
                var index = $rootScope.currentCart.indexOf(item);
                
                $rootScope.currentCart.splice(0,1);



            }


        });



