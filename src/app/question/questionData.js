'use strict';
angular.module('question.service', [])

  .service('questionData', function ($rootScope, $http, Model, $stateParams, usSpinnerService,$ionicPopup) {


    this.all = function () {

      //get the type from here ..
      var type = 'questions';


      //update when there's no list or it's a different list
      if (!$rootScope.questions) {
        Model.get(type).success(function (a) {
          usSpinnerService.stop('spinner-1');
          $rootScope.questions = a;
        })
      }

    };

    this.find = function (id) {
      $rootScope.question = Model.search('ID', id, $rootScope.questions);
    };

    this.postQ = function(question) {

      //if q is empty pop a modal
      if (!question.title || question.title == "") {
        var alertPopup = $ionicPopup.alert({
          title: '<p class="alert">الرجاء ادخال السؤال</p>'
        });
      }
      else{
        //call the service to post the question ...
        Model.post('questions',question).success(function(data){

          question.title = ""
          var alertPopup = $ionicPopup.alert({
            title: '<p class="success">'
             + "تم استلام سؤالك. سيظهر الجواب حالما يتم الرد"
             +'</p>'
          });

        })
      }
    }


  });



