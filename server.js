require('dotenv').config();
const app=require('./src/app')
const connectToDB=require('./src/config/db')

//important variables
const PORT=4000;

//connecting to database
connectToDB();

app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`)
})