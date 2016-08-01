angular.module('dojoApp')
.directive('gamesDirt', function() {
  return {
    templateUrl: "./js/games/gameshtml.html",
    restrict: 'E',
    controller: 'gamesCtrl',  
}

});