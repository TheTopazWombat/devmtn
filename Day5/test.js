// Sort the object's values by a criterion produced by an iterator.
// If iterator is a string, sort objects by that property with the name
// of that string. For example, _.sortBy(people, 'name') should sort
// an array of people by their name.
_.sortBy = function(collection, iterator) {
  if (typeof(iterator) === 'string') {
    var arg = iterator;
    iterator = function(obj) {
      return obj[arg];
    };
  }

  var nullValues = [];

  function sorter() {
    var swap = false;

    for (var i = 0; i < collection.length-1; i++) {

      if (iterator(collection[i]) === undefined) {
        nullValues.push(collection[i]);
        collection.splice(i, 1);
      }
      else if ((iterator(collection[i])) <= iterator(collection[i+1])) {
        continue;
      }
      else {
        swap = true;
        var store = collection[i+1];
        collection[i+1] = collection[i];
        collection[i] = store;
      }
    }
    // Keep swapping until everything is in order.
    if(swap) { return sorter(); }
  }

  sorter();
  nullValues.forEach(function(x) {
    collection.push(x);
  });
  return collection;
};
