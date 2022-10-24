"use strict";

function convertFtoC(currentTemp , celsiusTemp){ 
let convert = ((currentTemp-32)* 5/9);
console.log(convert)
}
let theCurrentTemp = 92;
let theCelsiusTemp = ((theCurrentTemp - 32)* 5/9);
console.log("The fahrenhiet " + theCurrentTemp + " converts to " + theCelsiusTemp + " after converted ");

convertFtoC();