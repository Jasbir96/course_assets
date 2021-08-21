// for v1 => 3

let grid = document.querySelector(".grid");
let allFilters = document.querySelectorAll(".filter");


for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", filterHandler);
}

function filterHandler(e) {
  let filter = e.currentTarget.children[0].classList[0]
  grid.style.backgroundColor = filter.split(
    "-"
  )[0];
}
