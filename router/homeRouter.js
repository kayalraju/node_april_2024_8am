const express=require('express');
const { HomePage, aboutpage, addStudent, createtudent, deletestudent, editstudent, updatestudent } = require('../app/controller/HomeController');
const Router=express.Router()


Router.get('/',HomePage)
Router.get('/about',aboutpage)


//****crud ui */

Router.get('/add/student',addStudent)
Router.post('/student/create',createtudent)
Router.get('/student/delete/:id',deletestudent)
Router.get('/student/edit/:id',editstudent)
Router.post('/student/update/:id',updatestudent)


module.exports=Router
