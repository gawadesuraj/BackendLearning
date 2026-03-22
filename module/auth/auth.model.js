import { string } from "joi";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        minlength : 2, 
        maxlength : 58,
        required : [true, "Name is required"]
    },
    email : {
        type : String,
        trim : true,
        required : [true, "email is required"],
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : [true, "email is required"],
        unique : true,
        maxlength : 200,
        minlength : 8,
        select : false

    },
    rele:{
        type : String,
        enum : ["customer", "seller", "admin"],
        default : "customer"
    },
    isVarified :{
        type : Boolean,
        default : false
    },
    varificationToken : {type : String, select : false},
    resetPasswordToken : {type : String, select : false},
    resetPasswordExpirse : {type : String, select : false}

},{timestamps: true});

export default mongoose.model("User", userSchema);