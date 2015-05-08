'use strict';
angular.module('member.service', [])

  .service('memberData', function ($rootScope, $http, Model, $stateParams, usSpinnerService) {


    this.find = function (id) {

      $rootScope.member = Model.search('id', id, $rootScope.members);

    }


  });



