console.log('JQuery version of doer');

// $ is a naming convention
var $newTodoInput = $('#new-todo-input');
var $addBtn = $('#add-btn');
var $todoList = $('#todo-list');
var $doneList = $('#done-list');

var addTodo = function () {
  var $newLI = $('<li>').text( $newTodoInput.val() ); // create new LI with value
  $todoList.append($newLI);                          //append to existing UL
  $newTodoInput.val('');                            //clear input field
}
$addBtn.on('click', addTodo);
$todoList.on('click', 'li', function(event) {
  $(event.target)
  //create new LI
  var $doneLI = $('<li>')
      .addClass('done')
      .text(event.target.textContent)
  //append to done UL
  $doneList.append($doneLI);
  // remove exist LI
  $(event.target).remove();
})
$doneList.on('click', 'li', function(event) {
  $(event.target)
  //create new LI
  var $todoLI = $('<li>')
      .text(event.target.textContent)
  //append to done UL
  $todoList.append($todoLI);
  // remove exist LI
  $(event.target).remove();
})
