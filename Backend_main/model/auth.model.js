import mongoose from "mongoose";
import validator from "validator";

const authSchema = new  mongoose.Schema({
    username: {type: String, maxLength: 50, unique: true, required: true},
    fullname: {type: String, maxLength: 50, unique: true,},
    password: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true, validate: (mail) => validator.isEmail(mail)}
}, {timestamps: true})



const Auth = new mongoose.model("Auth",authSchema);


export default Auth;
