const express = require("express");
const carts = require('../controllers/cart.controller')

const cartRoute=express.Router();

cartRoute.route('/')
    .post(carts.create)
    .get(carts.findAll);
cartRoute.route('/one')
    .get(carts.findOne);
cartRoute.route('/one/:id')
    .delete(carts.deleteId);
cartRoute.route('/by/pages')
    .get(carts.getByPage);
cartRoute.route('/:id')
    .get(carts.getOne)
    .put(carts.update)
    .delete(carts.delete);
module.exports=cartRoute