"use strict";

const inputLoginRows = document.querySelector(".input--rows");
const inputLoginCols = document.querySelector(".input--cols");
const main = document.querySelector(".main__matrix");
const row = document.querySelector(".sum-by-cols");
const column = document.querySelector(".sum-by-rows");

const btnLogin = document.querySelector(".login__btn");
const btnAddRow = document.querySelector(".add-row__btn");
const btnDelRow = document.querySelector(".delete-row__btn");
const btnAll = document.querySelector(".btn");

let rows,
  cols,
  matrix = [],
  sumRows = [],
  sumCols = [],
  averageCols = [];

let table = document.createElement("table");

const calcMatrix = function () {
  rows = Number(inputLoginRows.value);
  cols = Number(inputLoginCols.value);

  matrix = [...Array(rows)].map(() => caclRows());
  updateRowsCols();

  return matrix, sumRows, sumCols, averageCols, rows, cols;
};

const createMatrix = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matrix[0].length; j++) {
      let element = document.createElement("td");
      let content = document.createTextNode(matrix[i][j]);

      element.addEventListener("click", function () {
        let tdValue = parseInt(this.innerHTML) + 1;
        this.innerHTML = tdValue;
        matrix[i][j] = tdValue;
        updateRowsCols();
      });
      element.appendChild(content);
      row.appendChild(element);
    }

    table.appendChild(row);
  }
  main.appendChild(table);
};

const updateTable = function () {
  calcMatrix();
  createMatrix(matrix);
};

const updateRowsCols = function () {
  caclSumRows();
  calcAveregeCols();
  displaySumRows(sumRows);
  displaySumCols(averageCols);
};

const caclRows = () =>
  [...Array(cols)].map(() => (Math.random() * 900 + 100) | 0);
const caclSumRows = () =>
  (sumRows = matrix.map((n) => n.reduce((sum, m) => sum + m, 0)));

const calcAveregeCols = function () {
  averageCols = [];
  sumCols = matrix[0].map((n, i) => matrix.reduce((sum, m) => sum + m[i], 0));
  sumCols.forEach((el, i) => {
    averageCols.push(Math.round((el /= matrix.length)));
  });

  return averageCols;
};

const displaySumRows = function (arr) {
  column.innerHTML = "";

  arr.forEach((elem, i) => {
    let cell = document.createElement("div");
    let content = document.createTextNode(elem);
    cell.appendChild(content);
    column.appendChild(cell);
  });
};

const displaySumCols = function (arr) {
  row.innerHTML = "";
  arr.forEach((elem, i) => {
    let cell = document.createElement("div");
    let content = document.createTextNode(elem);
    cell.appendChild(content);
    row.appendChild(cell);
  });
};

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  table.innerHTML = "";
  updateTable();
  updateRowsCols();

  console.log(matrix);
  console.log(`sum for cols is ${sumCols}`);
  console.log(`average for cols is ${averageCols}`);
  console.log(`sum for rows is ${sumRows}`);
  console.log(`rows ${rows} cols ${cols}`);

  btnDelRow.style.opacity = btnAddRow.style.opacity = 100;

  // Clear input fields
  inputLoginRows.blur();
  inputLoginRows.value = inputLoginCols.value = "";
});

btnAddRow.addEventListener("click", function () {
  table.innerHTML = "";

  let newArr = [];
  let newEl;
  for (let i = 0; i < cols; i++) {
    newEl = (Math.random() * 900 + 100) | 0;
    newArr.push(newEl);
  }
  console.log(newArr);
  matrix.push(newArr);
  createMatrix(matrix);
  updateRowsCols(matrix);

  console.log("row added");
});

btnDelRow.addEventListener("click", function () {
  console.log("row deleted");
  table.innerHTML = "";
  matrix.pop();
  createMatrix(matrix);
  updateRowsCols(matrix);
});
