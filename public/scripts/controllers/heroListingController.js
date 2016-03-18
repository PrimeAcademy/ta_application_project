myApp.controller('heroListingController', ['$scope', '$http', function($scope, $http) {
  $http.get('/data').then(function(response){
    console.log('here is GET response::', response);
    $scope.heroes = response.data;
    return $scope.heroes;
  });

  $scope.sortHeroes = function() {


  };






}]);
