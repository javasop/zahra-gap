'use strict';
angular.module('zahra', [
  'ionic',
  'ngCordova',
  'home',
  'store',
  'angularSpinner',
  'zahra.coverflow',
  'zahra.calendar',
  'uiGmapgoogle-maps',
  'zahra.event',
  'zahra.forms',
  'hospital',
  'intro',
  'article',
  'story',
  'contact',
  'book',
  'bank',
  'question',
  'member',
  'external'
])


  //.run(function ($ionicPlatform, $cordovaSplashscreen) {
  //
  //})

  .constant('host', 'http://galamr.com/zahrahControl/wp-json/zahra/')

  .config(['$urlRouterProvider', function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

  }])

.controller('AppController',function($scope,$rootScope,$ionicHistory){

    $rootScope.ipad = ionic.Platform.isIPad();

    console.log($rootScope.ipad);

    ionic.Platform.ready(function(){
      // will execute when device is ready, or immediately if the device is already ready.
      $rootScope.ipad = ionic.Platform.isIPad();

    });


});




