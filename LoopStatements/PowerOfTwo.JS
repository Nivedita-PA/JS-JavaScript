{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let power = prompt("Give power to 2: ");

    let multiples;
    let n;

    for (n = 1; n <= power; n++) {
        multiples = 2 ** n;
        console.log(multiples);
    }
}