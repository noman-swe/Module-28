function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
document.getElementById('generate-btn').addEventListener('click', () => {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
});


// catch the value form the keypad
document.getElementById('keypad').addEventListener('click', (event) => {
    const typedNumbers = document.getElementById('display-typedNum');
    const number = event.target.innerText;
    // check number is a integer or not
    if (isNaN(number)) {
        if (number == 'C') {
            typedNumbers.value = '';
        }

    } else {
        const previousNumber = typedNumbers.value;
        const newNumber = previousNumber + number;
        // console.log(newNumber);
        typedNumbers.value = newNumber;
    }
});

document.getElementById('submit-btn').addEventListener('click', function() {
    const generatedPin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('display-typedNum').value;

    const failed = document.getElementById('notify-failed');
    const success= document.getElementById('notify-success');
    if(generatedPin == typedNumber){
        failed.style.display = 'none';
        success.style.display = 'block';
    }else{
        failed.style.display = 'block';
        success.style.display = 'none';
    }
});







