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

    $scope.folder = 'assets/images//sections/contact/';

    $scope.openExternal = function(link){
      var url = $scope.links[link];
      var rf = window.open(url, '_blank', 'location=yes');

    };
    $scope.links =
    {
      "home": "http://www.Zahra.org.sa",
      "instagram": "http://instagram.com/ZAHRA_KSA",
      "facebook": "https://www.facebook.com/groups/ZahraAssociation/",
      "youtube": "http://www.youtube.com/user/ZahraAssociaChannel",
      "twitter": "https://twitter.com/zahra_ksa"
    };

    $scope.social =
      [
        {"image": "button_tweet", "link": "twitter"},
        {"image": 'button_tube', "link": "youtube"},
        {"image": 'button_fb', "link": "facebook"},
        {"image": 'button_inst', "link": "instagram"},
        {"image": 'button_home', "link": "home"}
      ];

  });
