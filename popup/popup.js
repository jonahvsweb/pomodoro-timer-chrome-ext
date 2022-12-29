const tasks = [];
const addTaskBtn = document.getElementById("add-task-btn");

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
}

function deleteTask(taskNum) {
  tasks.splice(taskNum, 1);
  renderTasks(taskNum);
}

function renderTasks(taskNum) {
  const taskContainer = document.getElementById("task-container");

  taskContainer.textContent = "";

  tasks.forEach((taskText, taskNum) => {
    renderTask(taskNum);
  });
}
