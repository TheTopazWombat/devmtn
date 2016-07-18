angular.module("quoteBook")
  .controller("mainCtrl", function($scope, dataService) {

  $scope.getQuotes = function() {
    $scope.quotes = dataService.getQuotes();
  };

  $scope.getQuotes();

  $scope.addQuote = function() {
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    };
    if (dataService.addQuote(newQuote)) {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    }
  };

  $scope.deleteMe = function(textToRemove) {
    dataService.removeQuote(textToRemove);
  };
});

//angular.module("quoteBook").controller("mainCtrl", function($scope, dataService) {
//
//   $scope.getQuotes = function() {
//     $scope.quotes = dataService.getQuotes();
//   };
//
//   $scope.getQuotes();
//
//   $scope.deleteMe = function(textToRemove) {
//     dataService.removeQuote(textToRemove);
//   };
//
//   $scope.addQuote = function() {
//     var newQuote = {
//       text: $scope.newQuoteText,
//       author: $scope.newQuoteAuthor
//     };
//     if (dataService.addQuote(newQuote)) {
//       $scope.newQuoteText = "";
//       $scope.newQuoteAuthor = "";
//     }
//   };
