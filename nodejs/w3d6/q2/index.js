const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded());
app.use('/css', express.static(path.join(__dirname, "css")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));



app.get('/',(req,res,next) =>{
    res.send('<form action="/result" method="post"><label>Name <input name="name"></label> <label>Age <input name="age"></label><button type="submit">SubmitQuery</button></form>');
});


app.use('/result',(req,res,next) =>{
    
    let name = req.body.name;
    let age = req.body.age;
    res.render("result",{
        name: name,
        age: age
    });
});


app.listen(3000, ()=> console.log("Server is running...."));
