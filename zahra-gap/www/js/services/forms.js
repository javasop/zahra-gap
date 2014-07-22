angular.module('zahra', ['ionic', 'myDirectives', 'myServices'])
        .directive('zforms', function($rootScope, $http, $ionicLoading, model, $stateParams, $ionicPopup, $location) {
            return {
                restrict: 'E',
                scope: {
                    forms: "=forms",
                    type: "=type"
                },
                template: "<form>\r" +
                        "\n" +
                        "<label>\r" +
                        '<input style="text-align:right" type="text" ng-model="forms.first_name" required="required" name="first_name">\r' +
                        "\n" +
                        '<span style="text-align:right" class="input-label">الاسم الاول</span>\r' +
                        "\n" +
                        "</label>\r" +
                        "\n" +
                        "</form>\r" +
                        "\n",
                link: function(scope, element, attrs) {
                    console.log("scope is: ", scope);
                    console.log("elemenet is: ", element);
                    console.log("attrs is: ", attrs);
                    //submit the forms
                    scope.submit = function() {
                        
                        
                    }

                }
            }

        });