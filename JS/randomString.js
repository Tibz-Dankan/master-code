const crypto = require("crypto");

const randomString1 = crypto.randomBytes(32).toString("hex");
console.log(randomString1); //6534fc6cff6483774ea17c34bd5f1bbec5701e95120c0a490cc092a9b00a138b

const randomString2 = crypto.randomBytes(16).toString("hex");
console.log(randomString2); //57a4f11443aa6a177f3554ad61492aa8
