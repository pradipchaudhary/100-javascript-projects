

# ✅ To-Do List Application (Beginner Level)

A simple **To-Do List App** where users can:

* Add new tasks.
* Mark tasks as completed.
* Delete tasks.

This project uses **HTML, CSS, and Vanilla JavaScript**.

---

## 🎯 Project Goals

* Learn how to build a basic interactive web application.
* Understand DOM manipulation.
* Practice adding, updating, and removing elements dynamically.

---

## 📂 Folder Structure

```
01-todo-list/
├── index.html       # HTML file (UI Structure)
├── css/
│   └── style.css    # CSS file (Styling)
└── js/
    └── app.js       # JavaScript file (Logic)
```

---

## 🛠 Step 1: Create `index.html`

This is the structure of our To-Do List app.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List App</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="container">
        <h1>To-Do List</h1>
        
    </div>

    <script src="js/app.js"></script>
</body>
</html>
```

---

## 🎨 Step 2: Create `style.css`

This will make the app look clean and professional.

```css
body {
    font-family: Arial, sans-serif;
    background-color: #0a0e27;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #151a40;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

h1 {
    text-align: center;
}

```

---

## 💻 Step 3: Create `app.js`

This will handle the interactivity using **Vanilla JavaScript**.

```javascript
// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create task element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Mark as completed on click
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering li click
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear input
});
```

---

## 🧑‍💻 How it works:

| 🛠 Feature        | 🔑 Action                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------- |
| **Add Task**      | User types task and clicks `Add Task`. A new `li` is created with text and delete button. |
| **Complete Task** | User clicks on task text (`li`), toggles `.completed` class (strike through).             |
| **Delete Task**   | User clicks `X` button to remove task from the list.                                      |

---

## 🎉 Skills Learned

* Basic HTML structure.
* Styling with modern CSS and good UI/UX practices.
* DOM manipulation with Vanilla JavaScript.
* Event handling (`click`, `addEventListener`).
* Dynamic creation and deletion of elements.

---

## ✅ Next Improvements (For Practice)

* Store tasks in **localStorage** so they persist after refreshing.
* Add **Edit Task** feature.
* Use **JavaScript classes or modules** to make code more organized.

