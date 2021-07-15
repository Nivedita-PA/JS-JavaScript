{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let upper_limit = prompt("Enter the upperlimit: ");

    let lower_limit = prompt("Enter the lowerlimit: ");

    let i;
    let j;
    let flag = 0;
    for (i = upper_limit; i <= lower_limit; i++) {
        for (j = 2; j < lower_limit - upper_limit; j++) {
            if (i % j == 0) {
                flag = 1;
            }
            break;
        }
        if (flag == 1) {
            console.log(i + " Not Prime");
        } else {
            console.log(i + " Prime");
        }
    }
}