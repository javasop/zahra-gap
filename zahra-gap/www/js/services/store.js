angular.module('starter')
        .service('stores', function($resource, $rootScope, $http, $ionicLoading, model, $stateParams) {


            this.products = "hello";
    
            function update(){
                
                //loop through the items and update the total?
                
            }
            
            function checkStore(){
                
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
                
                "store":[{}] ,
                
                "lamsa":[{}]
                
            }
            
            $rootScope.$watchCollection("cart.main",function(n,d){
                
                update();
                
            })
            $rootScope.$watchCollection("cart.lamsa",function(n,d){
                
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
                    }

                })

            };
            this.addCart = function(item){
                
                //this will have both the item and the value
                var ser = checkStore();
                $rootScope.cart[ser].push(item);
                
                
            }


        });



