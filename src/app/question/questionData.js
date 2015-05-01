'use strict';
angular.module('hospital.service', [])

  .service('hospitalData', function ($rootScope, $http, Model, $stateParams, usSpinnerService) {


    this.all = function () {

      //get the type from here ..
      var type = "hospitals";


      //update when there's no list or it's a different list
      if (!$rootScope.hospitals) {
        Model.get(type).success(function (a) {
          usSpinnerService.stop('spinner-1');
          $rootScope.hospitals = a;
        })
      }

    };

    this.find = function (id) {
      $rootScope.hospital = Model.search("id", id, $rootScope.hospitals);
    }


  });



