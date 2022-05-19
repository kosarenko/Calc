console.log('script');

    const displayResultItem = document.getElementById("displayResult");

    function press(value) {
    displayResultItem.value += value;
}

    function calculate() {
    displayResultItem.value = eval(displayResultItem.value);
}

    function clearDisplay() {
    displayResultItem.value = "";
}
