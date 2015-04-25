angular.module('home', [])
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'homeController'
    });
}])
.controller('homeController', function ($scope) {

        //mapping here?

});

