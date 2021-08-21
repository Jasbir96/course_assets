let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let task = input.value;
    if (!task) {
      alert("Error - Adding empty task");
      return;
    }
    document.querySelector("input").value = "";
    let li = document.createElement("li");
    li.innerText = task;
    li.classList.add("tasklist-item");

    li.addEventListener("dblclick", dbClickHandler);
    ul.appendChild(li);
  }
});

function dbClickHandler(event) {
  event.currentTarget.remove();
}
