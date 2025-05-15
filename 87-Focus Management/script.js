document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.classList.add("task-item");
            taskItem.innerHTML = `
                  <span>${taskText}</span>
                  <button class="complete-btn">Complete</button>
              `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
            taskInput.focus();

            const completeBtn = taskItem.querySelector(".complete-btn");
            completeBtn.addEventListener("click", completeTask);
        }
    }

    function completeTask(event) {
        const taskItem = event.target.closest(".task-item");
        taskItem.classList.toggle("completed");
    }
});
