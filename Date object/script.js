// date object in javascript
// Date object in javascript is used to work with dates and times. It is used to get the current date and time, set the date and time, and perform date and time calculations.

// Creating a Date object
// There are four ways to create a new Date object:
// new Date() - creates a new Date object with the current date and time
// new Date(year, month, day, hours, minutes, seconds, milliseconds) - creates a new Date object with the specified date and time
// new Date(milliseconds) - creates a new Date object with the specified number of milliseconds since January 1, 1970
// new Date(dateString) - creates a new Date object with the specified date string

const date = new Date();
console.log(date); // current date and time

const date1 = new Date(2021, 10, 10, 10, 10, 10, 10);
console.log(date1); // 2021-11-10T04:40:10.010Z

const date2 = new Date(1636489810010);
console.log(date2); // 2021-11-10T04:40:10.010Z

const date3 = new Date("2021-11-10T10:10:10.010Z");
console.log(date3); // 2021-11-10T10:10:10.010Z

// Getting the current date and time
// The Date object has several methods for getting the current date and time:
// getDate() - returns the day of the month (1-31)
// getDay() - returns the day of the week (0-6)
// getFullYear() - returns the year (four digits)
// getHours() - returns the hour (0-23)
// getMilliseconds() - returns the milliseconds (0-999)
// getMinutes() - returns the minutes (0-59)
// getMonth() - returns the month (0-11)
// getSeconds() - returns the seconds (0-59)
// getTime() - returns the number of milliseconds since January 1, 1970
// getTimezoneOffset() - returns the difference between UTC time and local time, in minutes
// getUTCDate() - returns the day of the month, according to universal time (1-31)
// getUTCDay() - returns the day of the week, according to universal time (0-6)
// getUTCFullYear() - returns the year, according to universal time (four digits)
// getUTCHours() - returns the hour, according to universal time (0-23)
// getUTCMilliseconds() - returns the milliseconds, according to universal time (0-999)
// getUTCMinutes() - returns the minutes, according to universal time (0-59)
// getUTCMonth() - returns the month, according to universal time (0-11)
// getUTCSeconds() - returns the seconds, according to universal time (0-59)

console.log(date.getDate()); // 10
console.log(date.getDay()); // 3
console.log(date.getFullYear()); // 2021
console.log(date.getHours()); // 10
console.log(date.getMilliseconds()); // 10
console.log(date.getMinutes()); // 10
console.log(date.getMonth()); // 10
console.log(date.getSeconds()); // 10
console.log(date.getTime()); // 1636489810010
console.log(date.getTimezoneOffset()); // -330
console.log(date.getUTCDate()); // 10
console.log(date.getUTCDay()); // 3
console.log(date.getUTCFullYear()); // 2021
console.log(date.getUTCHours()); // 4
console.log(date.getUTCMilliseconds()); // 10
console.log(date.getUTCMinutes()); // 40
console.log(date.getUTCMonth()); // 10
console.log(date.getUTCSeconds()); // 10

// Setting the date and time
// The Date object has several methods for setting the date and time:
// setDate() - sets the day of the month (1-31)
// setFullYear() - sets the year (four digits)
// setHours() - sets the hour (0-23)
// setMilliseconds() - sets the milliseconds (0-999)
// setMinutes() - sets the minutes (0-59)
// setMonth() - sets the month (0-11)
// setSeconds() - sets the seconds (0-59)
// setTime() - sets the number of milliseconds since January 1, 1970
// setUTCDate() - sets the day of the month, according to universal time (1-31)
// setUTCFullYear() - sets the year, according to universal time (four digits)
// setUTCHours() - sets the hour, according to universal time (0-23)
// setUTCMilliseconds() - sets the milliseconds, according to universal time (0-999)
// setUTCMinutes() - sets the minutes, according to universal time (0-59)
// setUTCMonth() - sets the month, according to universal time (0-11)
// setUTCSeconds() - sets the seconds, according to universal time (0-59)

date.setFullYear(2022);
console.log(date); // 2022-11-10T10:10:10.010Z

date.setMonth(11);
console.log(date); // 2022-12-10T10:10:10.010Z

date.setDate(20);
console.log(date); // 2022-12-20T10:10:10.010Z

date.setHours(20);
console.log(date); // 2022-12-20T20:10:10.010Z

date.setMinutes(20);
console.log(date); // 2022-12-20T20:20:10.010Z

date.setSeconds(20);
console.log(date); // 2022-12-20T20:20:20.010Z

date.setMilliseconds(20);
console.log(date); // 2022-12-20T20:20:20.020Z

date.setTime(1639982420020);
console.log(date); // 2022-12-20T20:20:20.020Z

date.setUTCFullYear(2023);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCMonth(11);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCDate(20);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCHours(20);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCMinutes(20);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCSeconds(20);
console.log(date); // 2023-12-20T20:20:20.020Z

date.setUTCMilliseconds(20);
console.log(date); // 2023-12-20T20:20:20.020Z
