// the buttons var
const startBtn = document.getElementById("start");

// the buttons var
const stopBtn = document.getElementById("stop");

// the buttons var
const resetBtn = document.getElementById("reset");

// the inner elements
let seconds = document.getElementById("sec");

// the inner elements
let minutes = document.getElementById("min");

// the inner elements
let hours = document.getElementById("hour");

// the start button wich make the timer start
startBtn.addEventListener("click", () => {
  
  stopBtn.removeAttribute("disabled", "");

  increse();

  startBtn.setAttribute("disabled", "");

  let id = setInterval(increse, 100);

  // the stop button that stops the timer
  stopBtn.addEventListener("click", () => {
    clearInterval(id);

    stopBtn.setAttribute("disabled", "");

    startBtn.removeAttribute("disabled", "");
  });

  // the reset btn reset the timer to 00 and stop the timer
  resetBtn.addEventListener("click", () => {
    clearInterval(id);

    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";

    stopBtn.setAttribute("disabled", "");

    startBtn.removeAttribute("disabled", "");
  });
});

function increse() {
  let a = checkSeconds(seconds.innerHTML);
  if (a < 0) {
    let b = checkMinutes(minutes.innerHTML);
    if (b < 0) {
      let c = checkHours(hours.innerHTML);
      c++;
      if (a <= 9) {
        hours.innerHTML = "0" + c;
      } else {
        hours.innerHTML = c;
      }
    }
    b++;
    if (a <= 9) {
      minutes.innerHTML = "0" + b;
    } else {
      minutes.innerHTML = b;
    }
  }
  a++;
  if (a <= 9) {
    seconds.innerHTML = "0" + a;
  } else {
    seconds.innerHTML = a;
  }
}
// function check the seconds and return it
function checkSeconds(a) {
  if (a > 10) {
    return -1;
  } else {
    return a;
  }
}
// function check the minutes and return it
function checkMinutes(b) {
  if (b > 59) {
    return -1;
  } else {
    return b;
  }
}
// function check the hours and return it
function checkHours(c) {
  if (c > 59) {
    return -1;
  } else {
    return c;
  }
}
