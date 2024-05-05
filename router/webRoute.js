const express=require('express');
const { createStudent, getdata, editdata, upsdatedata, deletedata } = require('../app/controller/StudentController');

const StudentRouter=express.Router()


StudentRouter.post('/student',createStudent)
StudentRouter.get('/data',getdata)
StudentRouter.get('/edit/data/:id',editdata)
StudentRouter.post('/update/data/:id',upsdatedata)
StudentRouter.get('/delete/data/:id',deletedata)






module.exports=StudentRouter
