const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use('/css', express.static(path.join(__dirname, "css")));

app.get('/', (req, res, next) => {
    res.send('<form action="/result" method="post"><label>Name <input name="name"></label> <label>Age <input name="age"></label><button type="submit">SubmitQuery</button></form>');
});

app.use('/result', (req, res, next) => {
    let u = path.join(__dirname,'result.html');
    console.log(u);
    res.sendFile(u);
});

app.listen(3000, () => console.log("Server is running...."));
