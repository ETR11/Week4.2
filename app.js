var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bp = require("body-parser"); /*Copied*/

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(bp.json()); /*Copied*/
app.use(bp.urlencoded({extended: true})); /*Copied*/

/* Copied start */

let recipes = [
    {"name": "ooo", "instructions": ["Something", "Anything"], "ingredients": ["Thing1", "Thing2", "Thing3"]},
    {"name": "aaa", "instructions": ["Everything", "Nothing"], "ingredients": ["Item", "Key item", "Common item"]}
];

let requestedDish;

recipePage.get("/recipe/:food", (req, res) => {
    requestedDish = res.req.params.food;
    res.sendFile(path.join(__dirname, "stuff/Index.html"));
})

recipePage.get("/dish", (req, res) => {
    for(let i = 0; i<recipes.length; i++) {
        if (recipes[i].name == requestedDish) {
            res.json(recipes[i]);
        }
    }
})

recipePage.post("/recipe/", (req, res) => {
    recipes.push(req.body);
})

recipePage.listen(1234);

/* Copied end */

module.exports = app;
