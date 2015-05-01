'use strict';
angular.module('hospital', [
  'ui.router',
  'hospital.service',
  'hospital.detail'
])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('hospital', {
      url: '/hospital',
      templateUrl: 'app/hospital/hospital.html',
      controller: 'HospitalCtrl'
    });
  }])

  .controller('HospitalCtrl', function ($scope, $rootScope, $stateParams, $location, hospitalData, $ionicPopup) {

    hospitalData.all();

  })
