angular.module('store', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('products', {
            url: '/store/:type',
            templateUrl: 'store/store.tpl.html',
            controller: 'storeController'
        });
    }])

/**
 * And of course we define a controller for our route.
 */
    .controller('storeController', function ($scope, $rootScope, $stateParams, $location, storeData,$ionicPopup) {

       $scope.go = function (id) {
           console.log('store/' + $stateParams.type + '/' + id);
            $location.path('store/' + $stateParams.type + '/' + id);
        }
        storeData.get();

    });

//add the model here

