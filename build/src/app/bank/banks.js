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
    .controller('BankCtrl', function($scope, $rootScope, $stateParams, $location, $ionicPopup) {

        //prepare a local json with all the banks ...
        $scope.folder = "img/banks/"
        $scope.banks = [
            {
                "image": "riyadh_bank_ipad",
                "iban": "SA932 0000 0021 2044 8869 940",
            },
            {
                "image": "bilad_ipad",
                "iban": "SA04 1500 0999 3000 0110 0004"
            },
            {
                "image": "rajhi_ipad",
                "iban": "SA51 8000 0114 6080 1000 3039"
            },
            {
                "image": "samba_ipad",
                "iban": "SA57 4000 0000 0099 0480 0715"
            },
            {
                "image": "inma_ipad",
                "iban": "SA08 0500 0068 2005 2657 3000"
            },
            {
                "image": "saudi_ipad",
                "iban": "SA316 5000 00010 1730 976 001"
            },
            {
                "image": "holland_ipad",
                "iban": "SA505 0000 0000 1035 872 9008"
            },
            {
                "image": "french_ipad",
                "iban": "SA565 50000 00097 1333 001 16"
            },
            {
                "image": "jazzera_ipad",
                "iban": "SA686 00000 00030 4644 640 01"

            }]
    })

