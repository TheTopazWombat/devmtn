angular.module('app')
  .controller('ctrl', ctrl);

function ctrl($scope, myService) {
  $scope.myData = myService.getData();
  // $scope.test = "STEEV can't stop gargling cocks";
  // $scope.test2 = "IS THIS CODE NOW STEEV";
}
