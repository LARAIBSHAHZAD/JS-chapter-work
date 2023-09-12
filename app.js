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