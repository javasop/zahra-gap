'use strict';
angular.module('article', [
  'ui.router',
  'article.service',
  'article.detail'
])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('article', {
      url: '/article',
      templateUrl: 'app/article/article.html',
      controller: 'ArticleCtrl'
    });
  }])

  .controller('ArticleCtrl', function ($scope, $rootScope, $stateParams, $location, articleData) {

    articleData.all();

  });
