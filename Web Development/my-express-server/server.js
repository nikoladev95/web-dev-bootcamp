const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: nikola.milanovic.dev@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("Hello! I'm Nikola, a <u>pro</u>grammer. Nice to meet you!");
});

app.get("/hobbies", function(req, res) {
    res.send("My Hobbies: <br /><ul><li>Coding</li><li>Weightlifting</li><li>Language Learning</li></ul>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});