'use strict';
angular.module('store.service', [])
  .service('storeData', function ($rootScope, $http, Model, $stateParams, usSpinnerService, $ionicPopup, $location) {


    this.products = '';

    this.store = '';

    var that = this;

    var dummyUrl = "assets/dummy/images.json"


    this.go = function () {

      if ($rootScope.currentCart.length > 0) {
        $rootScope.modal.hide();
        $location.path('/buy');
      }
      else {

        var alertPopup = $ionicPopup.alert({
          title: '<p class="alert">سلة المشتريات فارغة</p>',
          template: 'الرجاء اضافة منتج لاتمام عملية الشراء'
        });

      }

    };

    function update() {
      //loop through the items and update the total?
      if ($rootScope.currentCart != undefined) {
        $rootScope.total = {discounted: false, value: 0};
        $rootScope.currentCart.forEach(function (el) {
          var price = parseInt(el.custom_meta._wpsc_price);
          $rootScope.total.value = $rootScope.total.value + (price * el.quantity);
        })
      }

    }

    this.checkStore = function () {

      var ser;
      if ($stateParams.type == 'main') {
        ser = 'store'
      }
      else {

        ser = 'lamsa'
      }

      return ser;

    };

    //store in cart all the values
    $rootScope.cart = {
      'store': [],
      'lamsa': []

    };

    $rootScope.currency = 'ريال';

    $rootScope.$watch('store', function (n, d) {
      var up = true;
    });
    $rootScope.$watch('currentCart', function (n, d) {
      update();
    }, true);


    this.get = function (id, callback) {
      var ser = that.checkStore();
      var up;
      if (ser != this.store) {
        up = true;
      }
      else {
        up = false;
      }

      this.store = ser;

      if (!$rootScope.products || up) {
        Model.get(ser).success(function (a) {
          usSpinnerService.stop('spinner-1');
          $rootScope.products = a;
          $rootScope.currentCart = $rootScope.cart[ser];
          if (id) {
            that.getProductDetail(id);
          }
        })
      }

    };

    this.getProductDetail = function (id) {

      if ($rootScope.products) {
        $rootScope.product = Model.search('ID', id, $rootScope.products);
      }
      else {
        this.get(id);
      }

    };
    this.getDummyImages = function(){

      return $http.get(dummyUrl);

    }
    this.addCart = function (item) {

      //this will have both the item and the value
      var ser = that.checkStore();
      item['quantity'] = 1;
      //check if the item is in the cart already ..
      if (Model.search('ID', item.ID, $rootScope.currentCart)) {
        var alertPopup = $ionicPopup.alert({
          title: '<p class="alert">تم اضافة المنتج مسبقا  </p>',
          template: 'المنتج موجود حاليا في سلة المشتريات'
        });
      }
      else {
        $rootScope.cart[ser].push(item);
        var alertPopup = $ionicPopup.alert({
          title: '<p class="success">تم اضافة المنتج</p>',
          template: 'المنتج موجود حاليا في سلة المشتريات'
        });

      }

      return $rootScope.cart[ser]

    };
    this.deleteCart = function (item) {

      //this will have both the item and the value
      var ser = that.checkStore();

      //delete the item from current cart
      var index = $rootScope.currentCart.indexOf(item);

      $rootScope.currentCart.splice(0, 1);


    };
    this.checkCoupon = function (number) {

      //call the service to check the coupon

      //prepare the coupon param
      var cop = {cc: number}
      if ($rootScope.total.discounted) {
        //if the total is already discounted
        var alertPopup = $ionicPopup.alert({
          title: '<p class="alert">قيمة الخصم مضافة سابقا</p>'
        });

      }
      else {
        var temp = '... جاري التحقق من الكوبون';
        Model.get('verify_coupon', cop, temp).success(function (a) {
          if (a == 'No code') {
            var alertPopup = $ionicPopup.alert({
              title: '<p class="alert">لم يتم العثور علئ الكوبون</p>',
              template: 'الرجاء التأكد من الرقم '
            });

          }
          else {

            var tm = '%' + parseInt(a.value) + ' ' + 'قيمة الخصم ';
            var alertPopup = $ionicPopup.alert({
              title: '<p class="success"> تم العثور علئ الكوبون</p>',
              template: tm
            });

            //subtract the percentage of the coupon from the total?
            $rootScope.total.value = $rootScope.total.value - (parseInt(a.value) / 100) * $rootScope.total.value;
            $rootScope.total.discounted = true;
          }

        });
      }


    };
    //this.submitOrder= function (data) {
    //
    //  //order is the form info
    //  //send the request in two parts, one is for the forms, the other with the products
    //  //iterate throught all the forms and extract only the value
    //
    //  var data = $rootScope.data;
    //
    //  for (f in $rootScope.forms) {
    //    data[$rootScope.forms[f].element_name] = $rootScope.forms[f].value;
    //
    //  }
    //
    //  if (this.validate(data)) {
    //
    //    var temp = '... الطلب قيد التنفيذ'
    //
    //    Model.post(type, data, temp).success(function (a) {
    //
    //      usSpinnerService.stop('spinner-1');
    //      console.log(a);
    //
    //    });
    //
    //
    //  }
    //
    //
    //}


  });



