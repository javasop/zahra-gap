/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('zahra.event', [
  'ui.router',
  'event.service',
  'datePicker',
  'event.eventDetail',
  'event.ticket',
  'event.booking'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('event', {
      url: '/events',
      templateUrl: 'app/event/event.html',
      controller: 'EventCtrl'
    });
  }])

/**
 * And of course we define a controller for our route.
 */
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

  })
;

