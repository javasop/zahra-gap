'use strict';
angular.module('story', [
  'ui.router',
  'story.service',
  'story.detail'
])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('story', {
      url: '/story',
      templateUrl: 'app/story/story.html',
      controller: 'StoryCtrl'
    });
  }])

  .controller('StoryCtrl', function ($scope, $rootScope, $stateParams, $location, storyData) {

    storyData.all();

  });
