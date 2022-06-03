const displayResultItem = document.getElementById("displayResult");

function press(value) {

    if (displayResultItem.value == "00") {
        displayResultItem.value = 0;
    }else {
        displayResultItem.value += value;
    }
}

function calculate() {
    displayResultItem.value = eval(displayResultItem.value);
}

function clearDisplay() {
    displayResultItem.value = "";
}

function signPlusMinus() {
    displayResultItem.value = 0 - displayResultItem.value
}

//<div jsname="YovRWb" class="XRsWPe MEdqYd" jsaction="A2jXUd" role="button" tabindex="0" aria-label="умножение" data-ved="2ahUKEwiLyJ-0goz4AhVxxosKHYmcCykQz6kIegQIAhAq">×</div>