const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userSchema=new mongoose.Schema({
    email: {
        type: String,
        required: [true,"email is required to create user"],
        trim: true,
        lowercase: true,
        //match: [/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,"invalid email"],
        unique: true
    },
    name: {
        type: String,
        require: [true,"name is required to create account"]
    },
    password: {
        type: String,
        require: [true,"password is required to create account"],
        minlength: [6,"should be more than 6 characters"],
        select: false
    }
},{
    timestamps: true
})

userSchema.pre("save",async function(){

    if(!this.isModified("password")){
        // return next();
    }

    const hash = await bcrypt.hash(this.password,10)
    this.password=hash;
    // return next();
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password); 
}

const userModel=mongoose.model("user",userSchema);
module.exports=userModel;