angular.module('dojoApp')
.controller('musicCtrl', function($scope, musicService){
 
$scope.nameFilter = '';

$scope.driversList = [];

musicService.getDrivers().success(function(response){
    $scope.driversList =response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
})    
    
    
    
    
 $scope.driversList = [
      {
          Driver: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          points: 322,
          nationality: "German",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      {
          Driver: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          points: 207,
          nationality: "Spanish",
          Constructors: [
              {name: "Ferrari"}
          ]
      }
    ];
});






