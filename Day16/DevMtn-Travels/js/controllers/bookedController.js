angular.module('devmtnTravel')
  .controller('bookedCtrl', bookedCtrl);

  function bookedCtrl($scope, $stateParams, mainSrv) {
    console.log($stateParams.id);
    for (var i = 0; i < mainSrv.travelInfo.length; i++) {
      console.log(mai nSrv.travelInfo[i].id);
      if (mainSrv.travelInfo[i].id === Number($stateParams.id)) {
        $scope.booked = mainSrv.travelInfo[i];
      }
    }
    console.log($scope.booked);
  }
