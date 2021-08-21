let body = document.querySelector("body");
let grid = document.querySelector(".grid");
let allFilters = document.querySelectorAll(".filter");
// for v2 => 4 - 1
let addBtn = document.querySelector(".add");

// Does not show red lines below wrong spellings in input areas or input-like areas 
body.spellcheck = false;

for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", filterHandler);
}

//for v2 => 4 - 2
addBtn.addEventListener("click", addEventHandler);

function filterHandler(e) {
  let filter = e.currentTarget.children[0].classList[0];
  grid.style.backgroundColor = filter.split("-")[0];
}

// for v2 => 4 - 3
function addEventHandler(e) {
  let modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = ` <div class="task-to-be-added" data-typed='false' contenteditable>
            Enter your task here
          </div>
          <div class="modal-priority-list">
            <div class="modal-filter-container">
              <div class="modal-pink-filter modal-filter"></div>
              <div class="modal-blue-filter modal-filter"></div>
              <div class="modal-green-filter modal-filter"></div>
              <div class="modal-black-filter modal-filter"></div>
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
  grid.appendChild(modal);
}
