'use strict';
angular.module('zahra', [
  'ionic',
  'ngCordova',
  'home',
  'store',
  'angularSpinner'
])

  //.run(function ($ionicPlatform, $cordovaSplashscreen) {
  //})

  .constant('host','http://galamr.com/zahrahControl/wp-json/zahra/')

  .config(['$urlRouterProvider', function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

  }]);

  //.controller('AppController',function($scope,$ionicHistory){
  //
  //
  //})




