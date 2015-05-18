'use strict';
angular.module('member.type', [])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('memberType', {
      url: '/member/type',
      templateUrl: 'app/member/memberType/memberType.html',
      controller: 'memberTypeController'
    });
  }])

  .controller('memberTypeController', function ($scope, $rootScope, $stateParams,formsData) {

    $scope.submit = function(){
      //sumbit to forms here
      formsData.post("members")
    }

  });
