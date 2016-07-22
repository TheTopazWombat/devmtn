angular.module('assessment')
  .controller('detailCtrl', detailCtrl);

  function detailCtrl($scope, $http, $stateParams, mainServ) {
    console.log($stateParams);
    $scope.test = 'kika is a buttlicker';
    $scope.getProdDetails = mainServ.getProdDetails($stateParams.id).then(function(response){
      console.log(response);
      $scope.product = response;
    });
  }
