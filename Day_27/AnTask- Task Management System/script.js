let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskElement(task) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task-card");
  if (task.completed) {
    taskElement.classList.add("completed");
  }
  taskElement.innerHTML = `
                <div class="task-content">
                    <h3>${task.title}</h3>
                    <p class="task-description">${task.description}</p>
                    <p class="task-due-date">Due: ${task.dueDate}</p>
                </div>
                <div class="task-actions">
                    <button onclick="toggleComplete(${
                      task.id
                    })" class="btn-primary">
                        ${task.completed ? "Undo" : "Complete"}
                    </button>
                    <button onclick="editTask(${
                      task.id
                    })" class="btn-edit">Edit</button>
                    <button onclick="deleteTask(${
                      task.id
                    })" class="btn-delete">Delete</button>
                </div>
            `;
  return taskElement;
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));
  });
}

function addTask(e) {
  e.preventDefault();
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("taskDueDate").value;
  const task = {
    id: Date.now(),
    title,
    description,
    dueDate,
    completed: false,
  };
  tasks.push(task);
  saveTasks();
  displayTasks();
  e.target.reset();
  updateWordCount();
}

function editTask(id) {
  const task = tasks.find((t) => t.id === id);
  document.getElementById("taskTitle").value = task.title;
  document.getElementById("taskDescription").value = task.description;
  document.getElementById("taskDueDate").value = task.dueDate;
  updateWordCount();

  document.getElementById("taskForm").onsubmit = function (e) {
    e.preventDefault();
    task.title = document.getElementById("taskTitle").value;
    task.description = document.getElementById("taskDescription").value;
    task.dueDate = document.getElementById("taskDueDate").value;
    saveTasks();
    displayTasks();
    this.reset();
    this.onsubmit = addTask;
    updateWordCount();
  };
}

function deleteTask(id) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
    displayTasks();
  }
}

function toggleComplete(id) {
  const task = tasks.find((t) => t.id === id);
  task.completed = !task.completed;
  saveTasks();
  displayTasks();
}

function updateWordCount() {
  const description = document.getElementById("taskDescription").value;
  const wordCount = description.trim().split(/\s+/).length;
  const wordCountElement = document.getElementById("wordCount");
  wordCountElement.textContent = `${wordCount} / 100 words`;

  if (wordCount > 100) {
    wordCountElement.style.color = "red";
  } else {
    wordCountElement.style.color = "#aaa";
  }
}

function limitWords(event) {
  const description = event.target.value;
  const words = description.trim().split(/\s+/);
  if (words.length > 100) {
    event.target.value = words.slice(0, 100).join(" ");
  }
  updateWordCount();
}

document.getElementById("taskForm").addEventListener("submit", addTask);
document
  .getElementById("taskDescription")
  .addEventListener("input", limitWords);
displayTasks();
updateWordCount();
