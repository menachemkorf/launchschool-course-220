function makeList() {
  var todos = [];

  return {
    add: function(newItem) {
      todos.push(newItem);
      console.log(newItem + ' added!');
    },
    remove: function(item) {
      todos.splice(todos.indexOf(item), 1);
      console.log(item + ' removed!');
    },
    list: function() {
      if (todos.length === 0) {
        console.log('There are no items in the list.')
      } else {
        todos.forEach(function(item) {
          console.log(item);
        });
      }
    }
  }
}

var list = makeList();
list.list();
list.add('Make lunch');
list.add('Study');
list.list();
list.remove('Study');
list.list();