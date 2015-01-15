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
angular.module('zahra.products', [
    'ui.router',
    'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
        $stateProvider.state('products', {
            url: '/products',
            views: {
                "main": {
                    controller: 'ProductsCtrl',
                    templateUrl: 'products/products.tpl.html'
                }
            },
            data: {pageTitle: 'Products'}
        });
    })

/**
 * And of course we define a controller for our route.
 */
    .controller('HospitalCtrl', function ($scope, $rootScope, $stateParams, $location, lists, $ionicPopup) {
        //display the map
        lists.getDetail($stateParams.id)


        $scope.map = {
            center: {
                latitude: 24.6757,
                longitude: 46.6701
            },
            zoom: 8,
            control: {},
            events: {}
        };

        $scope.coords = {};


        $scope.$watch('list', function (n, d) {

            //when event is updated
            if (n != undefined) {
                $scope.coords = {
                    latitude: $rootScope.list.custom_meta._pronamic_google_maps_latitude[0],
                    longitude: $rootScope.list.custom_meta._pronamic_google_maps_longitude[0]
                }
                $scope.map.control.refresh();


            }


        })


    })
