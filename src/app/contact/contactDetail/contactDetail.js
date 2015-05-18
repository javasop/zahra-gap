'use strict';
angular.module('contact.detail', [])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('contactDetail', {
      url: '/contact/:region',
      templateUrl: 'app/contact/contactDetail/contactDetail.html',
      controller: 'contactDetailController'
    });
  }])

  .controller('contactDetailController', function ($scope, $rootScope, $stateParams) {

    //display the map
    //contactData.find($stateParams.region);
    $scope.region = $stateParams.region;

  });

