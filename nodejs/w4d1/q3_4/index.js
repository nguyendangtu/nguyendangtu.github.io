const inventory = require('./models/inventory');
const product = require('./models/product');
const indexRouter = require('./routes/index');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const app = express();
app.use(cookieParser())
app.use(session({secret: 'my secret'}));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);



app.listen(3000, ()=>console.log("Server is running...."));
module.exports = app;



