var local = "http://localhost:3000/collections/";
var heroku = "http://budgetq.herokuapp.com/collections/";
angular.module('myServices', ['ngResource'])

        /**
         * A simple example service that returns some data.
         */
        .factory('model', function($resource,$rootScope,$http) {
            // Might use a resource here that returns a JSON array
            /**
             * 
             * List Observation and changes
             * 
             */


	    
     

	    //implement watchers here to update the values of the calculations?
	    //
	    function getUrl(){

	    //var url = heroku+"expenses/"+$stateParams.account_id+"?year="+$rootScope.numberYear+"&month="+$rootScope.numberMonth;
	    return url;
		    

	    }


     

            return {

                get: function(month,year) {

			    $ionicLoading.show({
                     template: '...    جاري التحميل' 
    });
		
                    //the state params has the id?
                    var ex;
		    var ur = getUrl();
                    $http.get(ur).success(function(a) {
                        ex = a[0];
			//filter by month
			var fil = ex.exps;
			second = _.find(fil, function(el){ return el.month = $rootScope.numberMonth});
			$rootScope.model.items = second;
		                $rootScope.groups = _.groupBy($rootScope.model.items.expenses, "type");
				$ionicLoading.hide();
			
                    });
                    

                },

                insert: function(item) {
                    //the state params has the id?
                    var ex;
		    var ur = getUrl();
		    var ls = $rootScope.model.items.expenses;
		    ls.push(item);
                    $http.post(ur,item).success(function(a) {
                        ex = a;
                    });
                    return ex;

                },

                edit: function(item) {
                    //the state params has the id?
                    var ex;
		    var ur = getUrl();
		    var ls = $rootScope.model.items.expenses;
		    index = ls.indexOf(item);
                    $http.put(ur,{inserted:item,item_index:index},function(a) {
                        ex = a;
                    });
                    return ex;

                },


                del: function(item) {
                    //the state params has the id?
                    var ex;
		    var ur = getUrl();
		    var ls = $rootScope.model.items.expenses;
		    index = ls.indexOf(item);
		    ls.splice(index,1);
		    ur = ur + "&item_name="+item.name+"&item_value="+item.value;
                    $http({method:'DELETE',url:ur}).success(function(a) {
                        ex = a;
                    });
                    return ex;

                },

		//add a model method to get all the icons ..


		//this will be changed in the future to something like username and pass or fb ... etc
		auth: function(email){
		
                $ionicLoading.show({template: "loggin in ..."});

	    	var authr = $resource(local+"expenses/"+email+"/"+"auth");

                authr.query(function(accounts) {
                    $ionicLoading.hide();
                    //this means the user needs to decide what account to choose from
                    if (accounts.length > 1) {
                        $rootScope.accounts = accounts;
                        $timeout(function() {
                            // anything you want can go here and will safely be run on the next digest.
                            $location.path("/accounts");
                        })
                    }
                    else {
                        $location.path("/tab/dash/"+accounts[0]._id);
                    }
		},
                function(e) {
			
                    $ionicLoading.hide();
		    var alt = $ionicPopup.alert({  title:"Account not found", template:"please contact osamah.net.m@gmail.com to obtain an account"    });
                })

		}
            };
        });
