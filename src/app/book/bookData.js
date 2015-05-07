'use strict';
angular.module('book.service', [])
  .service('bookData', function ($rootScope, $http, usSpinnerService, Model, $stateParams) {

    this.get = function () {
      //get the type from here ..
      var type = $stateParams.type;
      var up = type != $rootScope.bookType;
      $rootScope.bookType = type;
      if (!$rootScope.books || up) {
        Model.get(type).success(function (a) {
          usSpinnerService.stop('spinner-1');
          $rootScope.books = a;
        })
      }

    };

    //maybe this will be moved to Model
    this.openPDF = function (name) {
      $rootScope.book = Model.search('id', id, $rootScope.books);
    }


  });
