angular.module('starter')
        .service('events', function($rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {


            this.products = "hello";

            function formatDates(obj) {

                var d;

                $rootScope.events.forEach(function(el) {

                    var mark = {date: null, name: null, id: null};
                    d = new Date(el.custom_meta._event_start_date);


                    //it's not know why it's showing the previous day, I am assuming it's parsing
                    d.setDate(d.getDate() + 1)
                    mark.date = d;
                    mark.name = el.title;
                    mark.id = el.ID;
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
                       this.getEventDetail(id);
                    }

                })
		}

            };

            window.getEventDetail = this.getEventDetail = function(id) {

		 console.log($rootScope.events);
                if ($rootScope.events) {
                    $rootScope.event = model.search("ID", id, $rootScope.events);
		    console.log($rootScope.event);
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







        });





