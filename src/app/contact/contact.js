/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/products`, however, could exist several additional folders representing
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
angular.module('contact', [
    'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactCtrl'
    });
  }])

/**
 * And of course we define a controller for our route.
 */
  .controller('ContactCtrl', function($scope, $rootScope, $stateParams, $location, books, $ionicPopup) {


    //show the different contact info
    $scope.show = function() {

    }

    $scope.folder = "img/sections/contact/"
    $scope.social = ["button_tweet", 'button_tube', 'button_fb', 'button_inst', 'button_home']

  })
