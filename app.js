const express=require('express')
const ejs=require('ejs')
const body_parser=require('body-parser')
const path=require('path')
const dotenv=require('dotenv');
const connectDB=require('./app/config/db')

const cors=require('cors')

dotenv.config()

const app=express()
connectDB()


app.set('view engine','ejs');
app.set('views','views')


 app.use(body_parser.urlencoded({extended:true}))
 app.use(body_parser.json())
app.use(cors())

app.use('/uploads',express.static('uploads'))

//create static folder
app.use(express.static(path.join(__dirname,'public')))

const HomeRouter=require('./router/homeRouter')
app.use(HomeRouter)

//craete web route for crud application
const webRoute=require('./router/webRoute')
app.use('/api',webRoute)

const Port= 1234
app.listen(Port,()=>{
    console.log(`server is running port http://localhost:${Port}`);
})

