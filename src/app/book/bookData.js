'use strict';
angular.module('book.service', [])
  .service('bookData', function ($rootScope, $http, usSpinnerService, model, $stateParams) {

    this.get = function () {
      //get the type from here ..
      var type = $stateParams.type;
      var up = type != $rootScope.bookType;
      $rootScope.bookType = type;
      if (!$rootScope.books || up) {
        model.get(type).success(function (a) {
          usSpinnerService.stop('spinner-1');
          $rootScope.books = a;
        })
      }

    };

    //maybe this will be moved to model
    this.openPDF = function (name) {
      $rootScope.book = model.search('id', id, $rootScope.books);
    }


  });
