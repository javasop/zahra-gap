'use strict';
angular.module('question', [
  'ui.router',
  'question.service',
  'question.detail'
])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('question', {
      url: '/question',
      templateUrl: 'app/question/question.html',
      controller: 'questionCtrl'
    });
  }])


  .controller('questionCtrl', function ($scope, $rootScope, $stateParams, $location, questionData) {

    questionData.all();
    $scope.question = {title:""}
    $scope.postQ = function(){
      questionData.postQ($scope.question)
    }


  });
