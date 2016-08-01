angular.module('dojoApp')
.controller('basketballerCtrl', function($scope, $stateParams, basketballService){
    
    
    
$scope.newPlayer = {};
var currentPlayerID = $stateParams.playerID;
$scope.removePlayer = currentPlayerID;
$scope.newPlayer.id = currentPlayerID; 

$scope.player = basketballService.getPlayer(currentPlayerID);
console.log($scope.player);

$scope.editCurrentPlayer = function(editPlayer){
    basketballService.editThisPlayer(editPlayer);
}
    
$scope.removeOldPlayer = function(removePlayer) {
    basketballService.deletePlayer(removePlayer);
   
  }
  
  
  
  
  
})
