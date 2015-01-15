angular.module('common', [])

    .provider('mainModel', function mainModelProvider() {



        var host = "";

        this.host = function(val){

           host = val;

        }


        //object declaration for factory
        function mainModel($ionicLoading,$http,host){

            that = this;

            this.getUrl= function(service) {

                var ser = ""
                this.services.forEach(function (s) {
                    if (s[service] != undefined)
                        ser = s[service]

                });
                console.log(host)
                var url = host + ser;
                return url;
            }

            this.services = [
                {"store": "products?tax[wpsc_product_category]=main"},
                {"lamsa": "products?tax[wpsc_product_category]=lamsa"},
                {"order": "products"},
                {"verify_coupon": "products/coupons"},
                {"events": "events"},
                {"questions": "questions"},
                {"articles": "posts"},
                {"stories": "stories"},
                {"booklets": "booklets"},
                {"brochures": "brochures"},
                {"hospitals": "hospitals"},
                {"members": "members"},
                {"forms": "forms"}
            ]




            this.get = function (service, par, temp) {
                var tem
                (temp == undefined) ? tem = '...    جاري التحميل' : tem = temp;
                //params optional

                $ionicLoading.show({
                    template: tem
                });
                //the state params has the id?
                var ur = that.getUrl(service);
                console.log(ur);
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

                for (el in obj) {
                    if (obj[el] == null) {
                        return false;
                    }

                }
                return true;


            }
            //this is a general post method
            this.post = function (service, data, temp) {

                var tem;
                (temp == undefined) ? tem = '... الطلب قيد التنفيذ' : tem = temp;
                //params optional

                $ionicLoading.show({
                    template: tem
                });
                //the state params has the id?
                var ur = that.getUrl(service);
                return $http.post(ur, data);

            }

        }

        this.$get =  function mainModelFactory($ionicLoading,$http) {
            return new mainModel($ionicLoading,$http,host);
        };
    })
