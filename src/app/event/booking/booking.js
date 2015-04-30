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
angular.module('event.booking', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
  .config(function config($stateProvider) {
    $stateProvider.state('booking', {
      url: '/booking',
      templateUrl: 'app/event/booking/booking.html',
      controller: 'BookingCtrl'
    });
  })

/**
 * And of course we define a controller for our route.
 */
  .controller('BookingCtrl', function ($scope, $rootScope, $stateParams, $location, eventData, $ionicPopup, formsData,eventData) {


    //got all the forms ...
    formsData.get("events");

    $scope.submit = function () {
      formsData.post("events");
    }

  });

