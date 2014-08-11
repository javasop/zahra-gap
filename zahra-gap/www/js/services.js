angular.module('myServices', ['ngResource'])

        .service('model', function($resource, $rootScope, $http, $ionicLoading, $ionicPopup) {


	$rootScope.host = "http://galamr.com/zahrahControl/wp-json/zahra/";

            $rootScope.services =
                    [
                        {"store": "products?tax[wpsc_product_category]=main"},
                        {"lamsa": "products?tax[wpsc_product_category]=lamsa"},
			{"order":"order"},
                        {"verify_coupon": "products/coupons"},
                        {"events": "events"},
                        {"questions": "questions"},
                        {"articles": "posts"},
                        {"stories": "stories"},
                        {"booklets": "booklets"},
                        {"brochures": "brochures"},
                        {"hospitals": "hospitals"},
                        {"members": "members"},
			{"forms":"forms"}
                    ]

            $rootScope.log = function(ms) {


                console.log(ms);

            }



            function getUrl(service) {

                var ser = ""
                $rootScope.services.forEach(function(s) {
                    if (s[service] != undefined)
                        ser = s[service]

                });
                ;
                console.log(ser)
                var url = $rootScope.host + ser;
                return url;
            }


            this.host = "http://galamr.com/services/index.php/welcome/";
            
            this.get = function(service, par, temp) {
                var tem
                (temp == undefined) ? tem = '...    جاري التحميل' : tem = temp;
                //params optional

                $ionicLoading.show({
                    template: tem
                });
                //the state params has the id?
                var ur = getUrl(service);
                return $http.get(ur, {params: par});
            };
            this.search = function(criteria, to, object) {
                var result;
                object.forEach(function(el) {
                    if (el[criteria] == to) {
                        result = el;
                    }

                });

                return result;
            }


            this.formEmpty = function(obj) {

                for (el in obj) {
                    if (obj[el] == null) {
                        return false;
                    }

                }
                return true;


            }
            //this is a general post method
            this.post = function(service,data,temp) {
                
                var tem;
                (temp == undefined) ? tem ='... الطلب قيد التنفيذ'  : tem = temp;
                //params optional

                $ionicLoading.show({
                    template: tem
                });
                //the state params has the id?
                var ur = getUrl(service);
                return $http.post(ur, {'data':data});


            }


        });
