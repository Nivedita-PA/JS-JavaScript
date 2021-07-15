{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let num = prompt("Enter the number: ");

    let num1 = 1;
    let harm_val = 1;
    let i;
    for (i = 2; i <= num; i++) {
        //harm_val = harm_val + num1 / i;
        console.log(harm_val + num1 / i);
    }
}