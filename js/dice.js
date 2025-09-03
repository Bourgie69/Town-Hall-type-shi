const dice = [
    "assets/1.png" ,
    "assets/2.png" ,
    "assets/3.png" ,
    "assets/4.png" ,
    "assets/5.png" ,
    "assets/6.png" 
];

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        delayedRoll();
    }
});

const image = document.getElementById("dice-image");
const image2 = document.getElementById("dice-image2");

image.src = dice[Math.floor(Math.random() * dice.length)];
image2.src = dice[Math.floor(Math.random() * dice.length)];

function rollDice() {
    let index = Math.floor(Math.random() * dice.length);
    image.src = dice[index];
    let index2 = Math.floor(Math.random() * dice.length);
    image2.src = dice[index2];
    document.getElementById("result").innerText = 'You rolled: ' + (index + index2 + 2);
}

function delayedRoll() {

    const result = document.getElementById("result")
    result.innerText = '';

    const intervalId = setInterval(() => {
        image.src = dice[Math.floor(Math.random() * dice.length)];
        image2.src = dice[Math.floor(Math.random() * dice.length)];
}, 100)

    setTimeout(() => {
        clearInterval(intervalId);
        rollDice()
    }, 1000);
} 
