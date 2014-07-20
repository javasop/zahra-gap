angular.module('starter')
        .directive('zforms', function($resource, $rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {

        
    return {
      restrict: 'E',
      template:"<input ng-model='forms.item'></p>",
      link: function(scope, element, attrs) {
       console.log("scope is: ",scope);
       console.log("elemenet is: ",element);
       console.log("attrs is: ",attrs);
       scope.forms = {};
       submitForm()
       
      }
    }


        });



