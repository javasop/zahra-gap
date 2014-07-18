angular.module('myControllers', [])

        .controller('MainCtrl', function($rootScope, model, $http, $ionicLoading) {



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

            stores.get($rootScope);
            

        })





        .controller('StoreDetailCtrl', function($scope, stores, $rootScope, $stateParams, $ionicModal) {

             var img_folder = "img/sections/stores/";
             $scope.desc = img_folder+"description_text.png";
             $scope.pricelb = img_folder+"price_text.png";
	     $scope.button_add = img_folder+"button_add.png";
             $scope.button_tweet = img_folder+"button_tweet.png";

            //if($rootScope.products == undefined) request it from server
            stores.get($stateParams.product_id);
            
            
            $scope.addCart = function() {
               $rootScope.currentCart = stores.addCart($rootScope.product);
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
                $scope.sync($scope.item);

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


