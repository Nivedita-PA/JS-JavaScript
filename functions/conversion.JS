{
    "use strict";

    const prompt = require("prompt-sync")({ sigint: true });

    let temp = Number(prompt("Enter the temperature value: "));

    let choice = Number(prompt("Enter the choice of unit: 1.In Fahreinheit  2.In Celcius "));

    let deg;

    function temperature(choice) {
        switch (choice) {
            case 1:
                if (temp <= 212) {
                    let degF = temp * 9 / 5 + 35;
                    deg = degF;
                }
                return console.log("Temp in Fahreinheit: " + deg);
            case 2:
                if (temp <= 100) {
                    let degC = temp - 32 * 5 / 9;
                    deg = degC;
                }
                return console.log("Temp in Celcius: " + deg);
        }
    }

    let check = temperature(choice);
}