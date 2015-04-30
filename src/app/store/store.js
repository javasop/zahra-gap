'use strict';
angular.module('store', ['store.service', 'store.product', 'store.buy', 'store.checkout'])


  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('products', {
      url: '/store/:type',
      templateUrl: 'app/store/store.html',
      controller: 'storeController'
    });
  }])

/**
 * And of course we define a controller for our route.
 */
  .controller('storeController', function ($scope, $rootScope, storeData, $stateParams, $location, $ionicPopup) {

    $scope.go = function (id) {
      console.log('store/' + $stateParams.type + '/' + id);
      $location.path('store/' + $stateParams.type + '/' + id);
    }
    storeData.get();

  })

  .filter('range', function () {
    return function (input, min, max) {
      min = parseInt(min); //Make string input int
      max = parseInt(max);
      for (var i = min; i < max; i++)
        input.push(i);
      return input;
    };
  });


//add the model here

