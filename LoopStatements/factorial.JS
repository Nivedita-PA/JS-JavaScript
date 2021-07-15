{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let num = prompt("Enter the number: ");

    let flag = 1;
    let i;

    for (i = 2; i <= num; i++) {
        flag = i * flag;
        console.log(flag + " is factorial of " + num);
    }
}