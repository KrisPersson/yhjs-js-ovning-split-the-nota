
function calculateTip(sum, tip) {
    return parseInt(sum) * parseFloat(tip);
}

function divideTotal(total, numberOfFriends) {
    const sumDivided = total / parseInt(numberOfFriends);
    return sumDivided;
}

function showDividedSum(sum) {

    //Lägger till eller tar bort en CSS-klass hide
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');

    //Skriver ut summan i HTML-elementet med ID friendSum
    document.getElementById('friendSum').innerHTML = sum + ' kr';
}

const buttonElem = document.getElementById('calculateButton');

buttonElem.addEventListener('click', () => {
    //Hämtar det som skrivits i inputfältet med ID tip
    const tip = document.getElementById('tip').value;

    //Hämtar det som skrivits i inputfältet med ID numberOfFriends
    const numberOfFriends = document.getElementById('numberOfFriends').value;

    //Hämtar det som skrivits i inputfältet med ID sum
    const sum = document.getElementById('sum').value;

    const calculatedTip = calculateTip(sum, tip);
    const total = parseInt(sum) + calculatedTip;
    const friendSum = divideTotal(total, numberOfFriends);
    
    showDividedSum(friendSum);

});