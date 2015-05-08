'use strict';
angular.module('member.detail', [])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('memberDetail', {
      url: '/member/detail',
      templateUrl: 'app/member/memberDetail/memberDetail.html',
      controller: 'memberDetailController'
    });
  }])

  .controller('memberDetailController', function ($scope, memberData, $rootScope, $stateParams) {

    //display the map
    memberData.find($stateParams.id);

  });
