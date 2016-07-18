angular.module("quoteBook").controller("mainCtrl", function($scope, dataService) {

  $scope.getQuotes = function() {
    $scope.quotes = dataService.getQuotes();
  };

  $scope.getQuotes();

  $scope.deleteMe = function(textToRemove) {
    dataService.removeQuote(textToRemove);
  };

  $scope.addQuote = function() {
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    };
    if (dataService.addQuote(newQuote)) {
      $scope.newQuoteText = "";
      $scope.newQuoteAuthor = "";
    }
  };

  // $scope.saveData = function() {
  //
  // };
  //
  // $scope.loadData = function() {
  //   $scope.getQuotes =
  // };

});
