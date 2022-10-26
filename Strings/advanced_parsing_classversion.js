
function parseAndDisplayName(fullname){
console.log('--------------------------------------')
console.log('Displaying results for input:' + fullname);

let indexOfFirstSpace = fullname.indexOf(" ");
let indexOfLastSpace = fullname.lastIndexOf(" ");

let doesHaveAtLeastOneSpace = (indexOfFirstSpace != -1);

//comment
//Comment 

let areFirstAndLastIndexOfSpaceIdentical = (indexOfFirstSpace == indexOfLastSpace);
//Comment

//If only one name 
if(!doesHaveAtLeastOneSpace){
    console.log('Only Name:                   ' +fullname);
}
// If more than one name, exactly two names..
else if(areFirstAndLastIndexOfSpaceIdentical){
    displayFirstName(fullname);
    displayLastName(fullname);
}
//If other (three or more names)...
else
{
   displayFirstName(fullname);
   displayMiddleName(fullname);
   displayLastName(fullname);
}
    console.log(' ');

function displayFirstName(fullname){
   let firstName = fullname.substring(0, indexOfFirstSpace);
   console.log('First Name:                   ' + (firstName));
}

function displayMiddleName(fullname){
    let middlename = fullname.substring(indexOfFirstSpace + 1, indexOfLastSpace);
    console.log('Middle Name:                  ' + (middlename));
}

function displayLastName(fullname){
    let lastname = fullname.substring(indexOfLastSpace + 1);
    console.log('Last Name:                    ' + (lastname));
}









}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
