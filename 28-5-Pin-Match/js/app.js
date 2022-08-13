function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }

}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumbers = document.getElementById('display-typedNum');
    if (isNaN(number)) {
        if (number == 'C') {
            typedNumbers.value = '';
        }
    }
    else {
        const previousNumber = (typedNumbers.value); //this one is string, integer + string = string;        
        const newNumber = previousNumber + number;
        typedNumbers.value = newNumber;
    }

});
