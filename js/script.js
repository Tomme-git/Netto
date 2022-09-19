let today = new Date();

//Current hour
let hourNow = today.getHours();

//Current minutes
let minutesNow = today.getMinutes();

//Greeting
let greeting;

//Time for today
let time = hourNow + ":" + minutesNow;

// Current day of the month (local)
let dateNow = today.getDate();

// Current year (local)
let yearNow = today.getFullYear();

//Weekday array
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const month = ["1","2","3","4","5","6","7","8","9","10","11","12"];

// Current month of the year (local)
let monthNow = month[today.getMonth()];

//Use conditions to find out what greeting to use. Morning = 5 to 12, Afternoon = 13 to 17, Evening = 17 to 4. Use else if because of more than 2 conditions.
if (hourNow >= 5 && hourNow <= 12){
greeting = "Good Morning";
}
else if(hourNow >= 13 && hourNow <= 17){
greeting = "Good Afternoon";
}
else if(hourNow >= 17 && hourNow <= 4){
greeting = "Good Evening";
}

// Use document.write so you don't have to write the elements in html. This also adds a </br> because it writes as a block element.

//greeting according to current time 
document.write("<h3>" + greeting + "</h3>");

//time now
document.write("<h3>" + time + "</h3>");

//today.getDay() gives a number for current day. weekday[] prints out the day from the number received
document.write("<h4>" + weekday[today.getDay()] + "</h4>");




function writeDate() {
    document.getElementById("currentdate").innerHTML = "<h4>" + dateNow + "/" + monthNow + "/" + yearNow + "</h4>";
}

function myFunction(){
    document.getElementById("demo").innerHTML = "lolmao";
    writeDate();
}