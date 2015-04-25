angular.module('myControllers', [])

        .controller('MainCtrl', function($rootScope,$scope, model, $http, $ionicLoading,$ionicPlatform) {

            // Depending on the device, a few examples are:
//   - "Android"
//   - "BlackBerry"
//   - "iOS"
//   - "webOS"
//   - "WinCE"
//   - "Tizen"
// checking the device platform
//var devicePlatform = device.platform;

$scope.menu = ["education","gap1","hospitals","store1",'events','donations','amal','gap2','lamsa','about','members','contact','app']

$rootScope.$on('$stateChangeSuccess',function(){


});

$ionicLoading.show({template:"loading ..."});

$ionicPlatform.ready(function(){

$rootScope.ipad  = ionic.Platform.isIPad();

$ionicLoading.hide();

});

//$scope.dev  = ionic.Platform.device();




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
                {"amal": {"logo": "amal_logo", "text": "amal_text", buttons: [{"image": "amal_button_1", "to": "books/brochures"}, {"image": "amal_button_2", "to": "list/stories"}, {"image": "amal_button_3", "to": "list/questions"}]}},
                {"donations": {"logo": "donations_logo", "text": "donations_text", buttons: [{"image": "donations_button_1", "to": "banks"}, {"image": "donations_button_2", "to": "external/text"}]}},
                {"education": {"logo": "education_logo", "text": "education_text", buttons: [{"image": "education_button_1", "to": "books/booklets"}, {"image": "education_button_2", "to": "list/articles"}]}},
                {"hospitals": {"logo": "hospitals_logo", "text": "hospitals_text", buttons: [{"image": "hospitals_button_1", "to": "list/hospitals"}]}},
                {"lamsa": {"logo": "lamsa_logo", "text": "lamsa_text", buttons: [{"image": "lamsa_button_1", "to": "store/lamsa"}]}},
                {"members": {"logo": "members_logo", "text": "members_text_ipad", buttons: [{"image": "members_button_1", "to": "form/member"}]}}

            ];

            var type = $stateParams.type;
            $scope.type = type;
            search(type)
            console.log($scope.intro);

        })
        .controller('FormCtrl', function($scope, $rootScope, $stateParams, $location, forms, $ionicPopup) {

		var type = $stateParams.type;
		forms.get(type);
                
                //submit the form
                $scope.submit = function(){
                    
                    
                }
        })


        .controller('MemberCtrl', function($scope, model, $stateParams) {
           //all the member types ... 
            $scope.types =["type_1","type_2","type_3","type_4","type_5","type_6"];


        })
        /**
         * todo: merge stores in one service
         * param {type} $scope
         * param {type} model
         * param {type} $rootScope
         * param {type} $stateParams
         * param {type} $location
         * returns {undefined}
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

	    $scope.coverflow = {};


            stores.getStoreDetail($stateParams.product_id);

            $scope.images = [
                '../img/about.png',
                '../img/button_ask.png'
            ]

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
    
            //data has to be prepared
            $rootScope.data = {'products':$rootScope.currentCart};


            $scope.checkCoupon = function() {
                //send request
                stores.checkCoupon($scope.co.cc);

            }

        })
	 .controller('CheckoutCtrl', function($scope, $rootScope, $stateParams, $location, stores,forms) {

	    forms.get("store");

            $scope.submit = function() {
                //send request
	       stores.submitOrder();	

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


            events.getEventDetail($stateParams.id);



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
                        latitude: $rootScope.event.location[0].location_latitude,
                        longitude: $rootScope.event.location[0].location_longitude
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
//            [{"ticket_id": "28", "ticket_name": "Standard Ticket", "ticket_spaces": "10", "booked_spaces": "10", "remaining_spaces": "-10", "ticket_price": "500.00"}]

            //events.getTickets();

            $scope.checked = [];

            $scope.current;
            
            $rootScope.data = {"event_id":$rootScope.event.ID,"ticket_spaces":1};

            //check one box only
            $scope.change = function(index) {

		$rootScope.selectedTicket = index;
                
                $rootScope.data['ticket_id'] = $rootScope.event.tickets[index].ticket_id;
                console.log($rootScope.data['ticket_id']);
                
                $scope.checked.forEach(function(el) {
                    //if($scope.checked.indexOf(true))
                    i = $scope.checked.indexOf(el);

                    if (i != $scope.current) {
                        $scope.checked[i] = false;
                    }
		    

                });

                //check the availabilit of the tickets and change the nav button accordingly
                var remaining = parseInt($rootScope.event.tickets[index].ticket_spaces);
                if (!remaining || remaining > 0) {
                    $scope.nav_text = "حجز";
                }
                else {

                    $scope.nav_text = "حجز انتظار";

                }

            }



        })
        .controller('BookingCtrl', function($scope, $rootScope, $stateParams, $location, events, $ionicPopup,forms) {


	    //got all the forms ...
	    forms.get("events");

	    $scope.submit = function(){

	       events.book();	
	    }




        })
        .controller('ListCtrl', function($scope, $rootScope, $stateParams, $location, lists, $ionicPopup) {
            //request the list of the stories according to typ
            lists.get();
        })
        .controller('ListDetailCtrl', function($scope, $rootScope, $stateParams, $location, lists, $ionicPopup) {

            //request the list of the stories
            lists.getDetail($stateParams.id)

        })
        .controller('HospitalCtrl', function($scope, $rootScope, $stateParams, $location, lists, $ionicPopup) {
            //display the map
            lists.getDetail($stateParams.id)


            $scope.map = {
                center: {
                    latitude: 24.6757,
                    longitude: 46.6701
                },
                zoom: 8,
                control: {},
                events: {
                }
            };

            $scope.coords = {};


            $scope.$watch('list', function(n, d) {

                //when event is updated
                if (n != undefined) {
                    $scope.coords = {
                        latitude: $rootScope.list.custom_meta._pronamic_google_maps_latitude[0],
                        longitude: $rootScope.list.custom_meta._pronamic_google_maps_longitude[0]
                    }
                    $scope.map.control.refresh();




                }


            })





        })
        .controller('BookCtrl', function($scope, $rootScope, $stateParams, $location, books, $ionicPopup) {

            books.get();
//open the app
	$scope.open = function(link){
	var rf = window.open(link, '_blank');

	}
        })
        .controller('BankCtrl', function($scope, $rootScope, $stateParams, $location, $ionicPopup) {

            //prepare a local json with all the banks ...
            $scope.folder = "img/banks/"
            $scope.banks = [
                {
                    "image": "riyadh_bank_ipad",
                    "iban": "SA932 0000 0021 2044 8869 940",
                },
                {
                    "image": "bilad_ipad",
                    "iban": "SA04 1500 0999 3000 0110 0004"
                },
                {
                    "image": "rajhi_ipad",
                    "iban": "SA51 8000 0114 6080 1000 3039"
                },
                {
                    "image": "samba_ipad",
                    "iban": "SA57 4000 0000 0099 0480 0715"
                },
                {
                    "image": "inma_ipad",
                    "iban": "SA08 0500 0068 2005 2657 3000"
                },
                {
                    "image": "saudi_ipad",
                    "iban": "SA316 5000 00010 1730 976 001"
                },
                {
                    "image": "holland_ipad",
                    "iban": "SA505 0000 0000 1035 872 9008"
                },
                {
                    "image": "french_ipad",
                    "iban": "SA565 50000 00097 1333 001 16"
                },
                {
                    "image": "jazzera_ipad",
                    "iban": "SA686 00000 00030 4644 640 01"

                }]
        })
        .controller('ContactCtrl', function($scope, $rootScope, $stateParams, $location, books, $ionicPopup) {


            //show the different contact info
            $scope.show = function() {

            }

            $scope.folder = "img/sections/contact/"
            $scope.social = ["button_tweet", 'button_tube', 'button_fb', 'button_inst', 'button_home']

        })
       
  .controller('ExternalCtrl', function($scope, $rootScope, $stateParams, $location, $ionicPopup) {

//check the param and open the file accordingly ...
var links = {
"video":"https://www.youtube.com/watch?v=-p3TFqIFpP4",
"text":"sms:3490322111?body=test"
}

var type = links[$stateParams.type];
console.log(type);
if(type){

	var rf = window.open(type, '_self', 'location=yes');
}

        })
       
