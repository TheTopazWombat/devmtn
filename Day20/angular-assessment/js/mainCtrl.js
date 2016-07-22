angular.module('assessment')
  .controller('mainCtrl', mainCtrl);

  function mainCtrl($scope, $http, $stateParams, mainServ) {
    console.log($stateParams);
    $scope.test = 'kika is a buttlicker';
    $scope.getData = mainServ.getData()
      .then(function(response) {
        console.log(response);
        $scope.products = response;
      });
  }
