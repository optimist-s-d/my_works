const arrowsUp = document.querySelectorAll(".nc-plus"),
  arrowsDown = document.querySelectorAll(".nc-minus"),
  arrInput = document.querySelectorAll(".values");

const updateDate = function () {
  const d = new Date(),
    day = d.getDate(),
    month = d.getMonth(),
    dateInput = document.querySelectorAll(".date");

  months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  let nameMonth = months[month];
  if (day < 10) {
    dateInput[0].value = "0" + day + " " + nameMonth;
    dateInput[1].value = "0" + (+day + 7) + " " + nameMonth;
  } else {
    dateInput[0].value = day + " " + nameMonth;
    dateInput[1].value = +day + 7 + " " + nameMonth;
  }
};

arrowsUp.forEach(function (item) {
  item.addEventListener("click", function (event) {
    let target = event.target;
    for (let i = 0; i < arrowsUp.length; i++) {
      if (target == arrowsUp[i]) {
        let inputValue = +arrInput[i].value;
        arrInput[i].value = inputValue + 1;
      }
    }
  });
});

arrowsDown.forEach(function (item) {
  item.addEventListener("click", function (event) {
    let target = event.target;
    for (let i = 0; i < arrowsDown.length; i++) {
      if (arrInput[i].value == 0) {
      } else {
        if (target == arrowsDown[i]) {
          let inputValue = +arrInput[i].value;
          arrInput[i].value = inputValue - 1;
        }
      }
    }
  });
});

updateDate();
