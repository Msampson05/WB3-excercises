"use strict";

window.onload = init 
function init() {
    const Date = document.getElementById("Date");

    //Select Button
    const setbtn = document.getElementById("setbtn");
    setbtn.onclick = onsetbtnClicked;

}
function onsetbtnClicked(){
    //Get the value in the input box and display it as a string in the paragraph
    const Date1 = document.getElementById("Date").value;
    let d = new Date(Date1);

    //const MessageAsParagraph = document.getElementById("MessageAsParagraph");
    //MessageAsParagraph.innerHTML = d.toString();

    document.getElementById("MessageAsParagraph").innerHTML = d.toString();

    //const MessageAsTextbox = document.getElementById("MessageAsTextbox");
    //MessageAsTextbox.value = d.toString();

    document.getElementById("MessageAsTextbox").value = d.toString();

    console.log("This is logging the date to the console - Date is:" + d.toString());
  //  Message.value.innerHTML = console.log(d.toString);
}