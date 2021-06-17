const router = require('express').Router();
const path = require("path");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// GET all galleries for homepage
// //router.get("/", (req, res) => {
//   console.log("GET /");
//     res.redirect("/welcome");
// });

router.get("/signup", (req, res) => {
  console.log("GET /signup");
  // If the user already has an account send them to the members page
  if (req.user) {
  res.redirect("/welcome");
  }
  res.sendFile(path.join(__dirname, "../../public/signup.html"));
});

router.get("/login", (req, res) => {
  console.log("GET /login");
  // If the user already has an account send them to the members page
  if (req.user) {
  res.redirect("/welcome");
  }
  res.sendFile(path.join(__dirname, "../../public/login.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/welcome", isAuthenticated, (req, res) => {
  console.log("GET /welcome");
  res.sendFile(path.join(__dirname, "../../public/welcome.html"));
});

module.exports = router;
