const addTaskBtn = document.getElementById("add-task-btn");

addTaskBtn.addEventListener("click", () => addTask());

function addTask() {
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  const deleteBtn = document.createElement("input");
  const taskContainer = document.getElementById("task-container");

  text.placeholder = "Enter a task";

  deleteBtn.type = "button";
  deleteBtn.value = "X";

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  taskContainer.appendChild(taskRow);
}
