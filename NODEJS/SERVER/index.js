const express = require("express");
const cors = require("cors");

const app = express();

// let url;

if (process.env.NODE_ENV === "production") {
  app.use(cors({ origin: process.env.PRODUCTION_URL }));
  //   url = process.env.PRODUCTION_URL;
} else {
  app.use(cors());
  //   url = "http://localhost:5173";
}

const http = require("http");
const server = http.createServer(app);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// serve static assets like css
app.use(express.static(__dirname));

// send html page as response
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/home.html");
});

app.post("/", (req, res) => {
  console.log("Request Body Data");
  console.log(req.body);
  console.log("Request Params Data");
  console.log(req.params);
  res.send("Thank you for subscribing");
});

// Blog Content
const data = [
  {
    title: "This is first blog",
    content: "This is first blog content.",
  },
  {
    title: "This is second blog",
    content: "This is second blog content.",
  },
  {
    title: "This is third blog",
    content: "This is third blog content.",
  },
];

// Get blog content
app.get("/blog", (req, res) => {
  res.render("blog", {
    data: data,
  });
});

// Add blog content
app.post("/blog", (req, res) => {
  const inputTitle = req.body.inputTitle;
  const inputContent = req.body.inputContent;
  data.push({
    title: inputTitle,
    content: inputContent,
  });
  res.render("blog", {
    data: data,
  });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () =>
  console.log(`server started and running on port ${PORT}...`)
);
