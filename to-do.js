document
  .getElementById("task-input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

function addTask() {
  var taskInput = document.getElementById("task-input");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskContainer = document.getElementById("tasks");
    var taskElement = document.createElement("div");
    taskElement.className = "task";

    var taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      taskContainer.removeChild(taskElement);
    });

    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(deleteButton);
    taskContainer.appendChild(taskElement);

    taskInput.value = "";
  }
}
