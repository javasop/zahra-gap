'use strict';
angular.module('contact', [
  'ui.router'
])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactCtrl'
    });
  }])

  .controller('ContactCtrl', function ($scope) {


    //show the different contact info
    $scope.show = function () {

    };

    $scope.folder = "img/sections/contact/"
    $scope.social = ["button_tweet", 'button_tube', 'button_fb', 'button_inst', 'button_home']

  });
