{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let num = Number(prompt("Enter the number: "));

    switch (num) {
        case 0:
            console.log("Monday");
            break;
        case 1:
            console.log("Tuesday");
            break;
        case 2:
            console.log("Wednesday");
            break;
        case 3:
            console.log("Thursday");
            break;
        case 4:
            console.log("Friday");
            break;
        case 5:
            console.log("Saturday");
            break;
        case 6:
            console.log("Sunday");
            break;
    }
}