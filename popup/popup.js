let tasks = [];
const addTaskBtn = document.getElementById("add-task-btn");

chrome.storage.sync.get(["tasks"], (res) => {
  tasks = res.tasks ? res.tasks : [];
  renderTasks();
});

addTaskBtn.addEventListener("click", () => addTask());

function renderTask(taskNum) {
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  const deleteBtn = document.createElement("input");
  const taskContainer = document.getElementById("task-container");

  text.type = "text";
  text.placeholder = "Enter a task";
  text.value = tasks[taskNum];
  text.addEventListener("change", () => {
    tasks[taskNum] = text.value;
    saveTasks();
  });

  deleteBtn.type = "button";
  deleteBtn.value = "X";
  deleteBtn.addEventListener("click", () => {
    deleteTask(taskNum);
  });

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  taskContainer.appendChild(taskRow);
}

function addTask() {
  const taskNum = tasks.length;

  tasks.push("");
  renderTask(taskNum);
  saveTasks();
}

function deleteTask(taskNum) {
  tasks.splice(taskNum, 1);
  renderTasks(taskNum);
  saveTasks();
}

function renderTasks(taskNum) {
  const taskContainer = document.getElementById("task-container");

  taskContainer.textContent = "";

  tasks.forEach((taskText, taskNum) => {
    renderTask(taskNum);
  });
}

function saveTasks() {
  chrome.storage.sync.set({
    tasks,
  });
}
