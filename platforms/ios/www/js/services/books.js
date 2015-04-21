angular.module('starter')
        .service('books', function($rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {



            this.get = function() {
                //get the type from here ..
                var type = $stateParams.type;
		var up = type != $rootScope.bookType;
                $rootScope.bookType = type;
		if(!$rootScope.books || up){
                model.get(type).success(function(a) {
                    $ionicLoading.hide();
                    $rootScope.books = a;
                    console.log(a);
                })
		}

            };

            //maybe this will be moved to model
            this.openPDF = function(name) {

                $rootScope.book = model.search("id", id, $rootScope.lists);
                
            }

            

        });
