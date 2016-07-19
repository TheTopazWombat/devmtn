// scripts/MainCtrl.js

angular
	.module('avengersApp')
	.controller('MainCtrl', function($scope, dataService) {

		$scope.getHeroes = function(id)  {// javascript hoisting
			dataService.avengers(id).then(function(response) {
				$scope.avengers = response;
			});
		};


		$scope.comics = [
			{name: '3-D Man', id: '22300'},
			{name: 'X-Men', id: '22301'},
			{name: 'Hulk', id: '22302'},
			{name: 'New Warrios', id: '22303'}

		];


	}); // end
