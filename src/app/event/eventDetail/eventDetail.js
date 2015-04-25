/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('zahra.event', [
    'ui.router',
    'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
        $stateProvider.state('event', {
            url: '/event',
            views: {
                "main": {
                    controller: 'EventCtrl',
                    templateUrl: 'event/event.tpl.html'
                }
            },
            data: {pageTitle: 'Events'}
        });
    })

/**
 * And of course we define a controller for our route.
 */
    .controller('EventDetailCtrl', function ($scope, $rootScope, $stateParams, $location, events, $ionicModal) {

        //get the events list
        // look for the days where there's events, call update to add all events to the calendar and mark them?
        var img_folder = "img/sections/events/";
        $scope.place = img_folder + "place_text.png";
        $scope.time = img_folder + "time_text.png";
        $scope.price = img_folder + "price_text.png";
        $scope.desc = img_folder + "description_text.png"
        $scope.zoom_text = img_folder + "zoom_text.png";


        events.getEventDetail($stateParams.id);


        //$scope.marker = [{latitude:$rootScope.event.location_latitude,longitude:$rootScope.event.location_longitude}]

        //console.log($rootScope);

        $scope.map = {
            center: {
                latitude: 24.6757,
                longitude: 46.6701
            },
            zoom: 8,
            control: {},
            events: {
                resize: function () {

                }
            }
        };

        $scope.searchLocationMarker = {
            coords: {}
        }

        $rootScope.$watch('event', function (n, d) {

            //when event is updated
            if (n != undefined) {
                $scope.searchLocationMarker.coords = $scope.map.center = {
                    latitude: $rootScope.event.location[0].location_latitude,
                    longitude: $rootScope.event.location[0].location_longitude
                }

            }

        })


//google.maps.event.trigger(map, 'resize')
        //map Modal
        $ionicModal.fromTemplateUrl('map.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.mapModal = modal;
        });
        $scope.openModal = function () {
            $scope.mapModal.show();
            $scope.map.control.refresh();

        };
        $scope.closeModal = function () {
            $scope.mapModal.hide();
        };
        $scope.submit = function () {
            $scope.closeModal();
        }
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.mapModal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });

    })

