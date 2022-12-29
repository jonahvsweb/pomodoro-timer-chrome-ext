const tasks = [];
const addTaskBtn = document.getElementById("add-task-btn");

addTaskBtn.addEventListener("click", () => addTask());

function addTask() {
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  const deleteBtn = document.createElement("input");
  const taskContainer = document.getElementById("task-container");
  const tasksNum = tasks.length;

  tasks.push("");

  text.type = "text";
  text.placeholder = "Enter a task";
  text.addEventListener("change", () => {
    tasks[tasksNum] = text.value;
  });

  deleteBtn.type = "button";
  deleteBtn.value = "X";
  deleteBtn.addEventListener("click", () => {
    tasks.splice(tasksNum, 1);
  });

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  taskContainer.appendChild(taskRow);
}
