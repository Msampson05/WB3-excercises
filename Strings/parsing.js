"use strict"; 

// Creating name string 

function parseAndDisplayName(){
let Name = "Megan Sampson";
let firstName = Name.substring( 0 , 5);
let lastName = Name.substring(5);
let pos = Name.indexOf(" ");
let pos1= Name.lastIndexOf(" ");
console.log("Name: " + Name );
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("indexOf: " + pos , pos1);
}

parseAndDisplayName()