angular.module('apiApp')
  .service('apiService', apiService);

  function apiService($http){
    this.getData = function(){
      return $http({
        method: 'GET',
        url: "http://swapi.co/api/people/"
      }).then(function(results) {
      console.log(results.data.results);
      return results.data.results;
      });
    };
  }
