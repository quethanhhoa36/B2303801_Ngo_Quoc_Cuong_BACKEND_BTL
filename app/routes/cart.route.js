const express = require("express");
const carts = require('../controllers/cart.controller')

const cartRoute=express.Router();

cartRoute.route('/')
    .post(carts.create);
cartRoute.route('/one')
    .get(carts.findOne);

module.exports=cartRoute