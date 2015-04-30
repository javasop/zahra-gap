'use strict';
angular.module('store.buy', [])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('buy', {
      url: '/buy',
      templateUrl: 'app/store/buy/buy.html',
      controller: 'BuyCtrl'
    });
  }])

/**
 * And of course we define a controller for our route.
 */
  .controller('BuyCtrl', function ($scope, $rootScope, $stateParams, $location, storeData) {

    $scope.co = {cc: ""};

    //data has to be prepared
    $rootScope.data = {'products': $rootScope.currentCart};

    $scope.go = function () {
      $location.path('/checkout');
    }

    $scope.checkCoupon = function () {
      //send request
      storeData.checkCoupon($scope.co.cc);

    }

  })

