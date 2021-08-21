let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");

let allCells = document.querySelectorAll(".cell");

let addressInput = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let lastSelectedCell;

cellsContentDiv.addEventListener("scroll", function (e) {
  let top = e.target.scrollTop;
  let left = e.target.scrollLeft;

  topRow.style.top = top + "px";
  topLeftCell.style.top = top + "px";
  topLeftCell.style.left = left + "px";
  leftCol.style.left = left + "px";
});

for (let i = 0; i < allCells.length; i++) {
  allCells[i].addEventListener("click", function (e) {
    let rowId = Number(e.target.getAttribute("rowid"));
    let colId = Number(e.target.getAttribute("colid"));
    let cellObject = db[rowId][colId];
    let address = String.fromCharCode(65 + colId) + (rowId + 1) + "";
    addressInput.value = address;
    formulaInput.value = cellObject.formula;

    // This will show collaborator name on other clients
    socket.emit("cellClick", { rowId, colId, address });

    console.log(db);
  });

  allCells[i].addEventListener("blur", function (e) {
    lastSelectedCell = e.target;
    let cellValue;
    if(lastSelectedCell.childNodes.length>1){
        cellValue = lastSelectedCell.childNodes[0].textContent;
    }
    else{
        cellValue = e.target.textContent;
    }

    let rowId = e.target.getAttribute("rowid");
    let colId = e.target.getAttribute("colid");
    let cellObject = db[rowId][colId];

    if (cellObject.value == cellValue) {
      return;
    }

    if (cellObject.formula) {
      removeFormula(cellObject);
      //formulaInput value = ""
      formulaInput.value = "";
    }

    // db update , cellobject value if not same
    cellObject.value = cellValue;

    // updateChildrens
    updateChildrens(cellObject);
  });

  allCells[i].addEventListener("keydown", function (e) {
    if (e.key == "Backspace") {
      let cell = e.target;
      let { rowId, colId } = getRowIdColIdFromElement(cell);
      let cellObject = db[rowId][colId];
      if (cellObject.formula) {
        cellObject.formula = "";
        formulaInput.value = "";
        removeFormula(cellObject);
        cell.textContent = "";
      }
    }
  });

  allCells[i].addEventListener("keypress", function (e) {
    socket.emit("keypress", e.key);
  });
}

// when someone leaves the formula input !!
formulaInput.addEventListener("blur", function (e) {
  let formula = e.target.value;
  // ( A1 + A2 )
  if (formula) {
    let { rowId, colId } = getRowIdColIdFromElement(lastSelectedCell);
    let cellObject = db[rowId][colId];

    // if cellObject already had a formula
    if (cellObject.formula) {
      removeFormula(cellObject);
    }

    let computedValue = solveFormula(formula, cellObject);
    // formula update
    cellObject.formula = formula;
    // cellObject value update
    cellObject.value = computedValue;
    // ui update
    lastSelectedCell.textContent = computedValue;
    // update childrens !!!
    updateChildrens(cellObject);
  }
});
