//Dates
// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)

// JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.
// Short dates are written with an "MM/DD/YYYY" syntax like this

var d = new Date("2001-10-08");
console.log(d);

// One and two digit years will be interpreted as 19xx:
d = new Date(99, 11, 24);
console.log(d);

d = new Date(9, 11, 24);
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toISOString());

// Date get methods
// getFullYear()	        Get year as a four digit number (yyyy)
// getDate()	            Get day as a number (1-31)
// getMonth()	            Get month as a number (0-11)
// getDay()	                Get weekday as a number (0-6)
// getHours()	            Get hour (0-23)
// getMinutes()	            Get minute (0-59)
// getSeconds()	            Get second (0-59)
// getMilliseconds()	    Get millisecond (0-999)
// getTime()	            Get time (milliseconds since January 1, 1970)
// The getTimezoneOffset()  method returns the difference (in minutes) between local time an UTC time:

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(months[d.getMonth()]);
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getDay());
console.log(days[d.getDay()]);
console.log(d.getTime());

console.log(d.getTimezoneOffset());

// Date set methods
// setDate()        	Set the day as a number (1-31)
// setFullYear()    	Set the year (optionally month and day)
// setHours()	        Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	        Set the minutes (0-59)
// setMonth()	        Set the month (0-11)
// setSeconds()	        Set the seconds (0-59)
// setTime()	        Set the time (milliseconds since January 1, 1970)