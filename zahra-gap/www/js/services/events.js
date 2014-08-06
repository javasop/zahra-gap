angular.module('starter')
        .service('events', function($rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {


            this.products = "hello";

            function formatDates(obj) {

                var d;

                $rootScope.events.forEach(function(el) {

                    var mark = {date: null, name: null, id: null};
                    d = new Date(el.event_start_date);


                    //it's not know why it's showing the previous day, I am assuming it's parsing
                    d.setDate(d.getDate() + 1)
                    mark.date = d;
                    mark.name = el.event_name;
                    mark.id = el.event_id;
                    obj.push(mark);


                })


            }

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



            this.get = function(id) {
		if(!$rootScope.events){
                model.get("events").success(function(a) {
                    $ionicLoading.hide();
                    $rootScope.events = a;
                    console.log(a);
                    $rootScope.marks = [];
                    formatDates($rootScope.marks)
                    if (id) {
                        getEventDetail(id);
                    }

                })
		}

            };

            window.getEventDetail = this.getEventDetail = function(id) {

                if ($rootScope.events) {
                    $rootScope.event = model.search("ID", id, $rootScope.events);
                }
                else {
                    this.get(id);
                }


            }

            this.getTickets = function() {

                //get tickets for the current event              
                model.get("tickets", {event_id: $rootScope.event.event_id}).success(function(a) {
                    $ionicLoading.hide();
                    $rootScope.tickets = a;
                })

            }



            this.submitOrder = function(ord) {

                //order is the form info
                //send the request in two parts, one is for the forms, the other with the products
                var temp = '... الطلب قيد التنفيذ'

                var arrod = [];

                for (el in ord) {
                    arrod.push(ord[el])
                }

                console.log($rootScope.currentCart);


                model.get("order", {order: ord, product: $rootScope.currentCart}, temp).success(function(a) {

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





