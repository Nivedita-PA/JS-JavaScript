"use strict";

const prompt = require("prompt-sync")({ sigint: true });


let num = prompt("Enter the number: ");

if (num == 1) {
    console.log("unit");
}
if (num == 10) {
    console.log("ten");
}
if (num == 100) {
    console.log("hundread");
}
if (num == 1000) {
    console.log("thousand");
}
if (num == 10000) {
    console.log("ten thousand");
}