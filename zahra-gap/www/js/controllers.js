angular.module('myControllers', [])

        .controller('MainCtrl', function($rootScope, model, $http, $ionicLoading) {

            // Depending on the device, a few examples are:
//   - "Android"
//   - "BlackBerry"
//   - "iOS"
//   - "webOS"
//   - "WinCE"
//   - "Tizen"
// checking the device platform
//var devicePlatform = device.platform;



        })

        .controller('IntroCtrl', function($scope, model, $stateParams) {

            //we will get the type from the url
            //there's a json with all intros and buttons that
            //renders when the view is loaded
            function search(type) {

                intro.forEach(function(el) {
                    if (el[type] != undefined)
                        $scope.intro = el[type];

                });
                ;

            }

            var intro = [
                {"about": {"logo": "about_logo", "text": "about_text", buttons: [{"image": "about_button_1", "to": "external/video"}]}},
                {"amal": {"logo": "amal_logo", "text": "amal_text", buttons: [{"image": "amal_button_1", "to": "books/amal"}, {"image": "amal_button_2", "to": "list/stories"}, {"image": "amal_button_3", "to": "questions"}]}},
                {"donations": {"logo": "donations_logo", "text": "donations_text", buttons: [{"image": "donations_button_1", "to": "banks"}, {"image": "donations_button_2", "to": "external/text"}]}},
                {"education": {"logo": "education_logo", "text": "education_text", buttons: [{"image": "education_button_1", "to": "books/education"}, {"image": "education_button_2", "to": "list/articles"}]}},
                {"hospitals": {"logo": "hospitals_logo", "text": "hospitals_text", buttons: [{"image": "hospitals_button_1", "to": "list/hospitals"}]}},
                {"lamsa": {"logo": "lamsa_logo", "text": "lamsa_text", buttons: [{"image": "lamsa_button_1", "to": "store/lamsa"}]}},
                {"members": {"logo": "members_logo", "text": "members_text_ipad", buttons: [{"image": "members_button_1", "to": "form/member"}]}}

            ];

            var type = $stateParams.type;
            $scope.type = type;
            search(type)
            console.log($scope.intro);

        })
        /**
         * todo: merge stores in one service
         * @param {type} $scope
         * @param {type} model
         * @param {type} $rootScope
         * @param {type} $stateParams
         * @param {type} $location
         * @returns {undefined}
         */
        .controller('StoreCtrl', function($scope, $rootScope, $stateParams, $location, stores) {

            $scope.go = function(id) {
                $location.path('store/' + $stateParams.type + '/' + id);
            }

            stores.get();


        })





        .controller('StoreDetailCtrl', function($scope, stores, $rootScope, $stateParams, $location, $ionicModal, $ionicPopup) {

            var img_folder = "img/sections/stores/";
            $scope.desc = img_folder + "description_text.png";
            $scope.pricelb = img_folder + "price_text.png";
            $scope.button_add = img_folder + "button_add.png";
            $scope.button_tweet = img_folder + "button_tweet.png";

            //if($rootScope.products == undefined) request it from server
            stores.get($stateParams.product_id);

            $rootScope.go = stores.go;

            $scope.addCart = function() {
                $rootScope.currentCart = stores.addCart($rootScope.product);
            }

            $rootScope.deleteCart = function(item) {
                stores.deleteCart(item);

            }


            //carts Modal
            $ionicModal.fromTemplateUrl('cart.html', {
                scope: $rootScope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $rootScope.modal = modal;
            });
            $scope.openModal = function() {
                $rootScope.modal.show();
            };
            $rootScope.closeModal = function() {
                $rootScope.modal.hide();
            };
            $rootScope.submit = function() {
                $rootScope.closeModal();
            }
            //Cleanup the modal when we're done with it!
            $rootScope.$on('$destroy', function() {
                $rootScope.modal.remove();
            });
            // Execute action on hide modal
            $rootScope.$on('modal.hidden', function() {
                // Execute action
            });
            // Execute action on remove modal
            $rootScope.$on('modal.removed', function() {
                // Execute action
            });


        })

        .controller('BuyCtrl', function($scope, $rootScope, $stateParams, $location, stores) {

            $scope.co = {cc: ""};



            $scope.checkCoupon = function() {
                //send request
                stores.checkCoupon($scope.co.cc);

            }

        })
        .controller('CheckoutCtrl', function($scope, $rootScope, $stateParams, $location, stores, $ionicPopup) {

            //still using currentCart for the store
            $scope.forms =
                    {
                        "first_name": null,
                        "last_name": null,
                        "address": null,
                        "city": null,
                        "region": null,
                        "district": null,
                        "email": null,
                        "phone": null
                    }



            $scope.submit = function() {

                if (stores.validate($scope.forms)) {

                    //now you can submit the order ...
                    stores.submitOrder($scope.forms);

                }
                ;



            }



        })

        .controller('EventCtrl', function($scope, $rootScope, $stateParams, $location, events) {

            //get the events list
            // look for the days where there's events, call update to add all events to the calendar and mark them?


            events.get();

            $scope.sel = [];
            $scope.clicked = function(day) {
                $scope.sel = [];
                //find the event on marks list
                $rootScope.marks.forEach(function(el) {

                    if (day.getDate() == el.date.getDate()) {
                        $scope.sel.push(el);
                    }

                })

            }


        })

        .controller('EventDetailCtrl', function($scope, $rootScope, $stateParams, $location, events, $ionicModal) {

            //get the events list
            // look for the days where there's events, call update to add all events to the calendar and mark them?
            var img_folder = "img/sections/events/";
            $scope.place = img_folder + "place_text.png";
            $scope.time = img_folder + "time_text.png";
            $scope.price = img_folder + "price_text.png";
            $scope.desc = img_folder + "description_text.png"
            $scope.zoom_text = img_folder + "zoom_text.png";


            events.get($stateParams.id);



            //$scope.marker = [{latitude:$rootScope.event.location_latitude,longitude:$rootScope.event.location_longitude}]

            //console.log($rootScope);

            $scope.map = {
                center: {
                    latitude: 24.6757,
                    longitude: 46.6701
                },
                zoom: 8,
                control: {},
                events: {
                    resize: function() {

                    }
                }
            };

            $scope.searchLocationMarker = {
                coords: {}
            }

            $rootScope.$watch('event', function(n, d) {

                //when event is updated
                if (n != undefined) {
                    $scope.searchLocationMarker.coords = $scope.map.center = {
                        latitude: $rootScope.event.location_latitude,
                        longitude: $rootScope.event.location_longitude
                    }

                }

            })




//google.maps.event.trigger(map, 'resize')
            //map Modal
            $ionicModal.fromTemplateUrl('map.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.mapModal = modal;
            });
            $scope.openModal = function() {
                $scope.mapModal.show();

                $scope.map.control.refresh();

            };
            $scope.closeModal = function() {
                $scope.mapModal.hide();
            };
            $scope.submit = function() {
                $scope.closeModal();
            }
            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.mapModal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                // Execute action
            });

        })
        .controller('TicketCtrl', function($scope, $rootScope, $stateParams, $location, events) {

            //get the events list
            // look for the days where there's events, call update to add all events to the calendar and mark them?
            [{"ticket_id": "28", "ticket_name": "Standard Ticket", "ticket_spaces": "10", "booked_spaces": "10", "remaining_spaces": "-10", "ticket_price": "500.00"}]

            events.getTickets();

            $scope.checked = [];
            
            $scope.current;
            
          

            //check one box only
            $scope.change = function(index) {              
                $scope.checked.forEach(function(el) {
                    //if($scope.checked.indexOf(true))
                    i = $scope.checked.indexOf(el);
                    
                    if (i != $scope.current) {
                        $scope.checked[i] = false;
                    }

                });
                
                //check the availabilit of the tickets and change the nav button accordingly
                var remaining = parseInt($rootScope.tickets[index].remaining_spaces);
                if(!remaining || remaining  > 0){
                    $scope.nav_text = "حجز";
                }
                else{
                    
                    $scope.nav_text = "حجز انتظار";
                    
                }
                
            }





            


        })
