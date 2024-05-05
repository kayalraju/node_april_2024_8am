const StudentModel = require('../model/student')


//**create data */
const createStudent = async (req, res) => {

    try {
        //console.log('sddd',req.body);
        const { name, city, phone } = req.body

        const studentdata = new StudentModel({
            name, city, phone

        })
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
        const getAlldata=await StudentModel.find()

       return res.status(200).json({
            success: true,
            message: "data fetch successfully",
            data:getAlldata
    
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

       return res.status(200).json({
            success: true,
            message: "data delete successfully",
          
        })

    }catch(error){
        console.log(error);

    }
   
}

module.exports = {
    createStudent,
    getdata,
    editdata,
    upsdatedata,
    deletedata
}