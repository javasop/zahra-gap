angular.module('myControllers', [])

        .controller('HomeCtrl', function($rootScope, model) {




        })
        .controller('MainCtrl', function($rootScope, model) {




        })

        .controller('IntroCtrl', function($scope, model, $stateParams) {

            //we will get the type from the url
            //there's a json with all intros and buttons that
            //renders when the view is loaded
            var intro = [
                {"about": {"section-logo": "about_logo", "text": "about_text", buttons: [{"image": "about_button_1", "to": "external/video"}]}},
                {"amal": {"section-logo": "amal_logo", "text": "amal_text", buttons: [{"image": "amal_button_1", "to": "books/amal"}, {"image": "amal_button_2", "to": "list/stories"}, {"image": "amal_button_3", "to": "questions"}]}},
                {"donations": {"section-logo": "donations_logo", "text": "donations_text", buttons: [{"image": "donations_button_1", "to": "banks"}, {"image": "donations_button_2", "to": "external/text"}]}},
                {"education": {"section-logo": "education_logo", "text": "education_text", buttons: [{"image": "education_button_1", "to": "books/education"}, {"image": "education_button_2", "to": "list/articles"}]}},
                {"hospitals": {"section-logo": "hospitals_logo", "text": "hospitals_text", buttons: [{"image": "hospitals_button_1", "to": "list/hospitals"}]}},
                {"lamsa": {"section-logo": "lamsa_logo", "text": "lamsa_text", buttons: [{"image": "lamsa_button_1", "to": "store/lamsa"}]}},
                {"members": {"section-logo": "members_logo", "text": "members_text_ipad", buttons: [{"image": "members_button_1", "to": "form/member"}]}}

            ];

            var type = $stateParams.type;

            $scope.intro = intro[type];



        })

