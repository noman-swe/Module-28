function getCaseNum() {
    const caseNumberInput = document.getElementById('case-number');
    const caseNumberText = caseNumberInput.value;
    const caseNumber = parseFloat(caseNumberText);
    return caseNumber;
}

function updateProductNumber(isIncrease) {
    const caseNumberInput = document.getElementById('case-number');
    const caseNumber = getCaseNum();
    if (isIncrease == true) {
        const totalCase = caseNumber + 1;
        caseNumberInput.value = totalCase;
    } else if (caseNumber > 0) {
        const totalCase = caseNumber - 1;
        caseNumberInput.value = totalCase;
    }


}

// 
function uupdatePrince(itemAmount) {
    // let totalItemPrice = 1;
    const caseTotal = document.getElementById('case-total');
    const casePriceText = caseTotal.innerText;
    const casePrice = parseFloat(casePriceText);
    const totalItemPrice = 59 * itemAmount;
    console.log(casePrice, itemAmount);

    caseTotal.innerText = totalItemPrice;

}

document.getElementById('case-plus').addEventListener('click', () => {
    const itemAmount = updateProductNumber(true);
    // console.log(itemAmount);
    const caseNumber = getCaseNum();
    uupdatePrince(caseNumber);

});

// neg btn
document.getElementById('case-negetive').addEventListener('click', () => {
    updateProductNumber(false);

});