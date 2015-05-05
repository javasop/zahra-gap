'use strict';
angular.module('event.booking', [
  'ui.router'
])

  .config(function config($stateProvider) {
    $stateProvider.state('booking', {
      url: '/booking',
      templateUrl: 'app/event/booking/booking.html',
      controller: 'BookingCtrl'
    });
  })

  .controller('BookingCtrl', function ($scope, $rootScope, $stateParams, $location, eventData, $ionicPopup, formsData) {


    //got all the forms ...
    formsData.get('events');

    $scope.submit = function () {
      formsData.post('events');
    }

  });

