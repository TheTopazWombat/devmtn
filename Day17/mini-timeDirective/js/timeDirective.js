angular.module('timeApp')
  .directive('showTime', showTime);

  function showTime(){

    return{
      restrict: 'E',
      template: "<div>The current time is {{time}}</div>",
      link: function(scope, element, attrs) {
        var currentTime = new Date();
        scope.time = currentTime.toString();
      }
    };
  }
