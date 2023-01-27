const express = require("express");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(cors({ origin: process.env.PRODUCTION_URL }));
} else {
  app.use(cors());
}

const http = require("http");
const server = http.createServer(app);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// serve static assets like css
app.use(express.static(__dirname));

// RESTFUL END POINTS
// Get request
app.get("/users", async (req, res) => {
  console.log("req.body");
  console.log(req.body);
  console.log("req.params");
  console.log(req.params);
  console.log("req.query");
  console.log(req.query);

  const users = [
    {
      id: 1,
      name: "Tibz Dankan",
      role: "FullStack Developer",
    },
    {
      id: 2,
      name: "Nathaniel",
      role: "Backend Engineer",
    },
    {
      id: 3,
      name: "Elias",
      role: "Student",
    },
    {
      id: 4,
      name: "Nicholas",
      role: "CLO",
    },
  ];
  res.status(200).json({ users: users });
});
// Post request
app.post("/login", async (req, res) => {
  console.log("req.headers");
  console.log(req.headers);
  console.log("req.body");
  console.log(req.body);
  console.log("req.params");
  console.log(req.params);
  console.log("req.query");
  console.log(req.query);

  // Login data
  const email = req.body.email;
  console.log("email");
  console.log(email);
  const password = req.body.password;
  console.log("password");
  console.log(password);

  res.status(200).json({ status: "login success" });
});

//Get request
app.get("/profile", async (req, res) => {
  console.log("req.body");
  console.log(req.body);
  console.log("req.params");
  console.log(req.params);
  console.log("req.query");
  console.log(req.query);
  console.log("req.headers");
  console.log(req.headers);

  res.status(200).json({ status: "Fetched profile successfully" });
});

//Delete request
app.delete("/delete-user/:userId", async (req, res) => {
  console.log("req.body");
  console.log(req.body);
  console.log("req.params");
  console.log(req.params);
  console.log("req.query");
  console.log(req.query);
  console.log("req.headers");
  console.log(req.headers);

  const userId = req.body.params;
  console.log("userId");
  console.log(userId);

  res.status(200).json({ status: "User deleted successfully" });
});

//Put/patch request
app.put("/update-profile/:userId", async (req, res) => {
  console.log("req.body");
  console.log(req.body);
  console.log("req.params");
  console.log(req.params);
  console.log("req.query");
  console.log(req.query);
  console.log("req.headers");
  console.log(req.headers);

  const userId = req.body.params;
  console.log("userId");
  console.log(userId);
  const email = req.body.email;
  console.log("email");
  console.log(email);
  const password = req.body.password;
  console.log("password");
  console.log(password);

  res.status(200).json({ status: "User deleted successfully" });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () =>
  console.log(`server started and running on port ${PORT}...`)
);
