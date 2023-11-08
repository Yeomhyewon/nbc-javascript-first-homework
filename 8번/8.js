const button = document.querySelector("button");

window.addEventListener("scroll", function () {
  // console.log(scrollY);
  if (scrollY >= 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

button.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
