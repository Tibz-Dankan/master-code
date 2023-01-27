const date1 = new Date();
console.log(date1); //2022-07-02T23:35:10.657Z

const date2 = new Date(Date.now());
console.log(date2); //2022-07-02T23:35:10.665Z

const stringifiedDate = JSON.stringify({ date1 });
console.log(stringifiedDate); //{"date1":"2022-07-02T23:37:50.537Z"}

const backToDateFromString = JSON.parse(stringifiedDate);
console.log(backToDateFromString); //{ date1: '2022-07-02T23:42:29.107Z' }

// Getting the actual date from the stringified one
const date3 = new Date(JSON.parse(stringifiedDate).date1);
console.log(date3); // 2022-07-02T23:46:52.029Z

// Getting hours minutes from date3
const hour = date3.getHours();
console.log("Hour: " + hour); //Hour: 2

const minute = date3.getMinutes();
console.log("minute: " + minute); //minute: 52

// Getting year  from day from date3
const year = date3.getFullYear();
console.log("year: " + year); //year: 2022

const day = date3.getDay();
console.log("day: " + day); // day: 0

// date 4
const date4 = new Date(Date.now());

const date4Roman1 = date4.toDateString();
console.log(date4Roman1); //Sun Jul 03 2022;

const date4Roman2 = date4.toISOString();
console.log("Iso string");
console.log(date4Roman2); //2022-07-03T00:05:14.103Z
console.log("ISO string back to date");
console.log(new Date(date4Roman2));
console.log("Full year resulting date of the ISO string");
console.log(new Date(date4Roman2).getFullYear());

const date4Roman3 = date4.toLocaleDateString();
console.log(date4Roman3); //7/3/2022

const date4Roman4 = date4.toLocaleString();
console.log(date4Roman4); //7/3/2022, 3:08:17 AM

const date4Roman5 = date4.toString();
console.log(date4Roman5); //Sun Jul 03 2022 03:10:02 GMT+0300 (East Africa Time)

const date4Roman6 = date4.toLocaleTimeString();
console.log(date4Roman6); //3:11:58 AM

const date4Roman7 = date4.toUTCString();
console.log(date4Roman7); //Sun, 03 Jul 2022 00:14:05 GMT

const date4Roman8 = date4.toJSON();
console.log(date4Roman8); // 2022-07-03T00:16:22.688Z
console.log("toJSON string back to date");
console.log(new Date(date4Roman8));
console.log("Full year resulting date of the toJSON");
console.log(new Date(date4Roman8).getFullYear());

const date4Roman9 = date4.getTimezoneOffset();
console.log(date4Roman9); //-180

const date4Roman10 = date4.toLocaleTimeString("en-Us", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
console.log(date4Roman10); //3:47 AM

// TODO: DATE MATHEMATICS

//TO RUN THE CODE USE THE COMMAND "node date.js"
