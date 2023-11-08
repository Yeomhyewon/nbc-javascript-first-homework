const number = document.querySelector(".number");
// console.log(number.textContent);

let count = Number(number.textContent);

const interval = setInterval(function () {
  if (count < 10) {
    count = count + 1;
    number.innerHTML = count;
  } else {
    clearInterval(interval);
  }
}, 1000);
