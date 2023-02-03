const express = require('express');
const app = express();

app.get('/', (req,res) => {
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

app.listen(3000);