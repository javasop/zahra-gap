angular.module('myControllers', [])

        .controller('HomeCtrl', function($rootScope, model) {




        })
        .controller('MainCtrl', function($rootScope, model) {




        })

        .controller('IntroCtrl', function($scope, model,$stateParams) {

            //we will get the type from the url
            //there's a json with all intros and buttons that
            //renders when the view is loaded
            var intro = [
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                
                {"amal": {"section-logo": "", "text": "", buttons: [{"image": "", "to": ""}, {"image": "", "to": ""}]}},
                
                
            ]
            
            var type = $stateParams.type;
                        
            $scope.intro = intro[type];



        })

