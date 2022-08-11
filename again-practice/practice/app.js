function productInputValue(productName){
    const productInput = document.getElementById(productName+'-number');
    const productNumber = parseFloat(productInput.value);
    return productNumber;
}

// calculation
function calculateTotal(){
    const phoneTotal = productInputValue('phone') * 1000;
    const caseTotal = productInputValue('case') * 20;
    const subTotal = phoneTotal + caseTotal;
    document.getElementById('sub-total').innerText = subTotal;
    const tax = subTotal / 10;
    document.getElementById('tax').innerText = tax;
    const totalPrice = subTotal + tax;
    document.getElementById('total').innerText = totalPrice;
    
}

function updateProductTotal(productName, isIncreasing, price){
    const productInput = document.getElementById(productName+'-number');
    let productNumber = productInputValue(productName);
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

document.getElementById('phone-plus').addEventListener('click', ()=> {
    updateProductTotal('phone', true, 1000);
});
document.getElementById('phone-minus').addEventListener('click', ()=> {
    updateProductTotal('phone', false, 1000);
});

// case Event
document.getElementById('case-plus').addEventListener('click', ()=> {
    updateProductTotal('case', true, 20);
});
document.getElementById('case-minus').addEventListener('click', ()=> {
    updateProductTotal('case', false, 20);
});