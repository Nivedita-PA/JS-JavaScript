{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let num = prompt("Enter the number: ");

    let i;
    let table;

    while (2 ** num >= 256) {
        console.log("table of 2**num");
        for (i = 1; i <= 10; i++) {
            table = 2 ** num * i;
            console.log(2 ** num + table);
        }
        num = num + 1;
    }
}