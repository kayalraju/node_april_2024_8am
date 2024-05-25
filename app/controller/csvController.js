const csvModel=require('../model/csvModel')
const csv=require('csvtojson')

const csvUpload=async(req,res)=>{
    try{
        const userData=[]
        csv()
        .fromFile(req.file.path)
        .then(async(response)=>{
            //console.log(response);
            for(let x= 0; x< response.length; x++){
                userData.push({
                    name:response[x].name, 
                    email:response[x].email, 
                    mobile:response[x].mobile, 
                })
            }
           const datas=await csvModel.insertMany(userData)
           res.status(200).json({
            message:"csv file uploaded successfully",
            data:datas
        })
        })
    }catch(error){
        res.status(400).json({
            message:error
        })
    }


}


module.exports={
    csvUpload
}