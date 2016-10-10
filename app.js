var addBtn = document.querySelector('#add-btn');
var newTodoInput = document.querySelector('#new-todo-input');
var todoList = document.querySelector('#todo-list');
console.log('this is the app.js');
console.log(aVariable);
var addTodo = function() {
  var newTodoContent = newTodoInput.value;
  var newLI = document.createElement('li');
  var newContent = document.createTextNode('newTodoContent');
  newContent = document.createTextNode(newTodoContent);
  newLI.appendChild(newContent);
  todoList.appendChild(newLI);
  newTodoInput.value = ''; //clearing the input
}
newTodoInput.addEventListener('keypress', function (e) { //When press Enter key, add item (without using the buttom)
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      addTodo();
    }
});
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', function(event) {
  console.log('some click on your children');
  console.log(event.target);
  if (event.target.tagName == 'LI') { // IT HAS TO BE CAPS
    event.target.className = 'done';
    //find out the text in the LI that the user clicked on

    // create new LI element with the text
    var doneLI = document.createElement('li');
    doneLI.className = ('done');
    var newContent = document.createTextNode(event.target.textContent);
    doneLI.appendChild(newContent);
    // append it to the done-list
    document.querySelector('#done-list').appendChild(doneLI);

    // remove the orig LI or the LI that the user clicked on
    todoList.removeChild(event.target);

//-----------------------------------------------------
    // event.target.className = 'done';
    // $('ul#todo-list').find('li.done').appendTo('ul#done-list'); // Pedro's first try
  }
})
