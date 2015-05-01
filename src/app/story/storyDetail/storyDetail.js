'use strict';
angular.module('story.detail', [])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('storyDetail', {
      url: '/story/:id',
      templateUrl: 'app/story/storyDetail/storyDetail.html',
      controller: 'storyDetailController'
    });
  }])

  .controller('storyDetailController', function ($scope, storyData, $rootScope, $stateParams) {

    //display the map
    storyData.find($stateParams.id)

  });

