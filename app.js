const ul = document.querySelector("ul");
const form = document.querySelector("#todoList");
const input = document.querySelector("#newTodo");

//write a function to pull from localStorage on app startup, get the todos from localStorage, loop over them and use much of the same logic from form eventListener to put them on the page.
const getFromLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("newTodo")) || [];
  for (let todo of todos) {
    // use logic here from form eventListener to put todos in UL
    const newTodo = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    newTodo.innerText = todo.task;
    ul.appendChild(newTodo);
    newTodo.appendChild(removeBtn);
  }
};

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  newTodo.innerText = input.value + " ";
  input.value = "";
  //   localStorage part
  const savedTodos = JSON.parse(localStorage.getItem("newTodo")) || [];
  savedTodos.push({ task: newTodo.innerText });
  localStorage.setItem("newTodo", JSON.stringify(savedTodos));
  ul.appendChild(newTodo);
  newTodo.appendChild(removeBtn);
});

getFromLocalStorage();
