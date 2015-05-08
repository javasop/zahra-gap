'use strict';
angular.module('member', [
  'ui.router',
  'member.detail',
  'member.service'
])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('member', {
      url: '/member',
      templateUrl: 'app/member/member.html',
      controller: 'MemberCtrl'
    });
  }])

  .controller('MemberCtrl', function ($scope, Model, $stateParams) {
    //all the member types ...
    $scope.types = ['type_1', 'type_2', 'type_3', 'type_4', 'type_5', 'type_6'];

  });
