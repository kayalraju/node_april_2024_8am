const express=require('express');
const ProductController = require('../app/controller/ProductController');


const proRouter=express.Router()


proRouter.get('/product',ProductController.show)






module.exports=proRouter
