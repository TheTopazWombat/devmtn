angular.module('dojoApp')
.service('musicService', function($http){
    
   var myDrivers = {}; 
  
  myDrivers.getDrivers = function() {
      return $http ({
          method: 'JSONP',
          url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      })
  }  
   
    return myDrivers;
   
});