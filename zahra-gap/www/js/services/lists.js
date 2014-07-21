angular.module('starter')
        .service('lists', function($rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {


            var mapObj = {
                "hospital_id": "id",
                "article_id": "id",
                "hospital_name": "name",
                "post_title": "name"
            }

            $rootScope.shared = {question:""};


            this.get = function(id) {

                //get the type from here ..
                var type = $stateParams.type;
                $rootScope.listType = type;
                model.get(type).success(function(a) {
                    $ionicLoading.hide();
                    $rootScope.lists = a;
                    map(a);


                })

            };

            this.getDetail = function(id) {

                $rootScope.list = model.search("id", id, $rootScope.lists);

            }

            $rootScope.postQ = function() {

                //if q is empty pop a modal
                if ($rootScope.question == "") {
                    var alertPopup = $ionicPopup.alert({
                        title: '<p class="alert">الرجاء ادخال السؤال</p>'
                    });
                }
                else{
                  
                    //call the service to post the question ...
                  
                    
                }


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

            }



        });








