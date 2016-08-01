angular.module('dojoApp')
.service('basketballService', function($firebaseObject, $firebaseArray){
var url = 'http://basketballplayers.firebaseio.com/';



this.getPlayers = function(){
    var ref = new Firebase(url+ 'players')
      return $firebaseArray(ref);
  }

  this.getPlayer = function(playerID) {
  var ref = new Firebase(url+ 'players/'+ playerID)
  return $firebaseObject(ref);
}

  this.addPlayer = function(newPlayer) {
      var ref = new Firebase(url+ 'players')
      return $firebaseArray(ref).$add(newPlayer);
    }

this.deletePlayer = function(removePlayer) {
    var ref = new Firebase(url + 'players/' + removePlayer);
    var playerObj = $firebaseObject(ref);
    playerObj.$remove();
    
   
}
this.editThisPlayer = function(editPlayer){
    var ref = new Firebase(url + 'players/' + editPlayer.id);
   var nameSwitch = $firebaseObject(ref);
   nameSwitch.name = editPlayer.name;
    nameSwitch.team = editPlayer.team;
     nameSwitch.age = editPlayer.age;
      nameSwitch.salary = editPlayer.salary;
//    nameSwitch.team = "player.team";
//    nameSwitch.age = "player.age";
//    nameSwitch.salary = "player.salary";
   nameSwitch.$save()
    };


})
