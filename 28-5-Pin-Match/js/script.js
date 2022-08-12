document.getElementById('generate-btn').addEventListener('click', () => {
    const pinGenerateField = document.getElementById('display-pin');
    const randomNumbers = Math.round(Math.random()*10000);
    console.log(randomNumbers);
    if(randomNumbers > 999){
        pinGenerateField.value = randomNumbers;
    }
});