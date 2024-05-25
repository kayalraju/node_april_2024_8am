const express=require('express');
const { csvUpload } = require('../app/controller/csvController');
const csvfileupload = require('../app/helper/csvUploadfile');


const csvRouter=express.Router()


csvRouter.post('/csv/upload',csvfileupload.single('file'),csvUpload)






module.exports=csvRouter
