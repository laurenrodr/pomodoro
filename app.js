var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var end;
var id;
const pomo_min = "00"
// const pomo_min = document.getElementById("minutes");
const pomo_sec = "14";
var time = `${pomo_min}:${pomo_sec}`;
var count = document.getElementById("timer");
count.textContent = time;
var value;
var initialOffset = '100';


// var canvas = document.getElementById("canvas");
// var c = canvas.getContext("2d");
//
// function degToRad(deg){
//     var factor = Math.PI / 180;
//     return deg*factor;
// }

// function renderCanvas() {
//     var length = (Date.now().getSeconds() * 100) / (end - Date.now());
//     console.log("length = " + length);
//
//     var lenDeg = length * 100 / 360;
//     console.log("lenDeg = " + lenDeg);
//
//     c.beginPath();
//     c.arc(250, 250, 200, (1.5 * Math.PI), lenDeg);
//     c.stroke();
// }

function displayTimer() {
    console.log("time = " + time);
    var now = Date.now();
    var distance = end - now;


    var minutes = Math.floor((distance % hour) / minute);
    var seconds = Math.floor((distance % minute) / second);
    var milliseconds = distance % second;

    if (distance < 0) {
        stopTimer();
    }
    else{
        count.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    }

    value = seconds + (minutes * 60 * 1000);

    var interval = setInterval(function() {
    		if (count.textContent == "00:00") {
                clearInterval(interval);
    			return;
            }
        $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/value)));
    }, 1000);

    // renderCanvas();

    //var sim = setInterval(progressSim, 50);

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
    count.textContent = "00:00";
    document.getElementById("start").style.display = "inline";
    document.getElementById("pause").style.display = "none";
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


// var value = 10;
// var initialOffset = '440';
// var i = 1
//
// /* Need initial run as interval hasn't yet occured... */
// // $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
//
// var interval = setInterval(function() {
// 		$('h2').text(i);
// 		if (i == value) {
//             clearInterval(interval);
// 			return;
//         }
//     $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/value)));
//     i++;
// }, 1000);
