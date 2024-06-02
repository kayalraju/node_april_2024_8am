const express=require('express');
const AuthController = require('../app/controller/AuthController');
const { AuthCheck } = require('../app/middleware/Auth');

const Router=express.Router()


Router.post('/user/register',AuthController.register)
Router.post('/user/login',AuthController.login)
Router.get('/user/dashboard',AuthCheck,AuthController.dashboard)






module.exports=Router
