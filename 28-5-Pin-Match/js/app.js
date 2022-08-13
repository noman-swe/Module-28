function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
} // -> recuirtion


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

// submit event 
/* document.getElementById('submit-btn').addEventListener('click', function () {
    const typedNumbers = document.getElementById('display-typedNum').value;
    // const pin = getPin();
    const generatedPin = document.getElementById('display-pin').value;
    console.log('typed:', typedNumbers);
    console.log('generated:', generatedPin);


    const failed = document.getElementById('notify-failed');
    const success = document.getElementById('notify-success');
    if(typedNumbers != generatedPin){
        failed.style.display = 'block';
        success.style.display = 'none';
    }else{
        success.style.display = 'block';
        failed.style.display = 'none';

    }
}); */

function verifyPin(){
    const typedNumbers = document.getElementById('display-typedNum').value;
    const generatedPin = document.getElementById('display-pin').value; 
    console.log('typed:', typedNumbers);
    console.log('generated:', generatedPin);

    const failed = document.getElementById('notify-failed');
    const success = document.getElementById('notify-success');
    if(typedNumbers != generatedPin){
        failed.style.display = 'block';
        success.style.display = 'none';
    }else{
        success.style.display = 'block';
        failed.style.display = 'none';

    }
}