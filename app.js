var audio = new Audio("./assets/chime.wav");

let pomo_min = 25;
//circle start
let progressBar = document.querySelector(".progress");
let pointer = document.querySelector(".prog-base");
let length = Math.PI * 2 * 100;
var closePopup = document.getElementById("close");

progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
    var offset = -(length - ((length * value) / (timePercent)));
    progressBar.style.strokeDashoffset = offset;
    pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`;
};

//circle ends
const displayOutput = document.querySelector('.display-remain-time');
document.querySelector('.display-remain-time').innerHTML = `${pomo_min}:00`;

let intervalTimer;
let timeLeft;
let wholeTime; // manage this to set the whole time

function timer (seconds){ //counts time, takes seconds
    let remainTime = Date.now() + (seconds * 1000);
    displayTimeLeft(seconds);

    intervalTimer = setInterval(function(){
    timeLeft = Math.round((remainTime - Date.now()) / 1000);
    if(timeLeft < 0){
      clearInterval(intervalTimer);
      stopTimer();
      return ;
    }
    displayTimeLeft(timeLeft);
    }, 1000);
}

function pomodoro(){
    switchTimer();
    pomo_min = 25;
    startTimer(pomo_min);
}

function shortBreak(){
    switchTimer();
    pomo_min = 5;
    startTimer(pomo_min);
}

function longBreak(){
    switchTimer();
    pomo_min = 10;
    startTimer(pomo_min);
}

function startTimer(pomo_min) {
    wholeTime = pomo_min * 60
    timer(wholeTime);
    document.getElementById("pause").style.display = "inline";
    document.getElementById("start").style.display = "none";
}

function pauseTimer() {
    clearInterval(intervalTimer);
    document.getElementById("resume").style.display = "inline";
    document.getElementById("pause").style.display = "none";
}

function resumeTimer() {
    timer(timeLeft);
    document.getElementById("resume").style.display = "none";
    document.getElementById("pause").style.display = "inline";

}

function switchTimer() {
    clearInterval(intervalTimer);
    document.getElementById("start").style.display = "none";
    document.getElementById("pause").style.display = "none";
    document.getElementById("resume").style.display = "none";
}

function stopTimer() {
    switchTimer();
    timer(0);
}


function displayTimeLeft (timeLeft){ //displays time on the input
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  displayOutput.textContent = displayString;
  update(timeLeft, wholeTime);
}

function settingsPopup() {
    document.getElementById("modal-container").style.display = "inline";
}

function closePopup() {
    document.getElementById("modal-container").style.display = "none";
}
