angular.module('starter')
        .service('forms', function($rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {


            //TODO: this could be used to get the forms ...
            this.get = function(type) {
                //get the type from here ..
                model.get("forms", {type: type}).success(function(a) {
                    $ionicLoading.hide();
                    $rootScope.forms = a;
                    console.log(a);
                })

            };
            this.post = function(type) {

                //order is the form info
                //send the request in two parts, one is for the forms, the other with the products
                //iterate throught all the forms and extract only the value
                
                var data = $rootScope.data;
                
                for (f in $rootScope.forms) {
                    data[$rootScope.forms[f].element_name] = $rootScope.forms[f].value;

                }

                if (this.validate(data)) {

                    var temp = '... الطلب قيد التنفيذ'



                    console.log(data);

                    
                     model.post(type,data, temp).success(function(a) {
                     
                     console.log(a);
                     
                     });
                     

                }


            }

            this.validate = function(form) {


                var empty = '<p class="alert">الرجاء تعبئة جميع البيانات</p>'
                var email = '<p class="alert">البريد الالكتروني غير صحيح</p>'

                var valid = model.formEmpty(form);
                if (!valid) {
                    if (form["email"] == undefined) {

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
