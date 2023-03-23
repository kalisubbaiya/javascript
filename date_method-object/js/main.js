//          DATE METHODS

//      The Date object works with dates and times.
//      Date objects are created with new Date().
//      There are four ways of ceating a date
        //      new Date();
        //      new Date(milliseconds);
        //      new Date(dateString);
        //      new Date(year, month, day, hours, minutes, seconds, milliseconds);

//----GET METHODS-----//

//--1.getDate
const birthday = new Date('May 4, 1996 23:15:30:120');
const date1 = birthday.getDate();
console.log(date1);

//--2.getDay
const date2 = birthday.getDay();
console.log(date2);

//--3.getFullYear
console.log(birthday.getFullYear());

//--4.gethours
console.log(birthday.getHours());

//--5.getMilliseconds
console.log(birthday.getMilliseconds());

//--6.getMinutes
console.log(birthday.getMinutes());

//--7.getMonth
console.log(birthday.getMonth());

//--8.getSeconds
console.log(birthday.getSeconds());

//--9.getTime
console.log(birthday.getTime()); // returns the number of milliseconds since January 1, 1970 00:00:00.

//--10.getTimezoneOffset
console.log(birthday.getTimezoneOffset());

//--11.getYear
console.log(birthday.getYear());


//  prototype allows you to add new properties and methods to dates.
Date.prototype.myMonth = function()  {
    if (this.getMonth() == 0) {return "January"};
    if (this.getMonth() == 1) {return "February"};
    if (this.getMonth() == 2) {return "March"};
    if (this.getMonth() == 3) {return "April"};
    if (this.getMonth() == 4) {return "May"};
    if (this.getMonth() == 5) {return "June"};
    if (this.getMonth() == 6) {return "July"};
    if (this.getMonth() == 7) {return "August"};
    if (this.getMonth() == 8) {return "September"};
    if (this.getMonth() == 9) {return "October"};
    if (this.getMonth() == 10) {return "November"};
    if (this.getMonth() == 11) {return "December"};
  };
  
  const d = new Date();
  console.log(d.myMonth());


//----SET METHODS-----//

//--1.setDate
birthday.setDate(25);
console.log(birthday.getDate());

//--2.setFullyear
birthday.setFullYear(2022);
console.log(birthday.getFullYear());

//--3.setHours
birthday.setHours(10, 05, 50);
console.log(birthday);

//--4.setMilliseconds
birthday.setMilliseconds(300);
console.log(birthday.getMilliseconds());

//--5.setMinutes
birthday.setMinutes(35);
console.log(birthday);

//--6.setMonth
birthday.setMonth(11);
console.log(birthday);

//--7.setSecond
birthday.setSeconds(18);
console.log(birthday);

//--8.setTime
const tenMinutesInMillis = 10 * 60 * 1000;
birthday.setTime(birthday.getTime()+tenMinutesInMillis);
console.log(birthday);

//--9.setYear
birthday.setYear(95);
console.log(birthday);


//----CONVERT METHODS-----//

//--1.toDateString
console.log(birthday.toDateString());

//--2.toISOString
console.log(birthday.toISOString());

//--3.toJSON
console.log(birthday.toJSON());

//--4.toGMTString
console.log(birthday.toGMTString());

//--5.toLocaleDateString
console.log(birthday.toLocaleDateString());

//--6.toLocaleString
console.log(birthday.toLocaleString());

//--7.toLocaleTimeString
console.log(birthday.toLocaleTimeString());

//--8.toString
console.log(birthday.toString());

//--9.toTimeString
console.log(birthday.toTimeString());


// let date = new Date();
// let setDay = parseInt(prompt("Enter a date"));
// date.setDate(setDay);
// let day = date.getDay();

// if (day === 0 || day === 6){
//   console.log("the given day is weekend");
//   console.log(day);
// }
// else{
//   console.log("the given day is not a weekend. It is a weekday");
//   console.log(day);
// }


// var dates = new Date();

var date = new Date()
date.setDate(date.getDate()-1);
console.log(date);



let DigitalClock = setInterval(() =>{
  let digital = new Date().toLocaleTimeString();
  document.getElementById("demo").innerHTML = digital;
},1000)


// let today = new Date();
// let dayofWeek = today.getDay();
// let startofWeek = new Date(today.getTime() - dayofWeek * 24 * 60 * 60 * 1000);
// console.log(startofWeek.toString());

function getWeekStartDate() {
  var today = new Date();
  var day = today.getDay();
  var startDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - day
  );
  console.log(startDate.toDateString());
}
getWeekStartDate();



// let date7 = new Date("feb 22, 2020 12:00:00");
// let date8 = new Date("June 22, 2020 13:00:00");

// let diffTime = date8.getTime() - date7.getTime();
// let diffHours = diffTime / (1000 * 60 * 60); 

// console.log(Math.abs(diffHours + " hours"));


let date7 = new Date('Feb 22, 2023 14:00:00');
let date8 = new Date('Feb 22, 2023 12:00:00');
let differenceInTime = date8.getTime() - date7.getTime();
let differenceInHours = differenceInTime / (1000*60*60);
var differ=Math.abs(Math.round(differenceInHours));

console.log(differ + " Hours");


let currentdate = new Date();
let birthDay = new Date('May 24, 1996');

let yearDiff = currentdate.getFullYear() - birthDay.getFullYear();
let monthDiff = currentdate.getMonth() - birthDay.getMonth();
let dayDiff = currentdate.getDate() - birthDay.getDate();

if (monthDiff < 0){
  monthDiff = 12 + monthDiff;
  yearDiff -=1;
  if (dayDiff < 0 ){
    dayDiff = 365 + dayDiff;
    monthDiff -= 1;
  }
  let age = `${yearDiff} years ${monthDiff} months ${dayDiff} days`
  console.log(age);
}


let date9 = new Date('Feb 21, 2023 14:00:00');
let date10 = new Date('Feb 22, 2023 12:00:00');
let timeDiff = Math.abs(date10.getTime() - date9.getTime());
timeDiff = timeDiff / (1000*60);
console.log(timeDiff);
