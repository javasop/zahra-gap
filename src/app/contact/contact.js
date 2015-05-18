'use strict';
angular.module('contact', [
  'ui.router',
  'contact.detail'
])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactCtrl'
    });
  }])

  .controller('ContactCtrl', function ($scope,$rootScope,$location) {


    $scope.regions = [

      {name:"riyadh",show:false},
      {name:"ahsa",show:false},
      {name:"madinah",show:false},
      {name:"jeddah",show:false},
      {name:"abha",show:false},

    ]
    //show the different contact info

    $scope.show = function (name) {

      if($rootScope.ipad) {
        $scope.regions.forEach(function (region) {
          if (region.name == name) {
            region.show = true;
          }
          else {
            region.show = false;
          }

        })
      }
      else{
        $location.path('contact/'+ name);
      }


    };

    $scope.folder = 'assets/images//sections/contact/'
    $scope.social = ['button_tweet', 'button_tube', 'button_fb', 'button_inst', 'button_home']

  });
