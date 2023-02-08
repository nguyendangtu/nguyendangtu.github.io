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

app.get('/product',(req,res)=>{
    let index = parseInt(req.query.index);
    res.render('product', {
        product: inventory[index]
    });
});

app.post('/cart', (req,res)=>{
    const name = req.body.p;
    let product = inventory.filter(x=>x.name.split(" ")[0] == name)[0];
    let cart = [];
    if(req.session.cart){
        cart = req.session.cart;
    }
    cart.push(product);
    req.session.cart = cart;
    res.redirect('/cart');
});


app.get('/cart', (req,res) => {
    let cart = [];
    if(req.session.cart){
        cart = req.session.cart;
    }
    res.render('cart',{
        cart: cart
    })
});

app.listen(3000, ()=>console.log("Server is running...."));
module.exports = app;



