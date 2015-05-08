'use strict';
angular.module('info', [])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('info', {
      url: '/info',
      templateUrl: 'app/info/info.html',
      controller: 'infoCtrl'
    })
  }])

  .controller('infoCtrl', function ($scope, Model, $stateParams) {

  });

