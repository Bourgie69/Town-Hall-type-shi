const dice = [
    { value: 1, image: "assets/1.png" },
    { value: 2, image: "assets/2.png" },
    { value: 3, image: "assets/3.png" },
    { value: 4, image: "assets/4.png" },
    { value: 5, image: "assets/5.png" },
    { value: 6, image: "assets/6.png" }
];

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        delayedRoll();
    }
});

const image = document.getElementById("dice-image");
const image2 = document.getElementById("dice-image2");

image.src = dice[Math.floor(Math.random() * dice.length)].image;
image2.src = dice[Math.floor(Math.random() * dice.length)].image;

function rollDice() {
    let index = Math.floor(Math.random() * dice.length);
    image.src = dice[index].image;
    let index2 = Math.floor(Math.random() * dice.length);
    image2.src = dice[index2].image;
    document.getElementById("result").innerText = 'You rolled: ' + (dice[index].value + dice[index2].value);
}

function delayedRoll() {

    const result = document.getElementById("result")
    result.innerText = '';

    const intervalId = setInterval(() => {
        image.src = dice[Math.floor(Math.random() * dice.length)].image;
        image2.src = dice[Math.floor(Math.random() * dice.length)].image;

        if(result.innerText !== '') {
            clearInterval(intervalId);
    }
}, 100)

    setTimeout(rollDice, 1000);
}
