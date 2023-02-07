/**
 * Write a small list application in Express. 
 * GET to / should show the list (an unordered list based on an array variable in the session object), 
 * and also have a link on the page to /add GET to /add should show a form with a single input 
 * that allows the user to enter text and a 
 * submit button POST to /add should receive what was entered, 
 * add it to the array and then redirect to the list   Use templates 
 * and output 100% valid HTML5 and give each visitor their own list.
 */

const path = require("path");
const express = require("express");
const app = express();
const session = require("express-session");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
    })
);
app.use((req, res, next) => {
    if (!req.session.list) {
        req.session.list = ["Item1", "Item2", "Item3", "Item4"];
    }
    next();
});
app.get("/", (req, res) => {
    let list = req.session.list;
    let output = "<ul>";
    for (i of list) {
        output += `<li>${i}</li>`;
    }
    output += "</ul><a href='/add'>add</href>";
    res.send(output);
});
app.get("/add", (req, res) => {
    res.send(`<form method="post"><input name="item" /><input type="submit" /></form>`);
});
app.post("/add", (req, res) => {
    req.session.list.push(req.body.item);
    res.redirect(303, "/");
});
app.listen(3000, ()=>console.log("Server is running...."));

