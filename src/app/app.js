angular.module('boilerplate-app', [
    'ionic',
    'ngCordova',
    'templates-app',
    'templates-common',
    'common',
    'home',
    'intro',
    'store'
])

    .run(function ($ionicPlatform, $cordovaSplashscreen) {
    })

    .config(['$urlRouterProvider', '$locationProvider','mainModelProvider', function ($urlRouterProvider, $locationProvider, mainModelProvider) {
        //$locationProvider.html5Mode(true);
        mainModelProvider.host("http://galamr.com/zahrahControl/wp-json/zahra/");
        $urlRouterProvider.otherwise("/home");
    }])

    .controller('AppController', function ($rootScope, $scope, $ionicLoading, $ionicPlatform) {

        /**        $ionicLoading.show({template:"loading ..."});

         $ionicPlatform.ready(function(){

            $rootScope.ipad  = ionic.Platform.isIPad();

            $ionicLoading.hide();

        });
         **/
    });


