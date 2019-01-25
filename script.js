var numberOne = document.getElementById('no1');
var numberTwo = document.getElementById('no2');
var numberThree = document.getElementById('no3');
var numberFour = document.getElementById('no4');
var numberFive = document.getElementById('no5');
var numberSix = document.getElementById('no6');
var numberSeven = document.getElementById('no7');
var numberEight = document.getElementById('no8');
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');


function handleAddition() {
    answerOne.innerHTML = parseInt(numberOne.value) + parseInt(numberTwo.value);
}


function handleSubtraction() {
    answerTwo.innerHTML = parseInt(numberThree.value) - parseInt(numberFour.value);
}


function handleDivision() {
    answerThree.innerHTML = parseInt(numberFive.value) / parseInt(numberSix.value);
}


function handleMultiplication() {
    answerFour.innerHTML = parseInt(numberSeven.value) * parseInt(numberEight.value);
}

