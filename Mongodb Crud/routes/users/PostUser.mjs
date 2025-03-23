import User from '../../models/user/index.mjs';
import bcrypt from "bcrypt";
import 'dotenv/config'
import jwt from "jsonwebtoken"

const postUser= async (req,res)=>{
    try{
         //  delete paasword before show in response
        // const data = user.toObject();
        // delete data.userpassword;
        // console.log("userdata",data)
        // res.status(201).send({status:201,"userdata":data})

        //make password salty using bycrpt  
        const hashedPassword = bcrypt.hashSync(req.body.userpassword, 10);
        const user = await User.create({
            ...req.body,
            userpassword: hashedPassword
        });
        console.log("userdata",user)
        var token = jwt.sign({email:user.useremail}, process.env.JWT_SECRET);
        res.status(201).send({status:201,"userdata":user,token})
    }
    catch(err){
        res.status(500).send({status:500,err:err.message})
    }
    
}

export default postUser;