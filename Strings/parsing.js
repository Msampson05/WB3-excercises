"use strict"; 

// Creating name string 

function parseAndDisplayName()
let Name = "Megan Sampson";
let firstName = Name.substring(0, 5);
let lastName = Name.substring(6);
let pos = Name.indexOf(" ");
console.log("Name: " + Name );
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);

