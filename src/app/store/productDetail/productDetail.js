'use strict';
angular.module('store.product', [])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('productDetail', {
      url: '/store/:type/:id',
      templateUrl: 'app/store/productDetail/productDetail.html',
      controller: 'productDetailController'
    });
  }])

  .controller('productDetailController', function ($scope, storeData, $rootScope, $stateParams, $location, $ionicModal,$cordovaSocialSharing) {

    var imageFolder = 'assets/images/sections/stores/';
    $scope.desc = imageFolder + 'description_text.png';
    $scope.pricelb = imageFolder + 'price_text.png';
    $scope.button_add = imageFolder + 'button_add.png';
    $scope.button_tweet = imageFolder + 'button_tweet.png';

    $scope.cardflowSnapKinetic = {};

    $scope.coverflow = {};




    $scope.cardflowSnapKinetic = {};


    $scope.coverflow = {};


    storeData.getProductDetail($stateParams.id);



    $scope.tweet = function(product){

      var title =          "انا الان اقوم بالتسوق بمتجر زهرة الالكتروني للهواتف الذكية";

      $cordovaSocialSharing
        .shareViaTwitter(title)
        .then(function(result) {
          // Success!
          console.log(result);
        }, function(err) {
          // An error occurred. Show a message to the user
          console.log(err);

        });

    };

    $scope.addCart = function () {
      $rootScope.currentCart = storeData.addCart($rootScope.product);
    };

    $rootScope.deleteCart = function (item) {
      storeData.deleteCart(item);

    };

    $rootScope.go = storeData.go;


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
    };
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


  });

