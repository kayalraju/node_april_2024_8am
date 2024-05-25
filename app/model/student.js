const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name filed is required']
    },
    slug:{
        type:String,
        lowercase:true,
        default:"dataa"
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


studentSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

studentSchema.set('toJSON', {
    virtuals: true,
});

const StudentModel=mongoose.model('student',studentSchema)

module.exports=StudentModel;