// app.js

// Select DOM elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from local storage when page loads
document.addEventListener('DOMContentLoaded', loadTasks);

// Event listener for adding a task
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    saveTask(taskText);
    taskInput.value = '';
  }
});

// Function to add task to the list
function addTask(taskText, completed = false) {
  const li = document.createElement('li');
  if (completed) li.classList.add('completed');
  li.textContent = taskText;

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Done';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateTasksInStorage();
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    updateTasksInStorage();
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Save task to local storage
function saveTask(taskText) {
  const tasks = getTasksFromStorage();
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
  const tasks = getTasksFromStorage();
  tasks.forEach(task => addTask(task.text, task.completed));
}

// Update all tasks in local storage
function updateTasksInStorage() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    tasks.push({
      text: li.childNodes[0].textContent.trim(),
      completed: li.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from local storage
function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}
