function getInputValue(productName){
    const productInput = document.getElementById(productName+'-number');
    const productNumber = parseFloat(productInput.value);
    return productNumber;
}
// 
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1200;
    const caseTotal = getInputValue('case') * 50;
    const totalTotal = phoneTotal + caseTotal;
    document.getElementById('sub-total').innerText = totalTotal;
    const tax = totalTotal / 10;
    document.getElementById('tax').innerText = tax;
    const totalPrice = totalTotal + tax;
    document.getElementById('total').innerText = totalPrice;
}

// 
function updateProductNumber(productName, isIncreasing, price){
    const productInput = document.getElementById(productName+'-number');
    let productNumber = parseFloat(productInput.value);
    if(isIncreasing == true){
        productNumber = productNumber + 1;
    }
    else if(productNumber > 0){
        productNumber = productNumber - 1;
    }
    productInput.value = productNumber;

    const productTotal = document.getElementById(productName+'-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();
    
}

document.getElementById('phone-plus').addEventListener('click', () => {
    updateProductNumber('phone', true, 1200);
});
document.getElementById('phone-minus').addEventListener('click', () => {
    updateProductNumber('phone', false, 1200);
});
document.getElementById('case-plus').addEventListener('click', () => {
    updateProductNumber('case', true, 50);
});
document.getElementById('case-minus').addEventListener('click', () => {
    updateProductNumber('case', false, 50);
});
