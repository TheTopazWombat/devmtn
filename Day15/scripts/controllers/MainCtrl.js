angular.module('notesApp')
  .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope, noteService) {
    $scope.saveNote = function(newNote) {
      noteService.saveNote(newNote);
      getNotes();
      $scope.note.title = '';
      $scope.note.content = '';
    };
    function getNotes() {
      noteService.getNotes().then(function(response){
        $scope.notes = response;
        console.log($scope.notes);
      });
    }

    getNotes();
  }
