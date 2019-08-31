const default_pomo = 25;
const default_short = 5;
const default_long = 10;
const default_delay = 4;

localStorage.setItem("pomo", default_pomo);
localStorage.setItem("short", default_short);
localStorage.setItem("long", default_long);
localStorage.setItem("delay", default_delay);

const pomo_min = document.getElementById("popup-pomo").value;

//circle start
let progressBar = document.querySelector('.e-c-progress');
let indicator = document.getElementById('e-indicator');
let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 100;
var closePopup = document.getElementById("close");

progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
    // var offset = - length - length * value / (timePercent);
    var offset = -(length - ((length * value) / (timePercent)));
    progressBar.style.strokeDashoffset = offset;
    pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`;
};
// var pomoText = `${pomo_min}:00`;
// document.querySelector('.display-remain-time').textContent = pomoText;

//circle ends
const displayOutput = document.querySelector('.display-remain-time')

//const pomo_min = parseInt("1", 10);

let intervalTimer;
let timeLeft;
let wholeTime = pomo_min * 60; // manage this to set the whole time

function timer (seconds){ //counts time, takes seconds
    let remainTime = Date.now() + (seconds * 1000);
    displayTimeLeft(seconds);

    intervalTimer = setInterval(function(){
    timeLeft = Math.round((remainTime - Date.now()) / 1000);
    if(timeLeft < 0){
      stopTimer();
      return ;
    }
    displayTimeLeft(timeLeft);
    }, 1000);
}

function startTimer() {
    timer(wholeTime);
    document.getElementById("pause").style.display = "inline";
    document.getElementById("start").style.display = "none";
}

function pauseTimer(){
    clearInterval(intervalTimer);
    document.getElementById("resume").style.display = "inline";
    document.getElementById("pause").style.display = "none";
}

function resumeTimer() {
    timer(timeLeft);
    document.getElementById("resume").style.display = "none";
    document.getElementById("pause").style.display = "inline";

}

function stopTimer() {
    clearInterval(intervalTimer);
    timer(0);
    document.getElementById("start").style.display = "inline";
    document.getElementById("pause").style.display = "none";
    document.getElementById("resume").style.display = "none";
}

// function resetTimer() {
//     timer(wholeTime);
// }

function displayTimeLeft (timeLeft){ //displays time on the input
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  displayOutput.textContent = displayString;
  update(timeLeft, wholeTime);
}

function settings_popup() {
    document.getElementById("settings-btn").style.display = "block";
}

close.onclick = function() {
    document.getElementById("modal-container").style.display = "none";
}
