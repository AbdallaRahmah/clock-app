const startBtn = document.getElementById("start");

const stopBtn = document.getElementById("stop");

const resetBtn = document.getElementById("reset");

let seconds = document.getElementById("sec");

let minutes = document.getElementById("min");

let hours = document.getElementById("hour");

let watch = {
  hours: 00,
  minutes: 00,
  seconds: 00,

  get getHours() {
    return this.hours;
  },
  set updateHours(val) {
    this.hours = val;
  },

  get getMinutes() {
    return this.minutes;
  },
  set updateMinutes(val) {
    this.minutes = val;
  },

  get getSeconds() {
    return this.seconds;
  },
  set updateSeconds(val) {
    this.seconds = val;
  },
};

startBtn.addEventListener("click", () => {
  stopBtn.removeAttribute("disabled", "");
  startBtn.setAttribute("disabled", "");

  startwatch();

  let id = setInterval(startwatch, 100);

  stopBtn.addEventListener("click", () => {
    stopBtn.setAttribute("disabled", "");
    startBtn.removeAttribute("disabled", "");

    clearInterval(id);
  });

  resetBtn.addEventListener("click", () => {
    stopBtn.setAttribute("disabled", "");
    startBtn.removeAttribute("disabled", "");

    clearInterval(id);

    watch.updateHours = 0;
    watch.updateMinutes = 0;
    watch.updateSeconds = 0;

    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
  });
});

function startwatch() {
  if (watch.getSeconds >= 10) {
    watch.updateSeconds = 0;
    increseMinutes();
  } else {
    watch.updateSeconds = watch.getSeconds + 1;
    if (watch.getSeconds <= 9) {
      seconds.innerHTML = "0" + watch.getSeconds;
    } else {
      seconds.innerHTML = watch.getSeconds;
    }
  }
}

function increseMinutes(val) {
  if (watch.getMinutes > 59) {
    watch.updateMinutes = 0;
    increseHours();
  } else {
    watch.updateMinutes = watch.getMinutes + 1;
    if (watch.getSeconds <= 9) {
      minutes.innerHTML = "0" + watch.getMinutes;
    } else {
      minutes.innerHTML = watch.getMinutes;
    }
  }
}

function increseHours(val) {
  watch.updateHours = watch.getHours + 1;
  if (watch.getHours <= 9) {
    hours.innerHTML = "0" + watch.getMinutes;
  } else {
    hours.innerHTML = watch.getMinutes;
  }
}
