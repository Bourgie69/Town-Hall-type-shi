let randomNumber = Math.floor(Math.random() * 100) + 1;


function submit(){
    const submit = document.getElementById('guess-submit');        
    const guess = document.getElementById('guess-input').value;
    submit.addEventListener('click', () => {
        check(guess);
    });
};

function check(guess){
    const hint = document.getElementById('hint');
    const prev = document.getElementById('previous');
    document.getElementById('guess-input').value = '';
    if (guess == randomNumber) {
        hint.textContent = "You guessed right. The number has changed now.";
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } else if (guess < randomNumber) {
        hint.textContent = "Try a higher number.";
        prev.textContent = `Previous Guess: ${guess}`;
    } else {
        hint.textContent = "Try a lower number.";
        prev.textContent = `Previous Guess: ${guess}`;
    }
}
