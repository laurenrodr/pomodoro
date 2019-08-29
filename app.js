let count;

function timer(seconds) {
    const now = Date.now();
    console.log(now);
    const then = now + seconds * 1000;
    console.log(then);
    displayEndTime(then);

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
    document.title = display;
    const timerDisplay = document.querySelector('.display-time-left');
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const mins = end.getMinutes();
    const endTime = document.querySelector('.display-end-time');
    const twelveHourClock = hour > 12 ? hour - 12 : hour;
    endTime.textContent = `Session will end at ${twelveHourClock}:${mins < 10 ? '0' : ''}${mins}`;
}
