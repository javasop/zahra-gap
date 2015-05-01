'use strict';
angular.module('zahra.event', [
  'ui.router',
  'event.service',
  'datePicker',
  'event.eventDetail',
  'event.ticket',
  'event.booking'
])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('event', {
      url: '/events',
      templateUrl: 'app/event/event.html',
      controller: 'EventCtrl'
    });
  }])


  .controller('EventCtrl', function HomeController($scope, $rootScope, $stateParams, $location, eventData) {

    //get the events list
    // look for the days where there's events, call update to add all events to the calendar and mark them?
    eventData.get();

    $scope.sel = [];
    $scope.clicked = function (day) {
      $scope.sel = [];
      //find the event on marks list
      $rootScope.marks.forEach(function (el) {
        if (day.getDate() == el.date.getDate()) {
          $scope.sel.push(el);
        }

      })

    }

  });

