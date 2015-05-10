'use strict';
angular.module('zahra')
  .service('Model', function ($rootScope, $http, $stateParams, $ionicPopup, $location, host, usSpinnerService) {

    var that = this;

    this.getUrl = function (service) {

      var ser = ''
      this.services.forEach(function (s) {
        if (s[service] != undefined)
          ser = s[service]

      });
      console.log(host)
      var url = host + ser;
      return url;
    }

    this.services = [
      {'store': 'products?tax[wpsc_product_category]=main'},
      {'lamsa': 'products?tax[wpsc_product_category]=lamsa'},
      {'order': 'products'},
      {'verify_coupon': 'products/coupons'},
      {'events': 'events'},
      {'questions': 'questions'},
      {'articles': 'posts'},
      {'stories': 'stories'},
      {'booklets': 'booklets'},
      {'brochures': 'brochures'},
      {'hospitals': 'hospitals'},
      {'members': 'members'},
      {'forms': 'forms'}
    ]


    this.get = function (service, par, temp) {

      //the state params has the id?
      usSpinnerService.spin('spinner-1');
      var ur = that.getUrl(service);
      return $http.get(ur, {params: par});
    };


    this.search = function (criteria, to, object) {
      var result;
      object.forEach(function (el) {
        if (el[criteria] == to) {
          result = el;
        }

      });

      return result;
    }


    this.formEmpty = function (obj) {

      for (var el in obj) {
        if (obj[el] == null) {
          return false;
        }

      }
      return true;


    }
    //this is a general post method
    this.post = function (service, data) {

      //the state params has the id?
      var ur = that.getUrl(service);
      return $http.post(ur, data);

    }
  })
