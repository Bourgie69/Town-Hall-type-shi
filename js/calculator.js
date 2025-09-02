import {
    appendToDisplay,
    clearDisplay,
    calculateResult,
    percent,
    toggleSign
} from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const calc = document.createElement('div')
    calc.id = 'calc'
    document.body.appendChild(calc)

    const display = document.createElement('input')
    display.id = 'display'
    display.readOnly = true
    calc.appendChild(display)
        
    const keys = document.createElement('div')
    keys.id = 'keys'
    calc.appendChild(keys)

    for(i = 0; i < 10; i++) {
        const button = document.createElement('button')
        button.textContent = i
        button.onclick = () => appendToDisplay(i)
        keys.appendChild(button)
    }
})


