'use strict';
angular.module('store.product',[])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('productDetail', {
            url: '/store/:type/:id',
            templateUrl: 'app/store/productDetail/productDetail.html',
            controller: 'productDetailController'
        });
    }])

    .controller('productDetailController', function ($scope, storeData, $rootScope, $stateParams, $location, $ionicModal, $ionicPopup) {

        var img_folder = "assets/images/sections/stores/";
        $scope.desc = img_folder + "description_text.png";
        $scope.pricelb = img_folder + "price_text.png";
        $scope.button_add = img_folder + "button_add.png";
        $scope.button_tweet = img_folder + "button_tweet.png";

        //if($rootScope.products == undefined) request it from server

        $scope.coverflow = {};

        storeData.getProductDetail($stateParams.id);


        $scope.addCart = function () {
            $rootScope.currentCart = products.addCart($rootScope.product);
        }

        $rootScope.deleteCart = function (item) {
            products.deleteCart(item);

        }


        //carts Modal
        $ionicModal.fromTemplateUrl('cart.html', {
            scope: $rootScope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $rootScope.modal = modal;
        });
        $scope.openModal = function () {
            $rootScope.modal.show();
        };
        $rootScope.closeModal = function () {
            $rootScope.modal.hide();
        };
        $rootScope.submit = function () {
            $rootScope.closeModal();
        }
        //Cleanup the modal when we're done with it!
        $rootScope.$on('$destroy', function () {
            $rootScope.modal.remove();
        });
        // Execute action on hide modal
        $rootScope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $rootScope.$on('modal.removed', function () {
            // Execute action
        });


    })

