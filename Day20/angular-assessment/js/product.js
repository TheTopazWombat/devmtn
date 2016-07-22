angular.module('assessment')
  .directive('productItems', productItems);

  function productItems() {
    return {
      templateUrl: 'views/product-tmpl.html',
      scope: {
        product: '='
      },
      controller: function($scope, mainServ){
        $scope.toggle=function(){
          $scope.hidden=!$scope.hidden;
        };
      },
      link: function(scope, element, attr){

      }
    };
  }
