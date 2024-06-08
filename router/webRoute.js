const express=require('express');
const { createStudent, getdata, editdata, upsdatedata, deletedata, getslugdata, ratelimitd } = require('../app/controller/StudentController');
const uploadTure=require('../app/helper/StudentImageUpload');
const { default: rateLimit } = require('express-rate-limit');
const StudentRouter=express.Router()


StudentRouter.post('/student',uploadTure.single('photo'),createStudent)
StudentRouter.get('/data',getdata)
StudentRouter.get('/edit/data/:id',editdata)
StudentRouter.post('/update/data/:id',uploadTure.single('photo'),upsdatedata)
StudentRouter.get('/delete/data/:id',deletedata)

//slug
StudentRouter.get('/data/slugdata/:slug',getslugdata)



StudentRouter.get('/ratelimit',ratelimitd)






module.exports=StudentRouter
