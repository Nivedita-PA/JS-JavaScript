{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let num = prompt("Enter the number: ");

    let i;
    for (i = 1; i < num; i++) {
        while (num % i == 0) {
            console.log(i + " is prime factor of " + num);
            i += i;
        }
    }
}