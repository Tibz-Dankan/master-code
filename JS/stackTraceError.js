const obj = {};
Error.captureStackTrace(obj);
console.log(obj.stack);

// Alternatively
function MyNewError() {
  Error.captureStackTrace(this, MyNewError);
}
console.log("Logging error");
console.log(new MyNewError().stack);

// TO RUN THE CODE IN THIS FILE
// USE COMMAND BELOW
// node stackTraceError.js
