angular.module('pokedex')
  .controller('pokeCtrl', function ($scope, pokeServ) {

    $scope.defaultHide = true;


    $scope.getPokemon = function(num) {
      num = num.toLowerCase();
      pokeServ.getPokemon(num).then(function(results) {
        $scope.pokeData = results;
        $scope.pokePic = $scope.pokeData.sprites.front_default;
        $scope.defaultHide = false;
        var name = $scope.pokeData.name.toUpperCase();
        $scope.pokeName = name;
        console.log($scope.pokeName);
        $scope.pokeData.types[0].type = $scope.pokeType;
        console.log($scope.pokeType);
      });
    };





  });
