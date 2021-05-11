function numBetween(array, var1, var2) {

    for (var i = (var1 + 1); i < var2; i++) {

        array.push(i);

    }

    return array;

}

var num1;
var num2;
var numBet = [];

do {
    num1 = parseInt(prompt("Please insert a number"));
} while (isNaN(num1))

do {
    num2 = parseInt(prompt("Please insert another number"));
} while (isNaN(num2))

if (num1 > num2) {

    numBet = numBetween(numBet, num2, num1);

} else if (num1 < num2) {

    numBet = numBetween(numBet, num1, num2);

} else {

    alert("You inserted the same number twice! Please refresh the page");

}

var choosenNumbers = document.getElementById("choosen-numbers");
var checkNumbers = document.getElementById("check-numbers");
var numbersBetween = document.getElementById("numbers-between");

choosenNumbers.innerHTML = "You chose " + num1 + " and " + num2 + ". Between them there are " + numBet.length + " numbers.";

checkNumbers.classList.add("visible");

checkNumbers.addEventListener("click", function() {

    choosenNumbers.classList.add("hidden");
    checkNumbers.classList.remove("visible");
    numbersBetween.classList.add("visible");
    for (var k = 0; k < numBet.length; k++) {
        
        numbersBetween.innerHTML += "<li>" + numBet[k] + "</li>";
    
    }

});