// Question 1
const fizzString = (str) => {
    str = str.toLowerCase();

    if ((str.charAt(0) == "f") && (str.charAt(str.length - 1) == "b")) {
        return "FizzBuzz";
    } else if(str.charAt(str.length - 1) == "b") {
        return "Buzz";
    } else if (str.charAt(0) == "f") {
        return "Fizz";
    } else {
        return str;
    }
}

console.log(fizzString("Fab"))


// Question 2
const blueTicket = (a, b, c) => {
    let ab = a + b;
    let bc = b + c;
    let ac = a + c;

    if ((ab == 10) || (bc == 10) || (ac == 10)){
        return 10;
    } else if ((ab == 10) && (ab > bc  || ab > ac)) {
        return 5;
    } else{
        return 0;
    }
}

console.log(blueTicket(6, 1, 4))


// Question 3
const bunnyEars = (int) => {
    return int * 2;
}

console.log(bunnyEars(2));