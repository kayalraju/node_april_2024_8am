
const user={
    name:"pritam",
    email:"p@gmail.com"
}


const HomePage=async(req,res)=>{
    try{
        res.render('home',{
            title:"home page",
            data:user
        })

    }catch(error){
        console.log(error);
    }

}


const aboutpage=async(req,res)=>{
    try{
        res.render('about',{
            title:"about page"
        })

    }catch(error){
        console.log(error);
    }
}


module.exports={HomePage,aboutpage}