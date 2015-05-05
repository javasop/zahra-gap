'use strict';
angular.module('story.service', [])

  .service('storyData', function ($rootScope, $http, Model, $stateParams, usSpinnerService) {


    this.all = function () {

      //get the type from here ..
      var type = 'stories';

      //update when there's no list or it's a different list
      if (!$rootScope.stories) {
        Model.get(type).success(function (a) {
          usSpinnerService.stop('spinner-1');
          $rootScope.stories = a;
        })
      }

    };

    this.find = function (id) {

      $rootScope.story = Model.search('ID', id, $rootScope.stories);

    }


  });



