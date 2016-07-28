angular.module('devmtnTravel')
  .controller('packagesCtrl', packagesCtrl);

  function packagesCtrl($scope, mainSrv){
    $scope.locationData = mainSrv.travelInfo;
    // console.log($locationData);
  }
