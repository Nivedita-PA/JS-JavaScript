"use strict";

const prompt = require("prompt-sync")({ sigint: true });

let year = prompt("Enter the year: ");

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(year + " " + "Leap year");
} else {
    console.log(year + " " + "Not a leap year");
}