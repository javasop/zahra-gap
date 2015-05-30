'use strict';
angular.module('member.detail', ['zahra.forms'])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('memberDetail', {
      url: '/member/detail',
      templateUrl: 'app/member/memberDetail/memberDetail.html',
      controller: 'memberDetailController'
    });
  }])

  .controller('memberDetailController', function ($scope, $rootScope, $stateParams,formsData,$location,$ionicPopup) {

    formsData.get("members")

    var empty = '<p class="alert">الرجاء تعبئة جميع البيانات</p>';


    $scope.submit = function(){
      formsData.post("members")
    };

    $scope.go = function(){
        $location.path('member/type');
    }

  });
