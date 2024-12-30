const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
console.log("todoList", todoList);
function addTodo() {
    console.log("Add todo...");
    if (todoInput.value == "") {
        console.log("Fill the todo");
        alert("Fill the todo");
    } else {
        const todoItem = document.createElement("li");
        todoItem.textContent = todoInput.value;
        todoList.appendChild(todoItem);
        localStorage.setItem("todo", todoInput.value);
        todoInput.value = "";
    }
}
