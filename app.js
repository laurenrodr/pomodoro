let count;


function timer(seconds) {
    const now = Date.now();
    console.log(now);
    const then = now + seconds * 1000;
    console.log(then);

    displayTimeLeft(seconds);

    count = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0) {
            clearInterval(count);
            return;
        }

        displayTimeLeft(secondsLeft);

    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    console.log("minutes = " + minutes);
    const remainder = seconds % 60;
    console.log("seconds = " + remainder);
    const display = `${minutes}:${remainder < 10 ? '0' : ''}${remainder}`;
    console.log(display);
    const timerDisplay = document.querySelector('.display-time-left');
    timerDisplay.textContent = display;
}
