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

  .controller('BookCtrl', function ($scope, $rootScope, $stateParams, $location, bookData, $ionicPopup) {

    bookData.get();
    $scope.open = function (link) {
      var rf = window.open(link, '_blank');
    }

  });
