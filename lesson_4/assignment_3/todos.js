function makeList() {
  var todos = [];

  return function(item) {
    if (item === undefined) {
      if (todos.length === 0) {
        console.log('There are no items in the list.')
      } else {
        todos.forEach(function(item) {
          console.log(item);
        });
      }
    } else {
      var index = todos.indexOf(item);

      if (index === -1) {
        todos.push(item);
        console.log(item + ' added!');
      } else {
        todos.splice(index, 1);
        console.log(item + ' removed!');
      }
    }
  }
}

var list = makeList();
list();
list('Make lunch');
list('Study');
list();
list('Study');
list();