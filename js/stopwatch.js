window.onload = function() {
    // const watchContainer = document.createElement('div')
    // watchContainer.className = 'stopwatch-container'
    // document.body.appendChild(watchContainer)

    // const watch = document.createElement('div')
    // watch.className = 'stopwatch'
    // watchContainer.appendChild(watch)

    // const display = document.createElement('div')
    // display.className = 'display'
    // watch.appendChild(display)

    // const minutesDis = document.createElement('span')
    // minutesDis.id = 'minutes'
    // minutesDis.innerHTML = '00'
    
    // const secondsDis = document.createElement('span')
    // secondsDis.id = 'seconds'
    // secondsDis.innerHTML = '00'

    // const millisecondsDis = document.createElement('span')
    // millisecondsDis.id = 'milliseconds'
    // millisecondsDis.innerHTML = '000'

    // display.appendChild(minutesDis)
    // display.append(':')
    // display.appendChild(secondsDis)
    // display.append(':')
    // display.appendChild(millisecondsDis)

    // const controls = document.createElement('div')
    // controls.className = 'controls'
    // watch.appendChild(controls)

    // for(let i = 0 ; i < 3; i++){
    //     const button = document.createElement('button')
    //     button.id = `button${i}` 
    //     controls.appendChild(button)
    // }

    // const starter = document.getElementById('button0')
    // starter.id = 'start-btn'
    // starter.innerText = 'Start'

    // const pauser = document.getElementById('button1')
    // pauser.id = 'pause-btn'
    // pauser.innerText = 'Pause'

    // const resetter = document.getElementById('button2')
    // resetter.id = 'reset-btn'
    // resetter.innerText = 'Reset'

    // const controls2 = document.createElement('div')
    // controls2.classList.add('controls', 'controls2')
    // watch.appendChild(controls2)
    
    // controls2.append('Space to Start/Lap')
    // controls2.append('Enter to Pause/reset')

    // const lapsContainer = document.createElement('div')
    // lapsContainer.id = 'laps-container'
    // lapsContainer.className = 'lap-counter'
    // watchContainer.appendChild(lapsContainer)


    // const lapsTitle = document.createElement('h3')
    // lapsTitle.innerText = 'Lap Counter'
    // lapsContainer.appendChild(lapsTitle)

    // const clearer = document.createElement('button')
    // clearer.id = 'clearBtn'
    // clearer.innerText = 'Clear'
    // lapsContainer.appendChild(clearer)

    // const unList = document.createElement('ul')
    // unList.id = 'laps'
    // lapsContainer.appendChild(unList)


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
            stopReaction();
            clearLaps();
        }
    });

    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const millisecondsEl = document.getElementById('milliseconds');
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const resetBtn = document.getElementById('reset-btn');
    const clearBtn = document.getElementById('clearBtn')
    const reactionBtn = document.getElementById('reaction-btn')
    const laps = document.getElementById('laps');

    let interval;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;

    function formatTime(timeInMilliseconds) {
        let totalMilliseconds = Math.floor(timeInMilliseconds);
        const totalSeconds = Math.floor(totalMilliseconds / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);

        const milliseconds = totalMilliseconds % 1000;
        const seconds = totalSeconds % 60;
        const minutes = totalMinutes % 60;

        return {
            milliseconds: milliseconds,
            seconds: seconds,
            minutes: minutes,
        };
    }

    function updateDisplay() {
        const time = formatTime(elapsedTime);
        millisecondsEl.textContent = String(time.milliseconds).padStart(3, '0');
        secondsEl.textContent = String(time.seconds).padStart(2, '0');
        minutesEl.textContent = String(time.minutes).padStart(2, '0');
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

    function startReaction() {
        document.body.style.backgroundColor = 'lightgreen'
        start()
    }

    function stopReaction() {
        document.body.style.backgroundColor = 'hsl(0, 0%, 20%)'
    }

    let randomTime = Math.floor(Math.random() * 2500) + 2500



    function reactionTime() {
        document.body.style.backgroundColor = 'orange'
        let timeoutId = setTimeout(startReaction, randomTime);

        addEventListener('keydown', (event) =>{
            if(event.key === 'Enter'){
                clearTimeout(timeoutId)
            }
    })}

    clearBtn.addEventListener('click', clearLaps)
    startBtn.addEventListener('click', start);
    pauseBtn.addEventListener('click', pause);
    resetBtn.addEventListener('click', ()=>{
        reset();
        stopReaction()
    });
    reactionBtn.addEventListener('click', reactionTime)
}
