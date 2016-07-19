angular.module('apiApp')
  .controller('apiController', apiController);

  function apiController($scope, apiService) {
    $scope.getData = apiService.getData()
      .then(function(results){
        $scope.myData = results;
        console.log($scope.myData);
      });
  }
