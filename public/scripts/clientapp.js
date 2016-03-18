var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider

    .when('/heroEntry', {
      templateUrl: '/views/templates/heroEntry.html',
      controller: 'heroEntryController'
    })
    .when('/heroListing', {
      templateUrl: '/views/templates/heroListing.html',
      controller: 'heroListingController'
    })
    .otherwise({
      redirectTo: 'heroEntry'
    });

}]);
