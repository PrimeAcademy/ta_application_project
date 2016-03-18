myApp.controller('heroEntryController', ['$scope', '$http', function($scope, $http) {

  $scope.submitHero = function() {

    $scope.heroObject = {
      alias: $scope.alias,
      first_name: $scope.first_name,
      last_name: $scope.last_name,
      city: $scope.city,
      power_name: $scope.power_name
    };

    console.log('hero object:: ', $scope.heroObject);




    $http.post('/data', $scope.heroObject).then(function(response){
      console.log('here is the post response:::::', response);

    });

    $scope.alias = '';
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.city = '';
  };


  $scope.submitPower = function() {
    $http.put('/data', $scope.heroObject).then(function(response){
      console.log('here PUT response::', response);

    });
  };








}]);
