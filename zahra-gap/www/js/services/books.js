angular.module('starter')
        .service('books', function($rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {



            this.get = function() {
                
                //get the type from here ..
                var type = $stateParams.type;
                $rootScope.bookType = type;
                model.get(type).success(function(a) {
                    $ionicLoading.hide();
                    $rootScope.books = a;
                    console.log(a);
//                    map(a);


                })

            };

            //maybe this will be moved to model
            this.openPDF = function(name) {

                $rootScope.book = model.search("id", id, $rootScope.lists);
                
            }

            //mapping the object so that all lists will share a common attribute
            function map(obj) {


                obj.forEach(function(el) {
                    for (key in el) {
                        var k = mapObj[key]
                        if (k) {

                            el[k] = el[key];

                        }
                    }

                })

                console.log($rootScope.lists);

            }



        });











