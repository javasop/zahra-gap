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

    $scope.submit = function() {
      //sumbit to forms here
      formsData.post("members")
    };

    $scope.artypes =  [
    "داعم ماسي",
    "داعم ذهبي",
   "داعم فضي",
   "داعم برونزي",
    "العامل",
  "المنتسب",
   "المشارك"
    ];

    $scope.types = ['type_1', 'type_2', 'type_3', 'type_4', 'type_5', 'type_6'];

  });
