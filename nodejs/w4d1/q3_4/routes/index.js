const express = require('express');
const inventory = require('../models/inventory');


const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('index', {title: 'Webcome to W4D1 Assignment', items: inventory});
});

module.exports = router;