'use strict';
angular.module('zahra', [
  'ionic',
  'ngCordova',
  'home',
  'store'
])

  //.run(function ($ionicPlatform, $cordovaSplashscreen) {
  //})

  .config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }])
  .constant('host','http://galamr.com/zahrahControl/wp-json/zahra/');


