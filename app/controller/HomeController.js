const StudentModel=require('../model/student')







const aboutpage=async(req,res)=>{
    try{
        res.render('about',{
            title:"about page"
        })

    }catch(error){
        console.log(error);
    }
}

//*************crud application */

const HomePage=async(req,res)=>{
    try{
        const getAlldata=await StudentModel.find()
        res.render('home',{
            title:"home page",
            data:getAlldata
        })

    }catch(error){
        console.log(error);
    }

}

//**show add page */

const addStudent=async(req,res)=>{
    try{
       
        res.render('addStudent',{
            title:"add student page",
            
        })

    }catch(error){
        console.log(error);
    }

}

//***crerate ctudent */

const createtudent=async(req,res)=>{
    try{
        //console.log(req.body);
        const { name, city, phone } = req.body

        const studentdata = new StudentModel({
            name, city, phone

        })
        const sdata = await studentdata.save()
        if(sdata){
            res.redirect('/')
        }else{
            res.redirect('/add/student')
        }

    }catch(error){
        console.log(error);
    }

}

const deletestudent=async(req,res)=>{
    try{
        //console.log(req.body);
        const id=req.params.id
        const updatedata=await StudentModel.findByIdAndDelete(id)
        if(updatedata){
            res.redirect('/')
        }else{
            console.log('data not deleted');
        }

    }catch(error){
        console.log(error);
    }

}
const editstudent=async(req,res)=>{
    try{
        //console.log(req.body);
        const id=req.params.id
        const getsingledata=await StudentModel.findById(id)

       res.render('editstudent',{
        title:"update page",
        data:getsingledata
       })

    }catch(error){
        console.log(error);
    }

}
const updatestudent=async(req,res)=>{
    try{
        
        const id=req.params.id
        const updatedata=await StudentModel.findByIdAndUpdate(id, req.body,{
            useFindAndModify:false
        })
       
        res.redirect('/')
       

    }catch(error){
        console.log(error);
    }

}


module.exports={HomePage,aboutpage,addStudent,createtudent,deletestudent,editstudent,updatestudent}