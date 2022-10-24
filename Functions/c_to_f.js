"use strict";

// Celsius to Fahrenheit 

function convertCtoF(currentTemp, fahrenhietTemp){
let convert = (currentTemp*9/5) +32;
console.log(convert);
}
let theCurrentTemp = 40;
let thefahrenhietTemp = ((theCurrentTemp * 9/5)+ 32);
console.log("The celsius " + theCurrentTemp + " converts to " + thefahrenhietTemp + " farenhiet Safter converted ");

convertCtoF();