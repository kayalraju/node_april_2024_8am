const express=require('express');
const { createStudent, getdata } = require('../app/controller/StudentController');

const StudentRouter=express.Router()


StudentRouter.post('/student',createStudent)
StudentRouter.get('/data',getdata)






module.exports=StudentRouter
