'use strict';
angular.module('zahra.forms', [])
  .service('formsData', function ($rootScope, $http, Model, $stateParams, $ionicPopup, $location, usSpinnerService,$state) {


    this.get = function (type) {
      //get the type from here ..
      Model.get('forms', {type: type}).success(function (a) {
        usSpinnerService.stop('spinner-1');
        $rootScope.forms = a;
      })

    };
    this.post = function (type) {

      var data = $rootScope.data;

      usSpinnerService.spin('spinner-1');

      var valid = this.validate($rootScope.forms);

      if(valid) {

        for (var f in $rootScope.forms) {
          data[$rootScope.forms[f]['element_name']] = $rootScope.forms[f]['value'];
        }

        Model.post(type, data).success(function (a) {

          var message =
          "تم ارسال الطلب";

          var alertPopup = $ionicPopup.alert({
            title:"<p class='success'>"+message+"</p>"
          });

          usSpinnerService.stop('spinner-1');
          $state.go('home');

        });
      }

    };

    this.validate = function (form) {

      var emptyField = this.formEmpty(form);

      if (emptyField) {
        var message =
          " الرجاء ادخال " + emptyField + " بشكل صحيح ";

          var alertPopup = $ionicPopup.alert({
            title:"<p class='alert'>"+message+"</p>"
          });
        return false;
      }
      else{
        return true;
      }

    };
    this.formEmpty = function (obj) {
      var elementName;
      obj.forEach(function(element){
        if (element.value == "" || element.value == undefined) {
          elementName = element.ar;
        }
      });
      return elementName;
    };


  });
