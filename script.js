let result = document.getElementById("result");

function insertValue(value) {
    result.value += value;
}

function clearScreen() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert("Invalid input");
    }
}
