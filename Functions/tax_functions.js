"use strict";

function getSocSecTax(grossPay,taxRate ){
  let SocSecTax = (grossPay*taxRate);
  console.log(SocSecTax);
}
let thegrossPay = 70000;
let thetaxRate = (6/100);
let theSocSecTax= (thegrossPay * thetaxRate);
console.log("With a gross pay of " + thegrossPay + " and a tax rate of 6.2%, Your social security will be " + theSocSecTax )
