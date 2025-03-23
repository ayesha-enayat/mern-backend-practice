import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: mongoose.Schema.Types.String,
        required: true

    },
    useremail:{
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true

    },
    userpassword:{
        type: mongoose.Schema.Types.String,
        required: true

    }
    
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

const User = mongoose.model("user",userSchema);

export default User;