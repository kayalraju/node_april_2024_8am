const express=require('express')
const ejs=require('ejs')
const body_parser=require('body-parser')
const path=require('path')
const dotenv=require('dotenv');
const connectDB=require('./app/config/db')
const session = require('express-session');
const flash = require('connect-flash');
const cors=require('cors')
const rateLimitMiddleware=require('./app/middleware/rateLimit')
dotenv.config()

const app=express()
connectDB()


//for express rate limit
app.use(rateLimitMiddleware)

app.use(session({
    secret:'secrect',
    cookie:{maxAge:600000},
    resave:false,
    saveUninitialized:false
}))

app.use(flash())

app.set('view engine','ejs');
app.set('views','views')


app.use(body_parser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
})); // get information from html forms
app.use(body_parser.json({
    limit: "50mb"
}));
app.use(cors())


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
    next();
 })
 
app.use('/uploads',express.static('uploads'))

//create static folder
app.use(express.static(path.join(__dirname,'public')))

const HomeRouter=require('./router/homeRouter')
app.use(HomeRouter)
const csvroute=require('./router/csvRoute')
app.use(csvroute)
//craete web route for crud application
const webRoute=require('./router/webRoute')
app.use('/api',webRoute)

const ProductRoute=require('./router/productRoute');
app.use(ProductRoute)


//for auth

const AuthRouter=require('./router/authRoute');
app.use('/api',AuthRouter)
const Port= 1234
app.listen(Port,()=>{
    console.log(`server is running port http://localhost:${Port}`);
})

