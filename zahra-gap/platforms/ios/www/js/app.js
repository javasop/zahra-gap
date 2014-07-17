// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','myControllers','myServices','ngRoute'])

        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function($routeProvider) {

            $routeProvider
                    .when('/', {
                        //this will display the beginnings of each section according to a json 
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/intro/:type', {
                        //this will display the beginnings of each section according to a json 
                        templateUrl: 'views/section-intro.html',
                        controller: 'IntroCtrl'
                    })
                    .when('/about', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });

        })
