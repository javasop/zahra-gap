'use strict';
/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/checkout`, however, could exist several additional folders representing
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
angular.module('store.checkout', [
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('checkout', {
      url: '/checkout',
      templateUrl: 'app/store/checkout/checkout.html',
      controller: 'CheckoutCtrl'
    });
  }])

/**
 * And of course we define a controller for our route.
 */
    .controller('CheckoutCtrl', function ($scope, $rootScope, $stateParams, $location, storeData, forms) {

        forms.get("store");

        $scope.submit = function () {
            //send request
            storeData.submitOrder();

        }

    });
