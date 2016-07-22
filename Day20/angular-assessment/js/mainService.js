angular.module('assessment')
  .service('mainServ', mainServ);

  function mainServ($http) {
    this.getData = function() {
      return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products'
      }).then(function(response){
        console.log(response);
        return (response.data);
      });
    };
    this.getProdDetails = function(id){
      return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products/' + id
      }).then(function(response){
        return response.data;
      });
    };
  }
