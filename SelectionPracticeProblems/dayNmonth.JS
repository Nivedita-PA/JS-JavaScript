"use strict";

const prompt = require("prompt-sync")({ sigint: true });

let month = prompt("Enter month: ");
let day = prompt("Enter day: ")

if (month === "march" && day <= 20) {
    console.log(month + " " + day);
} else if (month === "april") {
    console.log(month + " " + day);
} else if (month === "may") {
    console.log(month + " " + day);
} else if (month === "june" && day <= 20) {
    console.log(month + " " + day);
} else {
    console.log("Invalid");
}