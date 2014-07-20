angular.module('starter')
        .service('events', function($rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {


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
                    $rootScope.total = {discounted: false, value: 0};
                    $rootScope.currentCart.forEach(function(el) {
                        $rootScope.total.value = $rootScope.total.value + (parseInt(el.product_price)*el.quantity);
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
            $rootScope.$watch("currentCart", function(n, d) {
                update();
            },true)

            

            this.get = function(id) {

                model.get("events").success(function(a) {
                    $ionicLoading.hide();
                    $rootScope.events = a;
                    console.log(a);
                    $rootScope.marks = [];
                    formatDates($rootScope.marks)
                    if (id) {
                        $rootScope.event = model.search("event_id", id, $rootScope.events);
                        console.log($rootScope.event);
                    }

                })

            };
            
            function formatDates (obj){
                var d;

                $rootScope.events.forEach(function(el){
                    
                    var mark = {date:null,name:null,id:null};
                    d = new Date(el.event_start_date);
                    

                    //it's not know why it's showing the previous day, I am assuming it's parsing
                    d.setDate(d.getDate()+1)
                    mark.date = d;
                    mark.name = el.event_name;
                    mark.id = el.event_id;
                    obj.push(mark);
                    
  
                })
                
                
            }
            this.addCart = function(item) {

                //this will have both the item and the value
                var ser = checkStore();
                item["quantity"] = 1;
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
            this.submitOrder = function(ord) {

                //order is the form info
                //send the request in two parts, one is for the forms, the other with the products
                var temp ='... الطلب قيد التنفيذ' 
                
                var arrod = [];
                
                for(el in ord){
                    arrod.push(ord[el])
                }
                
                console.log($rootScope.currentCart);

     
                model.get("order",{order:ord,product:$rootScope.currentCart},temp).success(function(a){
                    
                    console.log(a);
                    
                });


            }

            this.validate = function(obj) {

                var empty = '<p class="alert">الرجاء تعبئة جميع البيانات</p>'
                var email = '<p class="alert">البريد الالكتروني غير صحيح</p>'

                var valid = model.formEmpty(obj);
                if (!valid) {
                    if (obj["email"] == undefined) {

                        var alertPopup = $ionicPopup.alert({
                            title: empty + email
                        });

                    }
                    else {

                        var alertPopup = $ionicPopup.alert({
                            title: empty
                        });


                    }
                    return false;

                }
                
                return true;

            }


        });





