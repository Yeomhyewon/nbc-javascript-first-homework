const d = new Date();

const hours = d.getHours();

function timeAlert() {
  if (hours < 10) {
    alert("good morning");
  } else if (10 <= hours <= 18) {
    alert("good afternoon");
  } else {
    alert("good evening");
  }
}

timeAlert();
