angular.module('myServices', ['ngResource'])

        .factory('model', function($resource, $rootScope, $http, $ionicLoading) {



            var host = "http://galamr.com/services/index.php/welcome/";

            var services =
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






            //implement watchers here to update the values of the calculations?
            //
            function getUrl(service) {
                var ser = ""
                services.forEach(function(s) {
                    if (s[service] != undefined)
                        ser = s[service]

                });
                ;
                console.log(ser)
                var url = host + ser;
                return url;
            }




            return {
                get: function(service) {
                    $ionicLoading.show({
                        template: '...    جاري التحميل'
                    });
                    //the state params has the id?
                    var ur = getUrl(service);
                    $http.get(ur).success(function(a) {
                        $ionicLoading.hide();
                        $rootScope.products = a;

                    });
                },
                search: function(criteria,to,object) {
                    var result;
                    object.forEach(function(el) {
                        if (el[criteria] == to){
                            $rootScope.result = el;
                        }

                    });
                    ;
                },
                insert: function(item) {
                    //the state params has the id?
                    var ex;
                    var ur = getUrl();
                    var ls = $rootScope.model.items.expenses;
                    ls.push(item);
                    $http.post(ur, item).success(function(a) {
                        ex = a;
                    });
                    return ex;
                },
                edit: function(item) {
                    //the state params has the id?
                    var ex;
                    var ur = getUrl();
                    var ls = $rootScope.model.items.expenses;
                    index = ls.indexOf(item);
                    $http.put(ur, {inserted: item, item_index: index}, function(a) {
                        ex = a;
                    });
                    return ex;
                },
                del: function(item) {
                    //the state params has the id?
                    var ex;
                    var ur = getUrl();
                    var ls = $rootScope.model.items.expenses;
                    index = ls.indexOf(item);
                    ls.splice(index, 1);
                    ur = ur + "&item_name=" + item.name + "&item_value=" + item.value;
                    $http({method: 'DELETE', url: ur}).success(function(a) {
                        ex = a;
                    });
                    return ex;
                },
                //add a model method to get all the icons ..


                //this will be changed in the future to something like username and pass or fb ... etc
                auth: function(email) {

                    $ionicLoading.show({template: "loggin in ..."});
                    var authr = $resource(local + "expenses/" + email + "/" + "auth");
                    authr.query(function(accounts) {
                        $ionicLoading.hide();
                        //this means the user needs to decide what account to choose from
                        if (accounts.length > 1) {
                            $rootScope.accounts = accounts;
                            $timeout(function() {
                                // anything you want can go here and will safely be run on the next digest.
                                $location.path("/accounts");
                            })
                        }
                        else {
                            $location.path("/tab/dash/" + accounts[0]._id);
                        }
                    },
                            function(e) {

                                $ionicLoading.hide();
                                var alt = $ionicPopup.alert({title: "Account not found", template: "please contact osamah.net.m@gmail.com to obtain an account"});
                            })

                }
            };
        });
