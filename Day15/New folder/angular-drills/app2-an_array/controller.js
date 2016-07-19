angular.module('arrayApp')
  .controller('arrayController', arrayController);

  function arrayController($scope, svc) {
    $scope.myData = svc.getData();
    console.log($scope.myData);
  }
