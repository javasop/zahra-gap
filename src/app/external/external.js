'use strict';
angular.module('external', [])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('external', {
      url: '/external/:type',
      templateUrl: 'app/external/external.html',
      controller: 'ExternalCtrl'
    })
  }])
  .controller('ExternalCtrl', function ($scope, $rootScope, $stateParams) {

    //check the param and open the file accordingly ...
    var links = {
      "video": "https://www.youtube.com/watch?v=-p3TFqIFpP4",
      "text": "sms:3490322111"
    }

    var type = links[$stateParams.type];
    if (type) {
      var rf = window.open(type, '_blank', 'location=yes');
    }

  });

