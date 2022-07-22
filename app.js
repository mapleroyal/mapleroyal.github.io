console.log("script is working");

let countdownMins = document.querySelector("#countdown-minutes");
let countdownSecs = document.querySelector("#countdown-seconds");
let reps = document.querySelector("#reps-input");
let workMins = document.querySelector("#work-minutes");
let workSecs = document.querySelector("#work-seconds");
let restMins = document.querySelector("#rest-minutes");
let restSecs = document.querySelector("#rest-seconds");
let cooldownMins = document.querySelector("#cooldown-minutes");
let cooldownSecs = document.querySelector("#cooldown-seconds");
let start = document.querySelector("#start-button");
let totalMins = 0;
let totalSecs = 0;
let minsFromSecs = 0;
let numbersOnlyRegex = /^[0-9]+$/;

let elements = document.querySelectorAll(".time-input");

let minutesUpdater = function () {
  totalMins = 0;
  totalSecs = 0;
  minsFromSecs = 0;

  if (numbersOnlyRegex.test(countdownSecs.value)) {
    totalSecs += parseInt(countdownSecs.value);
  }
  if (numbersOnlyRegex.test(workSecs.value)) {
    totalSecs += parseInt(workSecs.value);
  }
  if (numbersOnlyRegex.test(restSecs.value)) {
    totalSecs += parseInt(restSecs.value);
  }
  if (numbersOnlyRegex.test(cooldownSecs.value)) {
    totalSecs += parseInt(cooldownSecs.value);
  }
  console.log(totalSecs);
  if (totalSecs.toString().length < 2) {
    document.querySelector("#total-seconds").innerText = "0" + totalSecs;
  } else {
    let remainingSecs = totalSecs % 60;
    if (totalSecs > 59) {
      minsFromSecs += Math.floor(totalSecs / 60);
      console.log(`minsFromSecs: ${minsFromSecs}`);
      totalMins += minsFromSecs;
      if (remainingSecs.toString().length < 2) {
        document.querySelector("#total-seconds").innerText =
          "0" + remainingSecs;
      } else {
        document.querySelector("#total-seconds").innerText = remainingSecs;
      }
    } else {
      document.querySelector("#total-seconds").innerText = totalSecs;
    }
  }

  if (numbersOnlyRegex.test(countdownMins.value)) {
    totalMins += parseInt(countdownMins.value);
  }
  if (numbersOnlyRegex.test(workMins.value)) {
    totalMins += parseInt(workMins.value);
  }
  if (numbersOnlyRegex.test(restMins.value)) {
    totalMins += parseInt(restMins.value);
  }
  if (numbersOnlyRegex.test(cooldownMins.value)) {
    totalMins += parseInt(cooldownMins.value);
  }
  if (totalMins.toString().length < 2) {
    document.querySelector("#total-minutes").innerText = "0" + totalMins;
  } else {
    let remainingMins = totalMins % 60;
    if (totalMins > 59) {
      document.querySelector("#total-hours").innerText =
        "0" + Math.floor(totalMins / 60);
      if (remainingMins.toString().length < 2) {
        document.querySelector("#total-minutes").innerText =
          "0" + remainingMins;
      } else {
        document.querySelector("#total-minutes").innerText = remainingMins;
      }
    } else {
      document.querySelector("#total-minutes").innerText = totalMins;
      document.querySelector("#total-hours").innerText = "00";
    }
  }
};

Array.from(elements).forEach(function (element) {
  element.addEventListener("input", minutesUpdater);
});
