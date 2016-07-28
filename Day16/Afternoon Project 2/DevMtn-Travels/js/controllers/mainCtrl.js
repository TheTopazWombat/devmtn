angular.module('devmtnTravel')
  .controller('mainCtrl', mainCtrl);

  function mainCtrl($scope, mainSrv){
    $scope.locationData = mainSrv.travelInfo;
    console.log($scope.locationData);
  }
