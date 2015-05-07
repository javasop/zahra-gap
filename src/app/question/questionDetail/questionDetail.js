'use strict';
angular.module('question.detail', [])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('questionDetail', {
      url: '/question/:id',
      templateUrl: 'app/question/questionDetail/questionDetail.html',
      controller: 'questionDetailController'
    });
  }])

  .controller('questionDetailController', function ($scope, questionData, $rootScope, $stateParams) {

    questionData.find($stateParams.id)


  });

