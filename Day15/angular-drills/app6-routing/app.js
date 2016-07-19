angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('list', {
        url: "/list",
        controller: "ctrl",
        templateUrl: "/views/list-tmpl.html",

      });
  });
