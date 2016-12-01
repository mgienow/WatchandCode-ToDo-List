var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!'); // .displayTodos should tell if .todos is empty
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) { // .displayTodos should show .todoText
          console.log('(x)', this.todos[i].todoText); // .displayTodos should show .completed
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) { // Get number of completed todos
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
  /*  if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false; // If everything is true, make it false
      }
    } else {
        this.todos[i].completed = true; // Otherwise, make everything true
      }*/

      for (var i=0; i<totalTodos; i++) {
    if (completedTodos==totalTodos) {
    this.todos[i].completed = false;
    } else {
    this.todos[i].completed=true;
    }
}
    this.displayTodos();
  }
};
var displayTodosButton = document.getElementById("displayTodosButton");
 displayTodosButton.addEventListener('click', function() {
   todoList.displayTodos();
 });
var toggleAllButton = document.getElementById("toggleAllButton");

toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});
