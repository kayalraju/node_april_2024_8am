const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name filed is required']
    },
    city:{
        type:String,
        required:[true,'name filed is required']
    },
    phone:{
        type:String,
        required:[true,'name filed is required']
    },
    photo:{
        type:String,
        required:true
    }

},
{timestamps: true}
)

const StudentModel=mongoose.model('student',studentSchema)

module.exports=StudentModel;