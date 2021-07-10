{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });


    let a = prompt("Enter the number 1: ");
    let b = prompt("Enter the number 2: ");
    let c = prompt("Enter the number 3: ");

    if (a > b && a > c) {
        console.log(a + " " + "is greatest");
    } else if (b > c) {
        console.log(b + " " + "is greatest");
    } else {
        console.log(c + " " + "is greatest");
    }

    if (a < b && a < c) {
        console.log(a + " " + "is smallest");
    } else if (b < c) {
        console.log(b + " " + "is smallest");
    } else {
        console.log(c + " " + "is smallest");
    }

    //1
    let op1 = a + b * c;
    console.log("Operation 1" + " " + op1);

    //2
    let op2 = a % b + c;
    console.log("Operation 2" + " " + op2);

    //3
    let op3 = c + a / b;
    console.log("Operation 3" + " " + op3);

    //
    let op4 = a * b + c;
    console.log("Operation 4" + " " + op4);

}