const express=require('express');
const { HomePage, aboutpage } = require('../app/controller/HomeController');
const Router=express.Router()


Router.get('/',HomePage)
Router.get('/about',aboutpage)



module.exports=Router
