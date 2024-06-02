const { hashPassword, comparePassword, CreateToken } = require('../middleware/Auth')
const User=require('../model/user');
const jwt=require('jsonwebtoken')

class AuthContrtoller{

    register=async(req,res)=>{
        try{
            const {name,email,password,school_name}=req.body
            if(!name){
                return res.send({message:"Name filed is required"})
            }
            const existingUser=await User.findOne({email})
            if(existingUser){
                return res.status(500).send({
                    sucess:false,
                    message:"This Email Id Already exist"
                })
            }

            const hashedPassword=await hashPassword(password)
          const userdata= new User({
            name,
            email,
            password:hashedPassword,
            school_name
            })

           const result= await userdata.save()
           return res.status(201).send({
            sucess:true,
            message:"Register successfully",
            result
        })


        }catch(error){
            console.log(error);
        }
    }

    login=async(req,res)=>{
        try{
            const {email,password}=req.body
            if(!email || !password){
                return res.status(500).send({
                    sucess:false,
                    message:"invalid email or password",
                })
            }
            //check user
            const users=await User.findOne({email})
            //console.log('uu',users);
            if(!users){
                return res.status(500).send({
                    message:"email is Not Register",
                }) 
            }
            const match=await comparePassword(password,users.password)
            if(!match){
                return res.status(500).send({
                    message:"invalid password",
                }) 
            }
            const token=await jwt.sign({
                _id:users._id,
                name:users.name,
                email:users.email
            },process.env.JWT_SECRET,{expiresIn:'12h'})

            return res.status(200).send({
                message:"login successfully",
                status:true,
                user:{
                    _id:users._id,
                    name:users.name,
                    email:users.email
                },
                token
            })

        }catch(error){
            console.log(error);
        }
    }



    dashboard=async(req,res)=>{
        try{
            return res.status(200).send({
                message:"welcome to user Dashboard",
            })
        }catch{
            (error)
        }
    }

}

module.exports= new AuthContrtoller()