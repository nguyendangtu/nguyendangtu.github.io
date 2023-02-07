const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded());
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.use('/css', express.static(path.join(__dirname, "css")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));


app.get('/',(req,res) =>{
    res.render("index");
});


app.use('/addToCart',(req,res,next) =>{

    const card = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        id: req.body.id
    }

    if(req.session.cards){
        req.session.cards.push(card);
    }else{
        req.session.cards = [card];
    }

    res.render("product",{
        cards: req.session.cards
    });  

});

app.use('/shoppingcart',(req,res,next) =>{
    if(req.session.cards){
       const products = Array.from(new Set(req.session.cards.map(c=>c.id))).map(id=>{
        return {
            id: id,
            name: req.session.cards.find(c=> c.id==id).name,
            price: req.session.cards.find(c=> c.id==id).price,
            quantity: req.session.cards.filter(c=> c.id ==id).length
        };
       });
        req.session.products = products;
    }else{
        req.session.products = [];
    }

    res.render("shoppingcart",{
        products: req.session.products
    });
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application is Running on ${port}`);
});
