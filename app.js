const express=require('express')
const ejs=require('ejs')
const path=require('path')

const app=express()

app.set('view engine','ejs');
app.set('views','views')

//create static folder
app.use(express.static(path.join(__dirname,'public')))

const HomeRouter=require('./router/homeRouter')
app.use(HomeRouter)

const Port=1245
app.listen(Port,()=>{
    console.log(`server is running port http://localhost:${Port}`);
})

