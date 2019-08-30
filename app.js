var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var end;
var id;
const pomo_min = "00"
// const pomo_min = document.getElementById("minutes");
const pomo_sec = "14";
var time = `${pomo_min}:${pomo_sec}`;
var isResume = false;
var count = document.getElementById("timer");
count.textContent = time;

function displayTimer() {
    console.log("time = " + time);
    var now = Date.now();
    var distance = end - now;

    if (distance < 0) {
        clearInterval(id);
    }

    var minutes = Math.floor((distance % hour) / minute);
    var seconds = Math.floor((distance % minute) / second);
    var milliseconds = distance % second;


    count.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer(m, s) {
    end = Date.now() + (m * 60 * 1000) +  (s * 1000);
    id = setInterval(displayTimer, 10);
    document.getElementById("pause").style.display = "inline";
    document.getElementById("start").style.display = "none";
}

function pauseTimer() {
    time = timer.textContent;
    clearInterval(id);
    document.getElementById("resume").style.display = "inline";
    document.getElementById("pause").style.display = "none";
    isResume = true;
}

function resumeTimer() {
        var t = time.split(":");
        startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
    document.getElementById("resume").style.display = "none";
    document.getElementById("pause").style.display = "inline";

}

function stopTimer() {
    clearInterval(id);
}

function resetTimer() {
    startTimer();
}

start.addEventListener("click", function () {
    startTimer(pomo_min, pomo_sec);
}, false);

// pause.addEventListener("click", pauseTimer, false);
//
// resume.addEventListener("click", resumeTimer, false);
