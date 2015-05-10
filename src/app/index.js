'use strict';
angular.module('zahra', [
  'ionic',
  'ngCordova',
  'home',
  'store',
  'angularSpinner',
  'angular-cardflow',
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


  .run(function ($ionicPlatform, $cordovaSplashscreen) {

    $ionicPlatform.ready(function(){
      //var isIPad = $ionicPlatform.isIPad();
      //console.log(isIPad);
    })

  })

  .constant('host', 'http://galamr.com/zahrahControl/wp-json/zahra/')

  .config(['$urlRouterProvider', function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

  }]);

//.controller('AppController',function($scope,$ionicHistory){
//
//
//})




