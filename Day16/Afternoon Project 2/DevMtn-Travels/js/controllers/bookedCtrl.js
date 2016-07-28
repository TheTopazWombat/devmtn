angular.module('devmtnTravel')
  .controller('bookedCtrl', bookedCtrl);

  function bookedCtrl($scope, mainSrv, $stateParams) {
    $scope.locationData = mainSrv.travelInfo;
    for (var i = 0; i < $scope.locationData.length; i++) {
      if ($stateParams.id == $scope.locationData[i].id) {
        $scope.booked = $scope.locationData[i];
      }
    }
  }
