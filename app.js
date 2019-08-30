var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var end;
var id;
var time = "00:00";

function displayTimer() {
    var now = Date.now();
    var distance = end - now;

    if (distance < 0) {
        clearInterval(id);
        // expiry code goes here
    }

    var minutes = Math.floor((distance % hour) / minute);
    var seconds = Math.floor((distance % minute) / second);
    var milliseconds = distance % second;
    var count = document.getElementById('timer');

    count.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer(m, s) {
    end = Date.now() + (m * 60 * 1000) +  (s * 1000);
    id = setInterval(displayTimer, 10);
}

function pauseTimer() {
    time = timer.textContent;
    clearInterval(id);
}

function resumeTimer() {
    var t = time.split(":");
    startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
}

start.addEventListener("click", function () {
    startTimer(0, 25);
}, false);

pause.addEventListener("click", pauseTimer, false);

resume.addEventListener("click", resumeTimer, false);
