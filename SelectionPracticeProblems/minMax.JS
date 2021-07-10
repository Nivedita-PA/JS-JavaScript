let num1 = Math.floor(Math.random() * (999 - 100) + 100);
let num2 = Math.floor(Math.random() * (999 - 100) + 100)
let num3 = Math.floor(Math.random() * (999 - 100) + 100);
let num4 = Math.floor(Math.random() * (999 - 100) + 100);
let num5 = Math.floor(Math.random() * (999 - 100) + 100);

console.log("Numbers are: " + num1 + "," + num2 + "," + num3 + "," + num4 + "," + num5);

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log("Greatest number: " + num1);
} else if (num2 > num3 && num2 > num4 && num2 > num5) {
    console.log("Greatest number: " + num2);
} else if (num3 > num4 && num3 > num5) {
    console.log("Greatest number: " + num3);
} else if (num4 > num5) {
    console.log("Greatest number: " + num4);
} else {
    console.log("Greatest number: " + num5);
}

if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
    console.log("Smallest number: " + num1);
} else if (num2 < num3 && num2 < num4 && num2 < num5) {
    console.log("Smallest number: " + num2);
} else if (num3 < num4 && num3 < num5) {
    console.log("Smallest number: " + num3);
} else if (num4 < num5) {
    console.log("Smallest number: " + num4);
} else {
    console.log("Smallest number: " + num5);
}