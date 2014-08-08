// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'myFilters', 'myDirectives', 'myControllers', 'myServices', 'ngRoute', 'akoenig.deckgrid', 'angular-carousel', 'datePicker', 'google-maps'])

/**
        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
console.log("platform ready!");
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
**/
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
                    .state('form', {
			url: '/form/:type',
                        templateUrl: 'views/forms.html',
                        controller: 'FormCtrl'
                    })
 
                    .state('members', {
                        url: "/members",
                        templateUrl: 'views/members.html',
                        controller: 'MemberCtrl'
                    })

                    .state('extrenal', {
                        url: "/external/:type",
                        controller: 'ExternalCtrl'
                    })

                    // Each tab has its own nav history stack:
                    .state('books', {
                        url: '/books/:type',
                        templateUrl: 'views/books.html',
                        controller: 'BookCtrl'
                    })
                    .state('list', {
                        url: '/list/:type',
                        templateUrl: 'views/lists/list.html',
                        controller: 'ListCtrl'
                    })
                    .state('stories', {
                        url: '/stories/:id',
                        templateUrl: 'views/lists/listDetail.html',
                        controller: 'ListDetailCtrl'
                    })
                    .state('articles', {
                        url: '/articles/:id',
                        templateUrl: 'views/lists/listDetail.html',
                        controller: 'ListDetailCtrl'
                    })
                    .state('questionsDetail', {
                        url: '/questions/:id',
                        templateUrl: 'views/lists/listDetail.html',
                        controller: 'ListDetailCtrl'
                    })
                    .state('hospitals', {
                        url: '/hospitals/:id',
                        templateUrl: 'views/hospitals.html',
                        controller: 'HospitalCtrl'
                    })
                    .state('banks', {
                        url: '/banks',
                        templateUrl: 'views/banks.html',
                        controller: 'BankCtrl'
                    })
                    .state('store', {
                        url: '/store/:type',
                        templateUrl: 'views/store/products.html',
                        controller: 'StoreCtrl'
                    })
                    .state('storeDetail', {
                        url: '/store/:type/:product_id',
                        templateUrl: 'views/store/product_detail.html',
                        controller: 'StoreDetailCtrl'
                    })
                    .state('buy', {
                        url: '/buy',
                        templateUrl: 'views/store/buy.html',
                        controller: 'BuyCtrl'
                    })
                   .state('events', {
                        url: '/events',
                        templateUrl: 'views/events/calendar.html',
                        controller: 'EventCtrl'
                    })
                    .state('eventsDetail', {
                        url: '/events/:id',
                        templateUrl: 'views/events/eventsDetail.html',
                        controller: 'EventDetailCtrl'
                    })
                    .state('tickets', {
                        url: '/tickets',
                        templateUrl: 'views/events/tickets.html',
                        controller: 'TicketCtrl'
                    })
                    .state('booking', {
                        url: '/booking',
                        templateUrl: 'views/events/booking.html',
                        controller: 'BookingCtrl'
                    })
                    .state('map', {
                        url: '/map/:type',
                        templateUrl: 'views/section-intro.html',
                        controller: 'IntroCtrl'
                    })
                    .state('contact', {
                        url: '/contact',
                        templateUrl: 'views/contact.html',
                        controller: 'ContactCtrl'
                    })

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/');

        })

