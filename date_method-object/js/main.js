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