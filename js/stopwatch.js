window.onload = function() {

    document.addEventListener('keydown', (event) => {
        if(!isRunning){
            if (event.code === 'Space') {
                event.preventDefault();
                start();
            }
        } else{
            if (event.code === 'Space') {
                event.preventDefault();
                pause();
            }
        }
        if(event.code === 'Enter'){
            event.preventDefault();
            reset();
        }
    });

    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const millisecondsEl = document.getElementById('milliseconds');
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const resetBtn = document.getElementById('reset-btn');

    // Timer variables
    let interval;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;

    function formatTime(timeInMilliseconds) {
        let totalMilliseconds = Math.floor(timeInMilliseconds);
        const totalSeconds = Math.floor(totalMilliseconds / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);

        const milliseconds = totalMilliseconds % 1000;
        const seconds = totalSeconds % 60;
        const minutes = totalMinutes % 60;
        const hours = totalHours;

        return {
            milliseconds: milliseconds,
            seconds: seconds,
            minutes: minutes,
            hours: hours
        };
    }

    function updateDisplay() {
        const time = formatTime(elapsedTime);
        millisecondsEl.textContent = String(time.milliseconds).padStart(3, '0');
        secondsEl.textContent = String(time.seconds).padStart(2, '0');
        minutesEl.textContent = String(time.minutes).padStart(2, '0');
        hoursEl.textContent = String(time.hours).padStart(2, '0');
    }

    function start() {
        if (isRunning) return;

        isRunning = true;
        startTime = performance.now() - elapsedTime; // Adjust start time for resuming
        interval = setInterval(() => {
            elapsedTime = performance.now() - startTime;
            updateDisplay();
        }, 10); // Update every 10 milliseconds for precision
    }

    function pause() {
        if (!isRunning) return;

        isRunning = false;
        clearInterval(interval);
    }

    function reset() {
        pause();
        elapsedTime = 0;
        updateDisplay();
    }

    // Add event listeners for the buttons
    startBtn.addEventListener('click', start);
    pauseBtn.addEventListener('click', pause);
    resetBtn.addEventListener('click', reset);
};
