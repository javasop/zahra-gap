'use strict'
angular.module('book', [
  'ui.router',
  'book.service'
])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('book', {
      url: '/book/:type',
      templateUrl: 'app/book/book.html',
      controller: 'BookCtrl'
    });
  }])

  .controller('BookCtrl', function ($scope, $rootScope, $stateParams, $location, bookData, $ionicPlatform,$cordovaInAppBrowser) {


    bookData.get();


    $ionicPlatform.ready(function() {


      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes',
        closebuttoncaption: 'الرجوع'
      };

      $scope.open = function(link) {
        $cordovaInAppBrowser.open(link, '_blank', options)
          .then(function(event) {
            // success
          })
          .catch(function(event) {
            // error
          });
      }

    });

    //bookData.get();
    //
    //$scope.open = function (link) {
    //  var rf = window.open(link, '_self','location=yes');
    //}

  });
