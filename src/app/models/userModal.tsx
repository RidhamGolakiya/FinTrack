const mongoose = require("mongoose");
const connect = require("../../../connection")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;