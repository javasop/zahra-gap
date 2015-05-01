'use strict';
angular.module('article.detail', [])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('articleDetail', {
      url: '/article/:id',
      templateUrl: 'app/article/articleDetail/articleDetail.html',
      controller: 'articleDetailController'
    });
  }])

  .controller('articleDetailController', function ($scope, articleData, $rootScope, $stateParams, $location, $ionicModal, $ionicPopup, $state) {

    //display the map
    articleData.find($stateParams.id)


  });

