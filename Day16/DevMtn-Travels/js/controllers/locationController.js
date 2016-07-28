angular.module('devmtnTravel')
  .controller('locationCtrl', locationCtrl);

  function locationCtrl($scope, mainSrv){
    $scope.locationData = mainSrv.travelInfo;
  }
