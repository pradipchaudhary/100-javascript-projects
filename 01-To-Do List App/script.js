const buttonEl = document.querySelector("#button");
const todoList = document.querySelector("#todo_list");

buttonEl.addEventListener("click",function(){
    const li = document.createElement("li");
    let inputValue = document.querySelector(".input").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    // Cheack input validation
    if (inputValue === "") {
        alert("Please enter a valid value");
    } else {
        todoList.appendChild(li);
    }
    console.log(inputValue);
    document.querySelector("input").value = "";
});