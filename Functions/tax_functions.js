"use strict";

function getSocSecTax(grossPay,taxRate ){
  let SocSecTax = (grossPay*taxRate);
  console.log(SocSecTax);
}
let thegrossPay = 70000;
let thetaxRate = (6.2/100);
let theSocSecTax= (thegrossPay * thetaxRate);
console.log("This is the Social Security Tax ")
console.log("With a gross pay of " + thegrossPay + " and a tax rate of 6.2%, Your social security will be " + theSocSecTax );



"use strict";

function getMedicareTax(GrossPay,TaxRate){
    let MedicareTax = (GrossPay * TaxRate);
    console.log(MedicareTax);
}
let theGrossPay = 450000;
let theTaxRate = (1.45/100);
let theMedicareTax = (theGrossPay * theTaxRate);
console.log("          ")
console.log("This is the medicare tax rate ");
console.log("With a gross pay of " + theGrossPay + " and a medicare tax of 1.45%, Your medicare tax will be " + theMedicareTax );


"use strict";

function  getFederalTax(){
    
}