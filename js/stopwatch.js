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
    const clearBtn = document.getElementById('clearBtn')
    const laps = document.getElementById('laps');

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
        startTime = performance.now() - elapsedTime; 
        interval = setInterval(() => {
            elapsedTime = performance.now() - startTime;
            updateDisplay();
        }, 10); 
    }

    let previousLapTime = 0; 

    function pause() {
        if (!isRunning) return;

        let lapTime = Math.floor(elapsedTime);
        let lapDiff = (lapTime - previousLapTime) / 1000; //
        const li = document.createElement('li');
        li.textContent = `${lapDiff}s`
        laps.appendChild(li);
        previousLapTime = lapTime;
        
        isRunning = false;
        clearInterval(interval);
    }

    function reset() {
        pause();
        elapsedTime = 0;
        previousLapTime = 0;
        updateDisplay();
    }

    function clearLaps() {
        laps.innerHTML = ''
    }

    clearBtn.addEventListener('click', clearLaps)
    startBtn.addEventListener('click', start);
    pauseBtn.addEventListener('click', pause);
    resetBtn.addEventListener('click', reset);
};
