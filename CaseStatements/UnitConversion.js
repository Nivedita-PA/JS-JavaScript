{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let length = Number(prompt("Enter the length in feet: "));

    console.log("Enter 1: To convert feet in inches");
    console.log("Enter 2: To convert feet in meters");
    console.log("Enter 3: To convert inches in feet");
    console.log("Enter 4: To convert meters in feet");

    let choice = prompt("Enter choice: ");
    switch (choice) {
        case 1:
            let length_In_Inches = length * 12;
            console.log("length in inches: " + length_In_Inches);
            break;

        case 2:
            let length_In_meteres = length * 0.30;
            console.log("length in meteres: " + length_In_meteres);
            break;

        case 3:
            let length_In_Feet = length_In_Inches / 12;
            console.log("length in feet: " + length_In_Feet);
            break;

        case 4:
            let length_In_Feet2 = length_In_meteres / 0.30;
            console.log("length in feet: " + length_In_Feet2);
            break;
    }
}