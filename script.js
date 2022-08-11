function updateCaseNumber(isIncrease) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(isIncrease == true){
        caseNumber = parseFloat(caseNumber) + 1;
    }else if(caseNumber > 0) {
        caseNumber = parseFloat(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
     
    // updateCase Total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = 59 * caseNumber;
}

document.getElementById('case-plus').addEventListener('click', () => {
    // const itemAmount = updateCaseNumber(true);
    updateCaseNumber(true);
});
// neg btn
document.getElementById('case-negetive').addEventListener('click', () => {
    updateCaseNumber(false);

});