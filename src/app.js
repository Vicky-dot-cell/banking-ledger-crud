const express = require('express')
const cookieParser=require('cookie-parser')
const authRouter=require('./routes/auth.routes')

//initializing express
const app = express();
app.use(cookieParser())
app.use(express.json())


//authentication route
app.use("/api/auth",authRouter);


module.exports=app;