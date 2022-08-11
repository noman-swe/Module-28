function updateProductNumber(productName, isIncrease, totalId) {
    const caseInput = document.getElementById(productName + '-number');
    let caseNumber = caseInput.value;
    if (isIncrease == true) {
        caseNumber = parseFloat(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseFloat(caseNumber) - 1;
    }
    caseInput.value = caseNumber;

    // updateCase Total
    if (totalId == 'case-total') {
        const caseTotal = document.getElementById(totalId);
        caseTotal.innerText = 59 * caseNumber;
    } else {
        const caseTotal = document.getElementById(totalId);
        caseTotal.innerText = 1219 * caseNumber;
    }
}



//phone events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 'phone-total');
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 'phone-total');
});


// case events
document.getElementById('case-plus').addEventListener('click', () => {
    // const itemAmount = updateCaseNumber(true);
    updateProductNumber('case', true, 'case-total');
});
// neg btn for phone case
document.getElementById('case-minus').addEventListener('click', () => {
    updateProductNumber('case', false, 'case-total');

});
