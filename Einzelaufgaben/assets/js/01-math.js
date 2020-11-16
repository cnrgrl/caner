/**
 * VARIABLES
 */
const three = 3;
const six = 6;
console.log('Hallo');
// add six to three
console.log(six+three);
// subtract six from three
console.log(six-three);
// multiply three times six
console.log(six*three);
// divide three by six
console.log(six/three);
// modulo six by three
console.log(six%three);
// log results
console.log();
// build a function, that:
function neu() {

}
// takes two parameters
function neu(a,b) {

}
// checks if both parameters are numbers, else returns error message in the console
function neu(a,b) {

    if (!isNaN(a) && !isNaN(b)) {

        console.log('give a number');

    }
    else {
        console.log('beide sind nummern');

    }

}
neu();
// divides the first one by the second one

function divide(a,b) {

    return a/b;

}
console.log(divide(six,three));

// adds three to the result of the division
function divad(a,b) {

    return 3+(a/b);
    

}
console.log(divad(21,three));


// multiplies the result by the second parameter
// when the result is equal to 21, subtract 4

// else add 4
// and then returns the result

// log the result of the function