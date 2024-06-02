const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name filed is required']
    },
    email:{
        type:String,
        required:[true,'email filed is required']
    },
    password:{
        type:String,
        required:[true,'password filed is required']
    },
    school_name:{
        type:String,
        required:[true,'school_name filed is required']
    },
    
   

},
{timestamps: true}
)


const UserModel=mongoose.model('user',userSchema)

module.exports=UserModel;