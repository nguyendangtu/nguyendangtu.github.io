const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser('my secret here'));
app.use(express.urlencoded({ extended: false }));


app.get('/',(req,res) => {
    let output = `<form method="post" action="/"><label>Key<input type="text" name="key"></label> <label>Value <input type="text" name="value"></label> <button type="submit">Add Cookie</button></form>`;
    res.send(output);
});

app.post('/',(req,res)=>{
    console.log(req.body);
    res.cookie(req.body.key, req.body.value, {maxAge: 1000});
    res.redirect('/');
});


app.listen(3000,()=>{
    console.log("Application is running...");
});