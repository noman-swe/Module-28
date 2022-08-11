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
    const productTotal = document.getElementById('case-total');
    productTotal.innerText = price * productNumber;
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
