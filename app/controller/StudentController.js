const StudentModel = require('../model/student')


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

module.exports = {
    createStudent,
    getdata
}