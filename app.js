const input = document.getElementById("todo-input");

const addBtn = document.getElementById("add-btn");

const list = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const text = input.value.trim();
  if (text === "") {
    alert("Please enter a task");
    return;
  }
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(checkbox);

  li.append(" " + text + " ");
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
