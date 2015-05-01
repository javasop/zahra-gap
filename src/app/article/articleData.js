'use strict';
angular.module('article.service', [])

  .service('articleData', function ($rootScope, $http, Model, $stateParams, usSpinnerService, $ionicPopup, $location, $state) {


    this.all = function() {

      //get the type from here ..
      var type = "articles"

      //update when there's no list or it's a different list
      if(!$rootScope.articles){
        Model.get(type).success(function(a) {
          usSpinnerService.stop('spinner-1');
          $rootScope.articles = a;
        })
      }

    };

    this.find = function(id) {

      $rootScope.article = Model.search("ID", id, $rootScope.articles);

    }



  });



