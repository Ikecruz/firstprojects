// function speed(speed, birthday) {
//     var score = null;

//     if (birthday == true) {
//         speed -= 5;
//     }

//     if (speed <= 60) {
//         score = 0;
//     } else if (speed <= 80) {
//         score = 1;
//     } else if (speed >= 81) {
//         score = 2;
//     }

//     console.log("Speed is: " + speed);
//     console.log("Score is: " + score);

// }
// speed(61, true);

// function party(tea, candy) {
//     var score = null;

//     if (tea >= 5 && candy >= 5) {
//         score = 1;
//     }

//     if ((tea >= (candy * 2)) || (candy >= (tea * 2))) {
//         score = 2;
//     }

//     if (tea <= 5 && candy <= 5) {
//         score = 0;
//     }

//     console.log("Tea: " + tea);
//     console.log("Candy: " + candy);
//     console.log("Score: " + score);

// }

// // party(5, 9)

// function blackjack(firstNum, secondNum) {
//     var score = null;

//     // Variable to get difference
//     var firstNumdif = null;
//     var secondNumdif = null;

//     // Calculate difference
//     firstNumdif = 21 - firstNum;
//     secondNumdif = 21 - secondNum;

//     if (firstNum <= 21 && secondNum <= 21) {
//         if (firstNumdif >= secondNumdif ) {
//             score = secondNum;
//         } else {
//             score = firstNum;
//         }
//     }

//     if (firstNum > 21 && secondNum <= 21) {
//         score = secondNum
//     }

//     if (firstNum <= 21 && secondNum > 21) {
//         score = firstNum
//     }

//     if (firstNum > 21 && secondNum > 21) {
//         score = 0;
//     }

//     console.log("First Number: " + firstNum);
//     console.log("Second Number: " + secondNum);
//     console.log(score)

// }

// blackjack(0, 20)

// const que1 = (cusarray) => {
//     let newarray = [];
//     let sum = 1
    
//     for (let i = 0; i < cusarray.length; i++) {
        
//         for (let j = 0; j < cusarray.length; j++) {
//             if (cusarray[j] !== cusarray[i]) {
//                 sum = sum * cusarray[j]
//             }
//         }

//         newarray.push(sum)
//         sum = 1;
//     }
    
//     console.log(newarray)
// }
// /*que1([1, 2, 2]);*/

// function test(num){
//     num += 1;
    
//     if (num >= 10) {
//      return "Yea";
//     } else {
//       return test(num)
//     }
// }

// console.log(test(1));

const que1 = (cusarray) => {
    cusarray.sort;
    let newarr = [];

    for (let i = 0; i < cusarray.length; i++) {
        if (!newarr.includes(cusarray[i])) {
            newarr.push(cusarray[i]);
        }
    }

    console.log(newarr)
}

// que1([1, 1, 1, 1, 2, 2, 2, 3, 4, 5]);

const que2 = (cusarray) => {
    let sum = 0;
    
    while ( cusarray.length > 2) {
        let a = 0;
        let b = 0;
        let c = 0;

        a = cusarray.shift();
        b = cusarray.shift();
        c = cusarray.shift();

        if (b > a && b > c) {
            sum += b;
        } else {
            sum += a;
            cusarray.unshift(c)
        }
    }
    sum += Math.max(...cusarray)
    return sum;
}

console.log(que2([5, 1, 1, 5]))