const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());


app.get('/',(req,res,next) =>{
    res.send('<form action="/result" method="post"><label>Name <input name="name"></label> <label>Age <input name="age"></label><button type="submit">SubmitQuery</button></form>');
});

app.use('/result',(req,res,next) =>{
    res.redirect('/');
});

app.listen(3000, ()=> console.log("Server is running...."));