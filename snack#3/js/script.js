function numBetween(array, var1, var2) {

    var array = [];

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

console.log(numBet);