{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let num = Number(prompt("Enter the number: "));

    function palindrome(num) {
        while (num > 0) {
            let number;
            rev = 0;
            while (num > 0) {
                let rem = num % 10;
                rev = rev * 10 + rem;
                number = num / 10
            }
            if (num == rev) {
                console.log("Palindrome");
            } else {
                console.log("Not Palindrome");
            }
        }
    }

    let call = palindrome(num);
}