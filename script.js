var todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length===0){
      console.log("Your todo list is empty!");
    } else {
      console.log("My todos:");
      for(var i=0; i<this.todos.length; i++){
        //console.log(this.todos[i].todoText);
        if (this.todos[i].completed=== true){
          console.log('(x)', this.todos[i].todoText);
        }else {
        console.log ('( )', this.todos[i].todoText);

        }
      }
    }
  },
  addTodo: function(todoText){
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
    this.todos.splice(position,1);
    this.displayTodos();
  },

  toggleCompleted: function(position){
    var todo= this.todos[position];
    todo.completed=!todo.completed;
    this.displayTodos();
  },
//if everything is true, make everything false:
toggleAll:function(){
    var completedTodos = 0;
    var totalTodos = this.todos.length;
    // establish number of completedTodos by iterating thru array:
      for (i=0; i<totalTodos; i++) {
        if (this.todos[i].completed===true){
          completedTodos++;
        }
      }
      // check if condition (is everything true?) is met:
    //case 1: if everything is true (completed), make everything false (not completed):
    /*if (completedTodos === totalTodos) {
      for(var i=0; i<totalTodos; i++){
        this.todos[i].completed = false;
      }
      }
      //otherwise, make everything true (not completed):
      else {
        for(var i=0; i<totalTodos; i++){
          this.todos[i].completed=true;
        }
      }*/

      if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false; // If everything is true, make it false
      }
    } else {
        this.todos[i].completed = true; // Otherwise, make everything true
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
