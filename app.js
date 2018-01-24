var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

var port = process.env.PORT || 3000;

//ROUTES
app.get("/", function(req, res) {
  res.redirect("home");
});

//HOME PAGE
app.get("/home", function(req, res) {
  res.render("home");
});

//ASYMPTOTES
app.get("/asymptotes", function(req, res) {
  res.render("asymptotes");
});

// TEAM
app.get("/team", function(req, res) {
  res.render("team");
});

//EVENTS
app.get("/events", function(req, res) {
  res.render("events");
});

// ABOUT-US
app.get("/about", function(req, res) {
  res.render("about");
});

//CONTACT-US
app.get("/contact", function(req, res) {
  res.render("contact");
});

//GALLERY
app.get("/gallery", function(req, res) {
  res.render("gallery");
});

//LISTEN
app.listen(port, function(err) {
  console.log("The MACS server has started");
});
