angular.module('app')
  .controller('ctrl', ctrl);

  function ctrl($scope, svc) {
    $scope.hideVal = true;
    $scope.hideValTwo = true;

    $scope.getPlayerStats = function(playerName, playerId){
      svc.getPlayerStats(playerName, playerId).then(function(results){
        console.log(results);
        $scope.hideVal = false;
        $scope.playerStats = {
          avatar: results.avatar,
          username: results.username,
          wins: results.quickGames.wins,
          losses: results.quickGames.lost,
          winrate: Math.round((results.quickGames.wins / results.quickGames.played) * 100) / 100
        };

      });
    };
    $scope.getHeroStats = function(heroName) {
      svc.getHeroStats(heroName)
        .then(function(results){
          $scope.hideValTwo = false;
          $scope.heroData = results;
        });
    };
  }
