const display = document.querySelector('#display');
const deleteBtn = document.querySelector('#delet');
const piBtn = document.querySelector('#Pi');

// Add the value clicked to the display
function addToInput(input) {
    display.value += input
    for (let i = 0; i < display.value.length; i++) {
        if (display.value[i] === ",") {
            display.value = display.value.replace(",", ".");
        }
    }
}

// Calculate the result using eval

function calcul() {
    display.value = eval(display.value);
    for (let i = 0; i < display.value.length; i++) {
        if (display.value[i] === ".") {
            display.value = parseFloat(display.value).toFixed(2);
        }
    }
}

// Clear the display

function clearAll() {
    display.value = "";
}

// remove the last character from the display

deleteBtn.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

// Add the value of pi to the display

piBtn.addEventListener("click", () => {
    display.value += Math.PI.toFixed(2);
});