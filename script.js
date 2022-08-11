// 
function getInputValue(productName){
    const productInput = document.getElementById(productName+'-number');
    const productNumber =  parseFloat(productInput.value);
    return productNumber;
}

// 
function calculateTotal(){   
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59; 
    const subTotal = phoneTotal + caseTotal;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    const tax = (subTotal / 5);
    document.getElementById('tax').innerText = tax;
    const totalPrice = subTotal + tax;
    document.getElementById('total').innerText = totalPrice;
}


function updateProductNumber(productName, isIncrease, price) {
    const productInput = document.getElementById(productName + '-number');
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseFloat(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseFloat(productNumber) - 1;
    }
    productInput.value = productNumber;
    // updateCase Total
    const productTotal = document.getElementById(productName+'-total');
    productTotal.innerText = price * productNumber;

    calculateTotal();
}

//phone events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219);
});


// case events
document.getElementById('case-plus').addEventListener('click', () => {
    // const itemAmount = updateCaseNumber(true);
    updateProductNumber('case', true, 59);
});
// neg btn for phone case
document.getElementById('case-minus').addEventListener('click', () => {
    updateProductNumber('case', false, 59);

});
