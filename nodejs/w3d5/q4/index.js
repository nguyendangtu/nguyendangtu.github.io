const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use('/css', express.static(path.join(__dirname, "css")));


app.get('/',(req,res,next) =>{
    res.send('<form action="/result" method="post"><label>Name <input name="name"></label> <label>Age <input name="age"></label><button type="submit">SubmitQuery</button></form>');
});


app.post('/result', (req, res, next) => {
   // req.session[req.body.key] = req.body.value;
    res.redirect('/output');
});

app.get('/output', (req, res)=>{
    
    let name = req.query.name;
    if(!name){
        name = "Person";
    }
    
    let age = req.query.age;
    if(!age){
        age = 20;
    }
    res.send(`Welcome ${name} with age is ${age}`);
});


app.listen(3000, () => console.log("Server is running...."));



