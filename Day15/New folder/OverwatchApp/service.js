angular.module('app')
  .service('svc', svc);

  function svc($http) {
    var playerData, name, id, heroData;
    this.getPlayerStats = function(playerName, playerId) {
      return $http({
        method:'GET',
        url:"https://api.lootbox.eu/pc/us/" + playerName + "-" + playerId + "/profile"
      })
      .then(function(results){
        console.log(results);
        playerData = {
          username: results.data.data.username,
          level: results.data.data.level,
          quickGames: results.data.data.games.quick,
          compGames: results.data.data.games.competitive,
          avatar: results.data.data.avatar,
        };
        if (!name) {
          name = playerName;
          id = playerId;
        }
        return playerData;
      });
    };

    this.getHeroStats = function(heroName) {
      return $http({
        method: "GET",
        url: "https://api.lootbox.eu/pc/us/" + name + "-" + id + "/quick-play/hero/" + heroName + "/"
      })
      .then(function(results){
        console.log(results);
        heroData = {
          avgDmg: results.data["DamageDone-Average"],
          highScoreDmg: results.data["DamageDone-MostinGame"],
          avgElim: results.data["Eliminations-Average"],
          highScoreElim: results.data["Eliminations-MostinGame"],
          timePlayed: results.data.TimePlayed,
          accuracy: results.data.WeaponAccuracy,
          winRate: results.data.WinPercentage
        };
        return heroData;
      });
    };


  }
