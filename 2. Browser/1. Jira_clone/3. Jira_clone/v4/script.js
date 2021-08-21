let body = document.querySelector("body");
let grid = document.querySelector(".grid");
let allFilters = document.querySelectorAll(".filter");
let addBtn = document.querySelector(".add");

//for v4 => 3.1 (yhase delete ka logic shuru hai)
let deleteBtn = document.querySelector(".delete");
let deleteState = false;

body.spellcheck = false;

for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", filterHandler);
}

addBtn.addEventListener("click", addEventHandler);

function filterHandler(e) {
  let filter = e.currentTarget.children[0].classList[0];
  grid.style.backgroundColor = filter.split("-")[0];
}

// for v3
function addEventHandler(e) {
  // for v4 => 3.5 (jb naya ticket add kr rhe hai to delete state false kr rhe hai)
  deleteState = false;

  deleteBtn.classList.remove("active");
  // *******************7*****************
  
  
  
  let modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `<div class="task-to-be-added" data-typed="false" contenteditable>
            Enter your task here
            </div>
          <div class="modal-priority-list">
          <div class="modal-filter-container">
          <div class="modal-pink-filter modal-filter"></div>
              <div class="modal-blue-filter modal-filter"></div>
              <div class="modal-green-filter modal-filter"></div>
              <div class="modal-black-filter modal-filter modal-filter-active"></div>
              </div>
              </div>`;

  modal
    .querySelector(".task-to-be-added")
    .addEventListener("click", function (e) {
      if (e.currentTarget.getAttribute("data-typed") == "false") {
        e.currentTarget.setAttribute("data-typed", "true");
        e.currentTarget.innerHTML = "";
      }
    });

  let priorityColor = "ticket-color-black";

  let allModalFilters = modal.querySelectorAll(".modal-filter");
  // to set colour of ticket by toggling active class
  // ticket color scheme works in 2 ways
  // 1 - if you select something 2 times the priority color would be set to black
  // 2- else to selected colour
  for (let i = 0; i < allModalFilters.length; i++) {
    allModalFilters[i].addEventListener("click", function (e) {
      if (e.currentTarget.classList.contains("modal-filter-active")) {
        priorityColor = "ticket-color-black";
        e.currentTarget.classList.remove("modal-filter-active");
      } else {
        for (let x = 0; x < allModalFilters.length; x++) {
          if (allModalFilters[x].classList.contains("modal-filter-active"))
            allModalFilters[x].classList.remove("modal-filter-active");
        }

        e.currentTarget.classList.add("modal-filter-active");
        priorityColor =
          "ticket-color-" + e.currentTarget.classList[0].split("-")[1];
      }
    });
  }

  //yhase hum ui pr ticket add kr rhe hai
  modal
    .querySelector(".task-to-be-added")
    .addEventListener("keypress", function (e) {
      if (e.key == "Enter") {
        addTicketToGrid(priorityColor, e.currentTarget.innerText);
        modal.remove();
      }
    });

  grid.appendChild(modal);
}


function addTicketToGrid(color, task) {
  let ticket = document.createElement("div");
  ticket.classList.add("ticket");
  ticket.innerHTML = `<div class="ticket-color ${color}"></div>
          <span class="ticket-id">#${uid()}</span>
          <div class="task" contenteditable>
          ${task}
          </div>`;
  // for v4 => 2.1 (adding click handler for changing ticket color)
  ticket
    .querySelector(".ticket-color")
    .addEventListener("click", ticketColorChanger);
  // for v4 =>  3.3
  ticket.addEventListener("click", deleteTask);
  grid.appendChild(ticket);
}

// for v4 => 2.2 (yha bs ticket ka colour in 4 colour me circular fashion me change kr rhe h)
function ticketColorChanger(e) {
  let allTicketColor = [
    "ticket-color-blue",
    "ticket-color-black",
    "ticket-color-green",
    "ticket-color-pink",
  ];
  currentColorClass = e.currentTarget.classList[1];
  let currIndex = allTicketColor.indexOf(currentColorClass);
  e.currentTarget.classList.remove(currentColorClass);
  currIndex = (currIndex + 1) % 4;
  e.currentTarget.classList.add(allTicketColor[currIndex]);
}

// for v4 => 3.2
// deleteState true krne ka mtlb ki kisi bhi ticket pr click krenge to wo delete hojaiga
deleteBtn.addEventListener("click", function () {
  if (!deleteState) {
    deleteState = true;
    // hover
    deleteBtn.classList.add("active");
  } else {
    deleteState = false;
    deleteBtn.classList.remove("active");
  }
});

// for v4 => 3.4 (actually ticket remove kr rhe hai)

function deleteTask(e) {
  if (deleteState) {
    e.currentTarget.remove();
  }
}
