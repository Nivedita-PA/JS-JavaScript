{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let num = Number(prompt("Enter the number: "));

    console.log(num);

    switch (num) {
        case 1:
            console.log("unit");
            break;
        case 10:
            console.log("ten");
            break;
        case 100:
            console.log("hundread");
            break;
        case 1000:
            console.log("thousand");
            break;
        case 10000:
            console.log("ten-thousand");
            break;
        default:
            console.log("Invalid");
    }
}