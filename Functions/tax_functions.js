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

function  getFederalTax(fedGrossPay,withholdCode){
  let Federaltax = (fedGrossPay * withholdCode);
  console.log(Federaltax)
}
//Person 1 
let theFedGrossPay = 750;
let thewithHoldCode1 = (23/100);
let theFederalTax = (theFedGrossPay * thewithHoldCode1);
console.log("     ")
console.log("Person 1")
console.log("With a gross pay of " + theFedGrossPay + " and a withholding code of 0, Your federal tax is " + theFederalTax );

"use strict";

function  getFederalTax(fedGrossPay,withholdCode){
  let Federaltax = (fedGrossPay * withholdCode);
  console.log(Federaltax)
}
//Person 2 
let theFedGrossPay2 = 1550;
let thewithHoldCode2 = (19.5/100);
let theFederalTax2 = (theFedGrossPay2 * thewithHoldCode2);
console.log("     ")
console.log("Person 2")
console.log("With a gross pay of " + theFedGrossPay2 + " and a withholding code of 2, Your federal tax is " + theFederalTax2 );

"use strict";

function  getFederalTax(fedGrossPay,withholdCode){
  let Federaltax = (fedGrossPay * withholdCode);
  console.log(Federaltax)
}
//Person 3
let theFedGrossPay3 = 1100;
let thewithHoldCode3 = (17/100);
let theFederalTax3 = (theFedGrossPay3 * thewithHoldCode3);
console.log("     ")
console.log("Person 3")
console.log("With a gross pay of " + theFedGrossPay3 + " and a withholding code of 6, Your federal tax is " + theFederalTax3 );
