let count;
const timerDisplay = document.querySelector('.disp');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;;
    displayTimeLeft(seconds);

    count = setInterval( function() {
        const secsLeft = Math.round((then - Date.now()) / 1000);

        if(secsLeft < 0) {
            clearInterval(count)
            return;
        }

        displayTimeLeft(secsLeft);

    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    console.log({minutes, remainder});
}
