const StudentModel = require('../model/student')
const path=require('path')
const slugify=require('slugify')
const fs=require('fs')
const { Validator } = require('node-input-validator');
//**create data */
const createStudent = async (req, res) => {

    try {
        
        const v = new Validator(req.body,
            { 
                name: 'required|minLength:5', 
                city: 'required|minLength:2', 
                phone: 'required|minLength:10' 
            }
          );
         const matched=await v.check().then((val)=>val);
         if(!matched){
            return  res.status(404).json({
                success: false,
                error:v.errors
            })
         }

        const { name, city, phone,photo } = req.body
        // if(!name || !city || !phone){
        //     return  res.status(404).json({
        //         success: false,
        //         message: "all input filed is required",
               
        //     }) 
        // }

        const studentdata = new StudentModel({
            name, city, phone,photo,
            slug: slugify(name),
        })

        if(req.file){
            studentdata.photo=req.file.path
        }
        const sdata = await studentdata.save()
      return  res.status(200).json({
            success: true,
            message: "data added successfully",
            data: sdata
        })

    } catch (error) {
       return res.status(500).json({
            success: false,
            message: error.message,

        })

    }

}

//***get all data */
const getdata = async(req, res) => {


    try{
        const getAlldata=await StudentModel.find({},{__v:0})

       return res.status(200).json({
            success: true,
            message: "data fetch successfully",
            data:getAlldata
    
        })

    }catch(error){
        console.log(error);

    }
   
}


//slug data
const getslugdata=async(req,res)=>{
    try{
        const slug=req.params.slug
        const getslug=await StudentModel.find({slug})

       return res.status(200).json({
            success: true,
            message: " successfully",
            data:getslug
    
        })

    }catch(error){
        console.log(error);

    }

}
//****get single data */
const editdata = async(req, res) => {

    try{
        const id=req.params.id
        const getsingledata=await StudentModel.findById(id)

       return res.status(200).json({
            success: true,
            message: "fetch single data",
            data:getsingledata
    
        })

    }catch(error){
        console.log(error);

    }
   
}

//****for update data */
const upsdatedata = async(req, res) => {

    try{
        const id=req.params.id
        const updatedata=await StudentModel.findByIdAndUpdate(id,req.body,{
            useFindAndModify:false
        })

       return res.status(200).json({
            success: true,
            message: "data update successfully",
          
        })

    }catch(error){
        console.log(error);

    }
   
}
//****for delete data */
const deletedata = async(req, res) => {

    try{
        const id=req.params.id
        const updatedata=await StudentModel.findByIdAndDelete(id)
        if(updatedata){
            fs.unlinkSync(updatedata.photo)
            return res.status(200).json({
                success: true,
                message: "data delete successfully",
              
            })
        }
    }catch(error){
        console.log(error);

    }
   
}


//ratelimit

const ratelimitd=(req,res)=>{
    return res.status(200).json({
        success: true,
        message: "test page",
      
    })
}

module.exports = {
    createStudent,
    getdata,
    editdata,
    upsdatedata,
    deletedata,
    getslugdata,
    ratelimitd
}