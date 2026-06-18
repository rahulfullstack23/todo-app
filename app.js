const enterTask = document.getElementById("enterTask");
const addTask = document.getElementById("addTask");
const clearAll = document.getElementById("clearAll");
const message = document.getElementById("message");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {
  let task = enterTask.value;
  if (task === "") {
    taskList.innerText = "Please enter a task";
    return;
  }

  let li = document.createElement("li");
  li.innerText = task;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  enterTask.value = "";
  message.innerText = "";
});

clearAll.addEventListener("click", function () {
  const task = enterTask.value;
  task === "";
  taskList.innerHTML = "";
  message.innerText = "All Tasks Cleared";
});
