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
angular.module('book', [
    'ui.router',
    'book.service'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('book', {
      url: '/book/:type',
      templateUrl: 'app/book/book.html',
      controller: 'BookCtrl'
    });
  }])

/**
 * And of course we define a controller for our route.
 */
  .controller('BookCtrl', function($scope, $rootScope, $stateParams, $location, books, $ionicPopup) {

    books.get();
//open the app
    $scope.open = function (link) {
      var rf = window.open(link, '_blank');

    }

  })
