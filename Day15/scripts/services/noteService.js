angular.module('notesApp')
  .service('noteService', noteService);

  function noteService($q) {
    this.saveNote = function(newNote) {
      var existingEntries = JSON.parse(localStorage.getItem('notes'));
      if (!existingEntries) {
        existingEntries = [];
      }
      // localStorage.setItem('notes', JSON.stringify(newNote));
      existingEntries.push(newNote);
      localStorage.setItem('notes', JSON.stringify(existingEntries));

    };
    this.getNotes = function() {
      var deferred = $q.defer();
      JSON.parse(localStorage.getItem('notes'));

      deferred.resolve(JSON.parse(localStorage.getItem('notes')));

      return deferred.promise;

    };
  }
