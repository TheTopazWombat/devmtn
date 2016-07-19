angular.module('pokedex')
  .controller('pokeCtrl', function ($scope, pokeServ) {

    $scope.pokeData = function(num) {
      pokeServ.getPokemon(num);
    };




  });
