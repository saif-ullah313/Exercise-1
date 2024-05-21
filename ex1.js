/* Ouestion No 2:
2) Create variables to store your first name, last name and year of birth. In the blue box below, place the following text: "Hi, my name is _____________, I'm _____ years old and I'm learning Javascript".*/
var FirstName = "Saif";
var LastName = "Ullah";
var dateOfBirth = 1998;
var currentYear = new Date().getFullYear();
var age = currentYear - dateOfBirth;
document.getElementById("student_message").innerHTML=`Hi, my name is ${FirstName}  ${LastName}. I'm ${age} years old and I'm learning Javascript.`;



/* Question No 3:
3) Get the two numbers below and calculate the average.*/
var firstNumber = 101;
var secondNumber = 7;

var average = firstNumber/secondNumber;
console.log(average)

document.getElementById("average_numbers").innerHTML = "The average of two number is " + (average.toFixed(2));

/* Question No 4:
4) Suppose telephone numbers with 9 digits are valid. All others are invalid. Use Javascript to test if the below numbers are valid:*/

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3=phone3.toString();


if(phone1.length==9){
    document.getElementById("statement1").innerHTML = "The number " + phone1 +  " You dail is valid";
}
else {
    document.getElementById("statement1").innerHTML = " The number " + phone1+  " You dail is invalid";
}
if (phone2.length==9){
    document.getElementById("statement2").innerHTML =  "The number " + phone2 +  " You dail is valid";
}
else {
    document.getElementById("statement2").innerHTML = " The number " + phone2+  " You dail is invalid";
}
if (phone3.length==9){
    document.getElementById("statement3").innerHTML =  "The number " + phone3 +  " You dail is valid";
}
else {
    document.getElementById("statement3").innerHTML = " The number " + phone3+  " You dail is invalid";
}

// Question No 5
//5) Send to the console the result of the following operation: 326.
var power_method = Math.pow(36,2)
document.getElementById("Power").innerHTML="The power of 36 is " + power_method;

//Question No 7:
//7) Consider the block of code below and guess what values will be shown in the console.
var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); 
console.log( (7+5) / number + 2 ); 
console.log(pressure); 
console.log(temperature); 
console.log(typeof pressure); 
console.log(typeof temperature);

//Question No 8:
//8) Do the transformations to the URLs below:
var url="www.udemy.com";

document.getElementById("URL").innerHTML="Replace URL www.udemy.com by  " + (url.replace("www.udemy.com" , "https://www.udemy.com"));

var url="http://www.udemy.com";

document.getElementById("URL1").innerHTML="Replace URL http://www.udemy.com by  " + (url.replace("http://www.udemy.com" , "www.udemy.com"));