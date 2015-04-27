angular.module('forms',[])
        .service('formsData', function($rootScope, $http, Model, $stateParams, $ionicPopup, $location,usSpinnerService) {


            //TODO: this could be used to get the forms ...
            this.get = function(type) {
                //get the type from here ..
                Model.get("forms", {type: type}).success(function(a) {
                  usSpinnerService.stop('spinner-1');
                    $rootScope.forms = a;
                })

            };
            this.post = function(type) {

                var data = $rootScope.data;

                for (f in $rootScope.forms) {
                    data[$rootScope.forms[f]['element_name']] = $rootScope.forms[f]['value'];

                }

                if (this.validate(data)) {

                    var temp = '... الطلب قيد التنفيذ'

                     Model.post(type,data, temp).success(function(a) {

                       usSpinnerService.stop('spinner-1');
                       console.log(a);

                     });


                }


            }

            this.validate = function(form) {


                var empty = '<p class="alert">الرجاء تعبئة جميع البيانات</p>'
                var email = '<p class="alert">البريد الالكتروني غير صحيح</p>'

                var valid = Model.formEmpty(form);
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
