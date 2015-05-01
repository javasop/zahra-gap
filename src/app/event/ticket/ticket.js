angular.module('event.ticket', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
  .config(function config($stateProvider) {
    $stateProvider.state('ticket', {
      url: '/tickets',
      templateUrl: 'app/event/ticket/ticket.html',
      controller: 'TicketCtrl'
    });
  })

/**
 * And of course we define a controller for our route.
 */
  .controller('TicketCtrl', function ($scope, $rootScope, $stateParams, $location, eventData) {

    //get the events list
    // look for the days where there's events, call update to add all events to the calendar and mark them?
//            [{"ticket_id": "28", "ticket_name": "Standard Ticket", "ticket_spaces": "10", "booked_spaces": "10", "remaining_spaces": "-10", "ticket_price": "500.00"}]

    //events.getTickets();

    $scope.checked = [];

    $scope.current;

    $rootScope.data = {"event_id": $rootScope.event.ID, "ticket_spaces": 1};

    //check one box only
    $scope.change = function (index) {

      $rootScope.selectedTicket = index;

      $rootScope.data['ticket_id'] = $rootScope.event.tickets[index].ticket_id;
      console.log($rootScope.data['ticket_id']);

      $scope.checked.forEach(function (el) {
        //if($scope.checked.indexOf(true))
        i = $scope.checked.indexOf(el);

        if (i != $scope.current) {
          $scope.checked[i] = false;
        }


      });

      //check the availabilit of the tickets and change the nav button accordingly
      var remaining = parseInt($rootScope.event.tickets[index].ticket_spaces);
      if (!remaining || remaining > 0) {
        $scope.nav_text = "حجز";
      }
      else {

        $scope.nav_text = "حجز انتظار";

      }

    }


  })
