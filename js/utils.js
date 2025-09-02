const display = document.getElementById("display")


function clearDisplay() {
    display.value = "";
}

function toggleSign(){
    display.value = -display.value;
}

function percent() {
    display.value = display.value / 100;
}

function appendToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    display.value = eval(display.value);
}

