angular.module('dojoApp', ['ui.router', 'firebase'])
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
      .state('music', {
      url: '/music',
      templateUrl: "./js/music/musicTmpl.html",
      controller: 'musicCtrl',

})
        .state('basketball', {
        url: '/basketball',
        templateUrl: "./js/basketball/basketballTmpl.html",
        controller: 'basketballCtrl',
})
        .state('player', {
        url: '/basketball/:playerID',
        templateUrl: "./js/basketball/basketballerTmpl.html",
        controller: 'basketballerCtrl',
})
        .state('zen', {
        url: '/zen',
        templateUrl: "./js/zen/zenTmpl.html",
        controller: 'zenCtrl',
})
      .state('home', {
        url: '/',
})
          .state('games', {
          url: '/games',
          templateUrl: "./js/games/gamesTmpl.html",
          controller: 'gamesCtrl',
          });
$urlRouterProvider.otherwise('/');

});
