angular.module('myServices', ['ngResource'])

        .service('model', function($resource, $rootScope, $http, $ionicLoading) {



            $rootScope.host = "http://galamr.com/services/index.php/welcome/";

            $rootScope.services =
                    [
                        {"store": "products_list_json"},
                        {"lamsa": "products_list_lz_json"},
                        {"verify_coupon": "verify_coupon"},
                        {"order": "place_new_order"},
                        {"events": "events_list_new_json"},
                        {"tickets": "tickets_list_json($event_id)"},
                        {"ask": "ask_question"},
                        {"questions": "get_all_questions"},
                        {"articles": "get_all_articles"},
                        {"stories": "get_all_stories"},
                        {"booklets": "get_all_booklets"},
                        {"brochures": "get_all_amal_brochures"},
                        {"hospitals": "hospitals_list_json"},
                        {"members": "register_a_member"}
                    ]
                    
            $rootScope.log = function(ms){
                
                
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


                this.host = "http://galamr.com/services/index.php/welcome/",
                this.services=
                        [
                            {"store": "products_list_json"},
                            {"lamsa": "products_list_lz_json"},
                            {"verify_coupon": "verify_coupon"},
                            {"order": "place_new_order"},
                            {"events": "events_list_new_json"},
                            {"tickets": "tickets_list_json($event_id)"},
                            {"ask": "ask_question"},
                            {"questions": "get_all_questions"},
                            {"articles": "get_all_articles"},
                            {"stories": "get_all_stories"},
                            {"booklets": "get_all_booklets"},
                            {"brochures": "get_all_amal_brochures"},
                            {"hospitals": "hospitals_list_json"},
                            {"members": "register_a_member"}
                        ],
                this.get = function(service,par,temp) {
                    
                    var tem
                    (temp == undefined)?tem='...    جاري التحميل':tem=temp;
                    //params optional
                    
                    $ionicLoading.show({
                        template:tem 
                    });
                    //the state params has the id?
                   var ur = getUrl(service);
                   return $http.get(ur,{params:par});
                },
                this.search = function(criteria, to, object) {
                    var result;
                    object.forEach(function(el) {
                        if (el[criteria] == to) {
                            result = el;
                        }

                    });
                    
                    return result;
                }

        });
