'use strict';
angular.module('event.eventDetail', [
  'ui.router'
])
  .config(function config($stateProvider) {
    $stateProvider.state('eventsDetail', {
      url: '/events/:id',
      templateUrl: 'app/event/eventDetail/eventDetail.html',
      controller: 'EventDetailCtrl'
    });
  })
  .controller('EventDetailCtrl', function ($scope, $rootScope, $stateParams, $location, eventData) {

    //get the events list
    // look for the days where there's events, call update to add all events to the calendar and mark them?
    var img_folder = 'assets/images/sections/events/';
    $scope.place = img_folder + 'place_text.png';
    $scope.time = img_folder + 'time_text.png';
    $scope.price = img_folder + 'price_text.png';
    $scope.desc = img_folder + 'description_text.png';
    $scope.zoom_text = img_folder + 'zoom_text.png';


    eventData.getEventDetail($stateParams.id);

  });

