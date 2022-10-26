"use strict"; 
//Chanllege Excercise I'm Still working on it 
// Creating name string 

function parseAndDisplayName(Name1){
var theName1 = "Megan Sampson";
var firstName1 = theName1.substring( 0 , 5);
let lastName1 = theName1.substring(5);
let Name1 = ( "Name: " + theName1 + "First Name: " + firstName1 + "Last Name:"+ lastName1 );
console.log(Name1)
}

function parseAndDisplayName(Name2){
let theName2 = "Cher";
let onlyName = theName2.substring( 4);
console.log("Name: " + theName2 );
console.log("Only Name: " + onlyName);
}


function parseAndDisplayName(name){
 let Name = "Dana Lynn Wyatt";
let firstName = Name.substring( 0 , 4);
let middleName = Name.substring(5,9);
let lastName = Name.substring(9,16);
let name =( "Name: " + Name + "First Name: " + firstName + "Last Name:"+ lastName );
console.log(name)
}
parseAndDisplayName(Name1); 
parseAndDisplayName("Cher");
parseAndDisplayName("Dana Lynn Wyatt");