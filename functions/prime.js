{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let num = Number(prompt("Enter the number: "));

    function prime(num) {
        let flag = 0;
        let i;
        for (i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = 1;
            }
            break;
        }
        if (flag == 1) {
            console.log("Not Prime");
        } else {
            console.log("Prime");
        }
    }
    let call = prime(num);
}