'use strict';
angular.module('home', [])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'homeController'
    });
  }])
  .controller('homeController', function ($rootScope) {

    $rootScope.ipad = false;

    //mapping here?

  });

