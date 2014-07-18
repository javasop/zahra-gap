angular.module('starter')
        .service('stores', function($resource, $rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup) {


            this.products = "hello";

            function update() {

                //loop through the items and update the total?

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

            $rootScope.$watchCollection("cart.main", function(n, d) {

                update();

            })
            $rootScope.$watchCollection("cart.lamsa", function(n, d) {

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
                
                $rootScope.cart[ser].push(item);
                
                //check if the item is in the cart already .. 
                
                var alertPopup = $ionicPopup.alert({
                    title: 'تم اضافة المنتج',
                    template: 'المنتج موجود حاليا في سلة المشتريات'
                });
                alertPopup.then(function(res) {
                    console.log('Thank you for not eating my delicious ice cream cone');
                });
                return $rootScope.cart[ser]



            }


        });



