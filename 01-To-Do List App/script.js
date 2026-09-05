const input = document.querySelector(".input");
const addBtn = document.querySelector("#button");
const todoList = document.querySelector("#todo_list");
const count = document.querySelector("#count");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function updateCount() {
    count.textContent = `Task count: ${todos.length}`;
}

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach((todo) => {

        const li = document.createElement("li");

        li.className =
            "list-group-item d-flex justify-content-between align-items-center";

        const span = document.createElement("span");
        span.textContent = todo.text;

        if (todo.completed) {
            span.style.textDecoration = "line-through";
            span.style.opacity = "0.5";
        }

        const btnGroup = document.createElement("div");

        // Complete Button
        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = "✔";
        completeBtn.className = "btn btn-success btn-sm me-2";

        completeBtn.onclick = () => {
            todo.completed = !todo.completed;
            saveTodos();
            renderTodos();
        };

        // Edit Button
        const editBtn = document.createElement("button");
        editBtn.innerHTML = "✏";
        editBtn.className = "btn btn-warning btn-sm me-2";

        editBtn.onclick = () => {

            const newText = prompt("Edit Todo", todo.text);

            if (newText && newText.trim() !== "") {
                todo.text = newText.trim();
                saveTodos();
                renderTodos();
            }

        };

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "🗑";
        deleteBtn.className = "btn btn-danger btn-sm";

        deleteBtn.onclick = () => {

            if (confirm("Delete this task?")) {

                todos = todos.filter(item => item.id !== todo.id);

                saveTodos();

                renderTodos();

            }

        };

        btnGroup.appendChild(completeBtn);
        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnGroup);

        todoList.appendChild(li);

    });

    updateCount();

}

function addTodo() {

    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);

    saveTodos();

    renderTodos();

    input.value = "";

    input.focus();

}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        addTodo();
    }

});

renderTodos();
