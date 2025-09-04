const guessContainer = document.createElement('div')
guessContainer.className = 'guess-container'
document.body.appendChild(guessContainer)

const hinter = document.createElement('h2')
hinter.id = 'hint'
hinter.innerText = 'Guess between 1-100'
guessContainer.appendChild(hinter)

const previousGuess = document.createElement('p')
previousGuess.id = 'previous'
previousGuess.innerText = 'Previous Guess: '
guessContainer.appendChild(previousGuess)

const inContainer = document.createElement('div')
inContainer.className = 'input-container'
guessContainer.appendChild(inContainer)

const inputter = document.createElement('input')
inputter.id = 'guess-input'
inputter.type = 'number'
inputter.placeholder = 'Enter your guess'

inputter.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        check(inputter.value)
    }
})

inContainer.appendChild(inputter)

const submitter = document.createElement('button')
submitter.id = 'guess-submit'
submitter.innerText = 'Submit'
submitter.addEventListener('click', () =>{
    check(inputter.value)
})

inContainer.appendChild(submitter)


let randomNumber = Math.floor(Math.random() * 100) + 1;


function check(guess){
    const hint = document.getElementById('hint');
    const prev = document.getElementById('previous');
    document.getElementById('guess-input').value = '';
    if (guess == randomNumber) {
        hint.textContent = "You guessed right. The number has changed now.";
        prev.textContent = `Previous Guess: ${guess}`;
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } else if (guess < randomNumber) {
        hint.textContent = "Try a higher number.";
        prev.textContent = `Previous Guess: ${guess}`;
    } else {
        hint.textContent = "Try a lower number.";
        prev.textContent = `Previous Guess: ${guess}`;
    }
}
