// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'myControllers', 'myServices', 'ngRoute'])

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
        .config(function($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

                    //login page leading --> accounts
                    .state('main', {
                        url: "/",
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })

                    .state('intro', {
                        url: "/intro/:type",
                        templateUrl: 'views/section-intro.html',
                        controller: 'IntroCtrl'
                    })

                    // setup an abstract state for the tabs directive
                    .state('extrenal', {
                        url: "/external/:type",
                        templateUrl: 'views/section-intro.html',
                        controller: 'IntroCtrl'
                    })

                    // Each tab has its own nav history stack:

                    .state('books', {
                        url: '/books/:type',
                        templateUrl: 'views/section-intro.html',
                        controller: 'IntroCtrl'
                    })

                    .state('list', {
                        url: '/list/:type',
                        templateUrl: 'views/section-intro.html',
                        controller: 'IntroCtrl'
                    })
                    .state('questions', {
                        url: '/list/:type',
                        templateUrl: 'views/section-intro.html',
                        controller: 'IntroCtrl'
                    })
                    .state('banks', {
                        url: '/list/:type',
                        templateUrl: 'views/section-intro.html',
                        controller: 'IntroCtrl'
                    })
                    .state('store', {
                        url: '/store/:type',
                        templateUrl: 'views/section-intro.html',
                        controller: 'IntroCtrl'
                    })
                    .state('form', {
                        url: '/form/:type',
                        templateUrl: 'views/section-intro.html',
                        controller: 'IntroCtrl'
                    })

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/');

        })

