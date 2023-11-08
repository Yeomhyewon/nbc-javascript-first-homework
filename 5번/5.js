const number = document.querySelectorAll(".number");

// console.log(number);
// console.log(number[0].textContent);

for (let i = 0; i < number.length; i++) {
  // console.log(Number(number[i].textContent) + 10);
  num = Number(number[i].textContent) + 10;
  number[i].innerHTML = num;
}
