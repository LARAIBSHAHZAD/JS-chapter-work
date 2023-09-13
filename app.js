// Chapter 6-9

// Question 1 

document.write("<br>Result:");

var a = 10;
var value = "<br>The value of a is: " + a;

document.write(value)

document.write("<br>.................................")

var a2 = ++a;
var value2 = "<br><br>The value ++a is: " + a2;

document.write(value2);

var value3 = "<br>Now the value of a is: " + a;

document.write(value3);

var a3 = a++;
var value4 = "<br><br><br>The value of a++ is: " + a3;

document.write(value4);

var value5 = "<br>Now the value of a is: " + a;

document.write(value5);

var a4 = --a;
var value6 = "<br><br><br>The value of --a is: " + a4;

document.write(value6);

var value7 = "<br>Now the value of a is: " + a;

document.write(value7);

var a5 = a--;
var value8 = "<br><br><br>The value of a-- is: " + a5;

document.write(value8);

var value9 = "<br>Now the value of a is: " + a;

document.write(value9);

// Question 2 

var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

var a1 = --a;

console.log(a1);

var ab1 = --a - --b;

console.log(ab1);

var ab2 = --a - --b + ++b;

console.log(ab2);

var ab3 = --a - --b + ++b + b--;
 
console.log(ab3);

// Question 3 

var yourName = "Enter Your Name";
var userInput = prompt(yourName);

if(userInput !== null)
{
    alert("Welcome Mr. " + userInput);
} 
else
{
    alert("You did not enter name.")
}
// Question 4 

function generateTable() 
{
    var number = document.getElementById("numberInput").value;
    var tableContainer = document.getElementById("tableContainer");
    var tableHTML = "<h2>Multiplication Table for " + (number || 5) + "</h2><table border='1'>";
    
    for (var i = 1; i <= 10; i++) 
    {
        tableHTML += "<tr><td>" + number + " x " + i + "</td><td>" + (number || 5) * i + "</td></tr>";
    }

    tableHTML += "</table>";
    tableContainer.innerHTML = tableHTML;
}

// Display the default table (5x multiplication table) when the page loads.
window.onload = function () 
{
    generateTable();
};

// Question 5 

var subjectName1 = prompt("Enter first subject name: ");
var subjectName2 = prompt("Enter second subject name: ");
var subjectName3 = prompt("Enter third subject name: ");

var totalmarks = 100;

var obtainedmarks1 = +prompt("Enter obtained marks for " + subjectName1 + ":");
var obtainedmarks2 = +prompt("Enter obtained marks for " + subjectName2 + ":");
var obtainedmarks3 = +prompt("Enter obtained marks for " + subjectName3 + ":");

var totalobtainedmarks = obtainedmarks1 + obtainedmarks2 + obtainedmarks3;
var percentage1 = (totalobtainedmarks / (totalmarks * 3)) * 100;

var tableResult = "<table border='1'>";
tableResult += "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
tableResult += "<tr><td>" + subjectName1 + "</td><td>" + totalmarks + "</td><td>" + obtainedmarks1 + "</td></tr>";
tableResult += "<tr><td>" + subjectName2 + "</td><td>" + totalmarks + "</td><td>" + obtainedmarks2 + "</td></tr>";
tableResult += "<tr><td>" + subjectName3 + "</td><td>" + totalmarks + "</td><td>" + obtainedmarks3 + "</td></tr>";
tableResult += "<tr><td>Total</td><td>" + (totalmarks * 3) + "</td><td>" + totalobtainedmarks + "</td></tr>";
tableResult += "<tr><td>Percentage</td><td></td><td>" + percentage1.toFixed(2) + "%</td></tr>";
tableResult += "</table>";

document.write(tableResult);

// End of Chps

// Practice Work

var a = +prompt();

var b = +prompt();

console.log(a + b);

var firstName = prompt("Enter first name")

var lastName = prompt("Enter last name")

console.log("Hello Mr. " + firstName + " " + lastName)

var country = prompt("In which country you live")

if(country === "Pakistan")
{
    console.log("Ohh nice")
}

var study = prompt("In which class do you study")

if(study === "xii")
{
    console.log("Great keep it  up")
}

var percentage = prompt("Enter your percentage");

if(percentage >= 80 && percentage <= 100 )
{
    alert("A+")
}
else if(percentage >= 70 && percentage <= 80){
    alert("A")
}
else if(percentage >= 70 && percentage <= 80){
    alert("A")
}
else if(percentage >= 70 && percentage <= 80){
    alert("A")
}
else if(percentage >= 70 && percentage <= 80){
    alert("A")
}
else if(percentage >= 70 && percentage <= 80){
    alert("A")
}


var userAge = prompt("Whats your age")

var userWeight = +prompt("Whats your Weight")

var userGender = prompt("Whats your gender")

if(userAge >=21 && userWeight === 86 && userGender === "male")
{
    alert("Come to try out Man")
}

else if(userAge >=50 && userWeight === 60 && userGender === "male")
{
    alert("Come to try out Old Man")
}

else if(userAge >=30 && userWeight === 90 && userGender === "female")
{
    alert("Come to try out Lady")
}
else if(userAge >=70 && userWeight === 50 && userGender === "female")
{
    alert("Come to try out Old Lady")
}
else{
    alert("Your are not allowed")
}

// Chapter 9-11

// Question 1 

var city = prompt("Enter your city")

if(city === "Karachi")
{
    alert("“Welcome to city of lights”")
}

// Question 2  

var gender = prompt("Enter your gender")

if(gender === "male")
{
    alert("Good Morning Sir")
}
if(gender === "female")
{
    alert("Good Morning Madam")
}

// Questiion 3 

var Red = prompt("Must Stop")

var Yellow = prompt("Ready to move")

var Green = prompt("Move now")

var signalColor = prompt("Traffic Signal")

message = "";

if(signalColor === "red"){
    message = "Must Stop"
}

if(signalColor === "yellow"){
    message = "Ready to move"
}

if(signalColor === "green"){
    message = "Move Now"
}
alert(message)

// Question 4 

var fuel = +prompt("Remaining fuel in car")

if(fuel <= 0.25 ){
    alert(" “Please refill the fuel in your car”")
}

// Question 5 

// a
 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b

var b = 82;
if (b++ === 83){
alert("given condition for variable b is false");
}

// c

var c = 12;
if (c++ === 13){
alert("condition 1 is f");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is f");
}
if(c === 14){
alert("condition 4 is true");
}

// d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e

if (true)
{
   alert("True");
}
if (false)
{
    alert("False");
}

// f

if("car" < "cat")
{
    alert("car is smaller than cat");
}

// Question 6 

var percentage = prompt("Enter your percentage");

if(percentage >= 80 && percentage <= 100 )
{
    alert("A+ , Excellent")
}
else if(percentage >= 70 && percentage <= 80){
    alert("A , Good")
}
else if(percentage >= 60 && percentage <= 70){
    alert("B , You need to improve")
}
else if(percentage >= 50 && percentage <= 60){
    alert("Fail , Sorry")
}

// Question 7 

var number = +prompt("Guess the secret number")

var secretNumber = 4;

if(number === secretNumber ){
    alert("“Bingo! Correct answer”.")
}

else if(number === ++secretNumber){
    alert("“Close enough to the correct answer”.")
}

else{
    alert("Wrong answer")
}

// Question 8 

