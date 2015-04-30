'use strict';
angular.module('hospital.detail', [])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('hospitalDetail', {
      url: '/hospital/:id',
      templateUrl: 'app/hospital/hospitalDetail/hospitalDetail.html',
      controller: 'hospitalDetailController'
    });
  }])

  .controller('hospitalDetailController', function ($scope, hospitalData, $rootScope, $stateParams, $location, $ionicModal, $ionicPopup, $state) {

    //display the map
    hospitalData.find($stateParams.id)


    $scope.map = {
      center: {
        latitude: 24.6757,
        longitude: 46.6701
      },
      zoom: 8,
      control: {},
      events: {}
    };

    $scope.coords = {};


    $scope.$watch('list', function (n, d) {

      //when event is updated
      if (n != undefined) {
        $scope.coords = {
          latitude: $rootScope.list.custom_meta._pronamic_google_maps_latitude[0],
          longitude: $rootScope.list.custom_meta._pronamic_google_maps_longitude[0]
        }
        $scope.map.control.refresh();

      }


    })


  })

