'use strict';

angular.module('store.checkout', ['forms'])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('checkout', {
      url: '/checkout',
      templateUrl: 'app/store/checkout/checkout.html',
      controller: 'CheckoutCtrl'
    });
  }])

  .controller('CheckoutCtrl', function ($scope, $rootScope, $stateParams, $location, storeData, formsData) {

        formsData.get("store");

        $scope.submit = function () {
            //send request
            formsData.post("store");

        }

    });
