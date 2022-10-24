"use strict";

function displayMailingLabel (name ,address , city , state , zip){
let message = (name + address + city + state + zip);
console.log(message); 
}

let thename = " Megan Sampson ";
let theaddress = " 120 Van Siclen Ave, Apt 2F";
let thecity = " Brooklyn ";
let thestate = " NY ";
let thezip = 11207;


function addNumbers(num1 , num2){
    let sum = (num1 + num2);
    console.log(sum)
}
    let thenum1= parseInt(5);
    let thenum2 = parseInt(5);
    let thesum = parseInt(thenum1 + thenum2);
    console.log(" The sum of " + thenum1 + " and " + thenum2 + " is " + thesum);






    function displayReceipt( totalDue , amountPaid, amountDue){
  let changeDue = totalDue + amountPaid;
  if (amountPaid < totalDue){
    let amountDue = totalDue - amountPaid;
    let changeDue = 0;
}
}
let theTotalDue = parseInt(35);
let theAmountPaid = parseInt(40); 
let theChangeDue = parseInt(theAmountPaid-theTotalDue);
let theAmountDue = parseInt(theTotalDue-theAmountPaid)
console.log("Total Due: $" + theTotalDue);
console.log("Amount Paid: $" + theAmountPaid);
console.log("Change Due: $ "+ theChangeDue);
console.log("Your remaining balance: $" + theAmountDue);





    addNumbers(thenum1,thenum2);
    displayReceipt(theChangeDue, theAmountDue);
    displayMailingLabel(thename, theaddress, thecity, thestate, thezip);
