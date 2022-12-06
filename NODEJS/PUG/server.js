const express = require("express");
const pug = require("pug");

const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  console.log("Trying to render pug file");
  var html = pug.renderFile(__dirname + "/views/email/baseEmail.pug", {
    firstName: "Tibz",
  });
  res.send(html);
});

app.get("/reset-password", (req, res) => {
  console.log("Trying to render pug file");
  var html = pug.renderFile(__dirname + "/views/email/resetPassword.pug", {
    firstName: "Tibz",
  });
  res.send(html);
});

app.get("/verify-account", (req, res) => {
  console.log("Trying to render pug file");
  var html = pug.renderFile(__dirname + "/views/email/verifyAccount.pug", {
    firstName: "Tibz",
  });
  res.send(html);
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`server started on port: ${server.address().port}`);
});
