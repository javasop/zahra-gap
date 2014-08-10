angular.module('starter')
        .service('forms', function($rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {


            //TODO: this could be used to get the forms ...
            this.get = function(type) {
                //get the type from here ..
                model.get("forms",{type:type}).success(function(a) {
                    $ionicLoading.hide();
                    $rootScope.forms = a;
                    console.log(a);
                })

            };
	    this.post = function(data){
		    var type = $stateParams.type;
		    model.post(type,date).success(function(a){

			    //the return
			    console.log(a);

		    });
	    }
            

        });
