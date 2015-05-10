'use strict';
angular.module('bank', [
  'ui.router'
])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('bank', {
      url: '/bank',
      templateUrl: 'app/bank/bank.html',
      controller: 'BankCtrl'
    });
  }])

  .controller('BankCtrl', function ($scope) {

    //prepare a local json with all the banks ...
    $scope.folder = 'assets/images/banks/';
    $scope.banks = [
      {
        'image': 'riyadh_bank_ipad',
        'iban': 'SA932 0000 0021 2044 8869 940'
      },
      {
        'image': 'bilad_ipad',
        'iban': 'SA04 1500 0999 3000 0110 0004'
      },
      {
        'image': 'rajhi_ipad',
        'iban': 'SA51 8000 0114 6080 1000 3039'
      },
      {
        'image': 'samba_ipad',
        'iban': 'SA57 4000 0000 0099 0480 0715'
      },
      {
        'image': 'inma_ipad',
        'iban': 'SA08 0500 0068 2005 2657 3000'
      },
      {
        'image': 'saudi_ipad',
        'iban': 'SA316 5000 00010 1730 976 001'
      },
      {
        'image': 'holland_ipad',
        'iban': 'SA505 0000 0000 1035 872 9008'
      },
      {
        'image': 'french_ipad',
        'iban': 'SA565 50000 00097 1333 001 16'
      },
      {
        'image': 'jazzera_ipad',
        'iban': 'SA686 00000 00030 4644 640 01'

      }]
  });
